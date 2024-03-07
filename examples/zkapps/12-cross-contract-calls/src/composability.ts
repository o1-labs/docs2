import {
  Field,
  method,
  Mina,
  AccountUpdate,
  PrivateKey,
  SmartContract,
  state,
  State,
} from 'o1js';

// Contract which adds 1 to a number
class Incrementer extends SmartContract {
  @method increment(x: Field): Field {
    return x.add(1);
  }
}

// Contract which add two numbers and plus 1 to their sum and return the result
// Incrementing by one is outsourced to Incrementer contract
class Adder extends SmartContract {
  @method addPlus1(x: Field, y: Field): Field {
    // Compute result
    let sum = x.add(y);
    // Call the Incrementer contract to increment by 1
    let incrementer = new Incrementer(incrementerAddress);
    return incrementer.increment(sum);
  }
}

// Contract which calls the Adder contract, stores the result on chain & emits an event
class Caller extends SmartContract {
  @state(Field) sum = State<Field>();
  events = { sum: Field };

  @method callAddAndEmit(x: Field, y: Field) {
    let adder = new Adder(adderAddress);
    let sum = adder.addPlus1(x, y);
    this.emitEvent('sum', sum);
    this.sum.set(sum);
  }
}

const doProofs = true;

// Deploy and interact with smart contract locally
let Local = Mina.LocalBlockchain({ proofsEnabled: doProofs });
Mina.setActiveInstance(Local);

// Test account that pays all the fees, and puts additional funds into the zkapp
let feePayerKey = Local.testAccounts[0].privateKey;
let feePayer = Local.testAccounts[0].publicKey;

// The Incrementer contract's address
let incrementerKey = PrivateKey.random();
let incrementerAddress = incrementerKey.toPublicKey();

// The Adder contract's address
let adderKey = PrivateKey.random();
let adderAddress = adderKey.toPublicKey();

// The Caller contract's address
let callerKey = PrivateKey.random();
let callerAddress = callerKey.toPublicKey();

let callerZkapp = new Caller(callerAddress);
let adderZkapp = new Adder(adderAddress);
let incrementerZkapp = new Incrementer(incrementerAddress);

// When doProofs is true, compile contracts to generate prover and verifier keys
if (doProofs) {
  console.log('compile (incrementer)');
  await Incrementer.compile();
  console.log('compile (adder)');
  await Adder.compile();
  console.log('compile (caller)');
  await Caller.compile();
}

// Create transaction to deploy contracts
console.log('deploy');
let tx = await Mina.transaction(feePayer, () => {
  AccountUpdate.fundNewAccount(feePayer, 3);
  callerZkapp.deploy();
  adderZkapp.deploy();
  incrementerZkapp.deploy();
});
// Sign all four account updates by 
// passing the corresponding private key for the mentioned public addresses
await tx.sign([feePayerKey, callerKey, adderKey, incrementerKey]).send();

// Create transaction to interact with the callAddAndEmit method of Caller contract
console.log('call interaction');
tx = await Mina.transaction(feePayer, () => {
  callerZkapp.callAddAndEmit(Field(5), Field(6));
});
console.log('proving (3 proofs.. can take a bit!)');
await tx.prove();
console.log(tx.toPretty());
await tx.sign([feePayerKey]).send();

console.log('state: ' + callerZkapp.sum.get());
