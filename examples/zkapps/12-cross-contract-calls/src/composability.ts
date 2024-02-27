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

class Incrementer extends SmartContract {
  @method increment(x: Field): Field {
    return x.add(1);
  }
}

class Adder extends SmartContract {
  @method addPlus1(x: Field, y: Field): Field {
    // compute result
    let sum = x.add(y);
    // call the other contract to increment
    let incrementer = new Incrementer(incrementerAddress);
    return incrementer.increment(sum);
  }
}

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

let Local = Mina.LocalBlockchain({ proofsEnabled: doProofs });
Mina.setActiveInstance(Local);

let feePayerKey = Local.testAccounts[0].privateKey;
let feePayer = Local.testAccounts[0].publicKey;

let incrementerKey = PrivateKey.random();
let incrementerAddress = incrementerKey.toPublicKey();

let adderKey = PrivateKey.random();
let adderAddress = adderKey.toPublicKey();

let zkappKey = PrivateKey.random();
let zkappAddress = zkappKey.toPublicKey();

let zkapp = new Caller(zkappAddress);
let adderZkapp = new Adder(adderAddress);
let incrementerZkapp = new Incrementer(incrementerAddress);

if (doProofs) {
  console.log('compile (incrementer)');
  await Incrementer.compile();
  console.log('compile (adder)');
  await Adder.compile();
  console.log('compile (caller)');
  await Caller.compile();
}

console.log('deploy');
let tx = await Mina.transaction(feePayer, () => {
  AccountUpdate.fundNewAccount(feePayer, 3);
  zkapp.deploy();
  adderZkapp.deploy();
  incrementerZkapp.deploy();
});
await tx.sign([feePayerKey, zkappKey, adderKey, incrementerKey]).send();

console.log('call interaction');
tx = await Mina.transaction(feePayer, () => {
  zkapp.callAddAndEmit(Field(5), Field(6));
});
console.log('proving (3 proofs.. can take a bit!)');
await tx.prove();
console.log(tx.toPretty());
await tx.sign([feePayerKey]).send();

console.log('state: ' + zkapp.sum.get());
