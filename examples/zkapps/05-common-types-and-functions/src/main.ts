
import {
  Mina,
  isReady,
  shutdown,
  Bool,
  UInt32,
  UInt64,
  Int64,
  Character,
  CircuitString,
  PrivateKey,
  Signature,
  Poseidon,
  Field,
  CircuitValue,
  prop,
  arrayProp,
  Circuit,
  MerkleWitness,
  MerkleTree,
  AccountUpdate
} from 'snarkyjs'

import { LedgerContract } from './LedgerContract.js'
import { BasicMerkleTreeContract } from './BasicMerkleTreeContract.js'

await isReady;

// --------------------------------------

const num1 = UInt32.from(40);
const num2 = UInt64.from(40);

const num1EqualsNum2: Bool = num1.toUInt64().equals(num2);

console.log("// --------------------------------------");
console.log(`num1 == num2: ${num1EqualsNum2.toString()}`);
console.log(`Fields in num1: ${num1.toFields().length}`);

// --------------------------------------

const signedNum1 = Int64.from(-3);
const signedNum2 = Int64.from(45);

const signedNumSum = signedNum1.add(signedNum2);

console.log(`signedNum1 + signedNum2: ${signedNumSum.toString()}`);
console.log(`Fields in signedNum1: ${signedNum1.toFields().length}`);

// --------------------------------------

const char1 = Character.fromString('c');
const char2 = Character.fromString('d');

console.log(`char1: ${char1.toString()}`);
console.log(`char1 == char2: ${char1.equals(char2).toString()}`);
console.log(`Fields in char1: ${char1.toFields().length}`);
console.log("// --------------------------------------");

// --------------------------------------

const str1 = CircuitString.fromString('abc..xyz');
console.log(`str1: ${str1.toString()}`);
console.log(`Fields in str1: ${str1.toFields().length}`);

// --------------------------------------

const zkAppPrivateKey = PrivateKey.random();
const zkAppPublicKey = zkAppPrivateKey.toPublicKey();

const data1 = char2.toFields().concat(signedNumSum.toFields())
const data2 = char1.toFields().concat(str1.toFields());

const signature = Signature.create(zkAppPrivateKey, data2);

const verifiedData1 = signature.verify(zkAppPublicKey, data1);
const verifiedData2 = signature.verify(zkAppPublicKey, data2);

console.log(`private key: ${zkAppPrivateKey.toBase58()}`);
console.log(`public key: ${zkAppPublicKey.toBase58()}`);
console.log(`Fields in private key: ${zkAppPrivateKey.toFields().length}`);
console.log(`Fields in public key: ${zkAppPublicKey.toFields().length}`);

console.log(`signature verified for data1: ${verifiedData1.toString()}`);
console.log(`signature verified for data2: ${verifiedData2.toString()}`);

console.log(`Fields in signature: ${signature.toFields().length}`);
console.log("// --------------------------------------");

// --------------------------------------

class Point extends CircuitValue {
  @prop x: Field;
  @prop y: Field;

  static fromField(x: Field, y: Field) {
    return new Point(x, y);
  }

  static addPoints(a: Point, b: Point) {
    return new Point(a.x.add(b.x), a.y.add(b.y));
  }
}

const point1 = Point.fromField(Field(10), Field(4));
const point2 = Point.fromField(Field(1), Field(2));

const pointSum = Point.addPoints(point1, point2);

console.log(`pointSum Fields: ${pointSum.toFields().map((p) => p.toString())}`);

class Points8 extends CircuitValue {
  @arrayProp(Point, 8) points: Point[];

  constructor(points: Point[]) {
    super();
    this.points = points;
  }
}

const pointsArray = new Array(8).fill(null).map((_, i) => Point.fromField(Field(i), Field(i*10)));
const points8 = new Points8(pointsArray);

console.log(`points8 Fields: ${JSON.stringify(points8)}`);
console.log("// --------------------------------------");

// --------------------------------------

const input1 = Int64.from(10);
const input2 = Int64.from(-15);

const inputSum = input1.add(input2);

const inputSumAbs = Circuit.if(inputSum.isPositive(), inputSum, inputSum.mul(Int64.minusOne));

console.log(`inputSum: ${inputSum.toString()}`);
console.log(`inputSumAbs: ${inputSumAbs.toString()}`);

const input3 = Int64.from(22);

const input1largest = input1.sub(input2).isPositive().and(input1.sub(input3).isPositive());
const input2largest = input2.sub(input1).isPositive().and(input2.sub(input3).isPositive());
const input3largest = input3.sub(input1).isPositive().and(input3.sub(input2).isPositive());

const largest = Circuit.switch([ input1largest, input2largest, input3largest ], Int64, [ input1, input2, input3 ])

console.log(`largest: ${largest.toString()}`);
console.log("// --------------------------------------");

// --------------------------------------

const Local = Mina.LocalBlockchain();
Mina.setActiveInstance(Local);
const { privateKey: deployerKey, publicKey: deployerAccount } = Local.testAccounts[0];
const { privateKey: senderPrivateKey, publicKey: senderPublicKey } = Local.testAccounts[1];

// --------------------------------------
// create a new merkle tree and BasicMerkleTreeContract zkapp account 

{

  const basicTreeZkAppPrivateKey = PrivateKey.random();
  const basicTreeZkAppAddress = basicTreeZkAppPrivateKey.toPublicKey();

  const height = 20;
  const tree = new MerkleTree(height);
  class MerkleWitness20 extends MerkleWitness(height) {}

  const zkApp = new BasicMerkleTreeContract(basicTreeZkAppAddress);
  await BasicMerkleTreeContract.compile()

  const deployTxn = await Mina.transaction(deployerAccount, () => {
    AccountUpdate.fundNewAccount(deployerAccount);
    zkApp.deploy();
    zkApp.initState(tree.getRoot());
  });
  await deployTxn.prove();
  await deployTxn.sign([deployerKey, basicTreeZkAppPrivateKey]).send();

  const incrementIndex = 522;
  const incrementAmount = Field(9);

  const witness = new MerkleWitness20(tree.getWitness(BigInt(incrementIndex)));
  tree.setLeaf(BigInt(incrementIndex), incrementAmount);

  const txn1 = await Mina.transaction(senderPublicKey, () => {
    zkApp.update(witness, Field(0), incrementAmount);
  });
  await txn1.prove();
  await txn1.sign([senderPrivateKey, zkAppPrivateKey]).send();
  
  console.log(`BasicMerkleTree: local tree root hash after send1: ${tree.getRoot()}`);
  console.log(`BasicMerkleTree: smart contract root hash after send1: ${zkApp.treeRoot.get()}`);
}

// --------------------------------------
// create a new merkle tree and LedgerContract zkapp account 

{

  const ledgerZkAppPrivateKey = PrivateKey.random();
  const ledgerZkAppAddress = ledgerZkAppPrivateKey.toPublicKey();

  const height = 20;
  const tree = new MerkleTree(height);
  class MerkleWitness20 extends MerkleWitness(height) {}

  const senderInitialBalance = Field(100);
  const recipientInitialBalance = Field(7);

  const recipientPrivateKey = PrivateKey.random();
  const recipientPublicKey = recipientPrivateKey.toPublicKey();

  const senderAccount = 10;
  const recipientAccount = 500;

  tree.setLeaf(
    BigInt(senderAccount), 
    Poseidon.hash([ senderInitialBalance, Poseidon.hash(senderPublicKey.toFields()) ])
  );
  tree.setLeaf(
    BigInt(recipientAccount), 
    Poseidon.hash([ recipientInitialBalance, Poseidon.hash(recipientPublicKey.toFields()) ])
  );

  const zkApp = new LedgerContract(ledgerZkAppAddress);
  await LedgerContract.compile();

  const deployTxn = await Mina.transaction(deployerAccount, () => {
    AccountUpdate.fundNewAccount(deployerAccount);
    zkApp.deploy();
    zkApp.initState(tree.getRoot());
  });
  await deployTxn.prove()
  await deployTxn.sign([deployerKey, ledgerZkAppPrivateKey]).send();

  // --------------------------------------
  // send from the sender to the recipient

  const amount = Field(12);

  const newSenderBalance = senderInitialBalance.sub(amount)

  const sendWitness1 = new MerkleWitness20(tree.getWitness(BigInt(senderAccount)));
  tree.setLeaf(
    BigInt(senderAccount), 
    Poseidon.hash([ newSenderBalance, Poseidon.hash(senderPublicKey.toFields()) ])
  );
  const recipientWitness1 = new MerkleWitness20(tree.getWitness(BigInt(recipientAccount)));

  tree.setLeaf(
    BigInt(recipientAccount), 
    Poseidon.hash([ recipientInitialBalance.add(amount), Poseidon.hash(recipientPublicKey.toFields()) ])
  );

  const signature1 = Signature.create(
    senderPrivateKey, 
    [ zkApp.ledgerRoot.get(), amount ].concat(recipientPublicKey.toFields())
  );

  const txn1 = await Mina.transaction(senderPublicKey, () => {
    zkApp.sendBalance(
      sendWitness1, 
      recipientWitness1, 
      senderInitialBalance, 
      recipientInitialBalance, 
      senderPublicKey,
      recipientPublicKey,
      signature1,
      amount);
  });

  await txn1.prove();

  await txn1.sign([senderPrivateKey, ledgerZkAppPrivateKey]).send();

  console.log(`LedgerContract: local tree root hash after send1: ${tree.getRoot()}`);
  console.log(`LedgerContract: smart contract root hash after send1: ${zkApp.ledgerRoot.get()}`);

  // --------------------------------------
  // send from the sender to a recipient that wasn't in the account before

  const newRecipientPublicKey = PrivateKey.random().toPublicKey();
  const newRecipientAccount = 10000;

  const sendWitness2 = new MerkleWitness20(tree.getWitness(BigInt(senderAccount)));
  tree.setLeaf(BigInt(senderAccount), Poseidon.hash([ newSenderBalance.sub(amount), Poseidon.hash(senderPublicKey.toFields()) ]));
  const recipientWitness2 = new MerkleWitness20(tree.getWitness(BigInt(newRecipientAccount)));

  tree.setLeaf(BigInt(newRecipientAccount), Poseidon.hash([ amount, Poseidon.hash(newRecipientPublicKey.toFields()) ]));

  const signature2 = Signature.create(
    senderPrivateKey, 
    [ zkApp.ledgerRoot.get(), amount ].concat(newRecipientPublicKey.toFields())
  );

  const txn2 = await Mina.transaction(senderPublicKey, () => {
    zkApp.sendBalance(
      sendWitness2, 
      recipientWitness2, 
      newSenderBalance, 
      Field(0), 
      senderPublicKey,
      newRecipientPublicKey,
      signature2,
      amount);
  });
  await txn2.prove();
  await txn2.sign([senderPrivateKey, ledgerZkAppPrivateKey]).send();

  console.log(`LedgerContract: local tree root hash after send2: ${tree.getRoot()}`);
  console.log(`LedgerContract: smart contract root hash after send2: ${zkApp.ledgerRoot.get()}`);

}

// --------------------------------------

await shutdown();
