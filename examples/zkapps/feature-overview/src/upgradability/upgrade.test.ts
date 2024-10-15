import { AccountUpdate, Bool, Mina } from 'o1js';
import { AddV1 } from './AddV1.js';
import { AddV2 } from './AddV2.js';

import { test } from 'node:test';
import assert from 'assert';

const Network = await Mina.LocalBlockchain({ proofsEnabled: true });
Mina.setActiveInstance(Network);

const sender = Network.testAccounts[0];
const zkappAccount = Network.testAccounts[1];

let senderKey = sender.key;
let addKey = zkappAccount.key;
let feepayerAddress = senderKey.toPublicKey();
let addAddress = addKey.toPublicKey();
let zkApp = new AddV1(addAddress);

const fee = 1e9;

// compile the contract to create prover functions and verification keys
const v1Contract = await AddV1.compile();
const v2Contract = await AddV2.compile();

test('Compiled ZkApps have the correct verification keys', () => {
  assert(
    v1Contract.verificationKey.hash.toString() ===
      '27729068461170601362912907281403262888852363473424470267835507636847418791713'
  );
  assert(
    v2Contract.verificationKey.hash.toString() ===
      '18150279532259194644722165513074833862035641840431153413486908511595437348455'
  );
});

let tx = await Mina.transaction({ sender, fee }, async () => {
  await zkApp.deploy();
});
await tx.sign([senderKey, addKey]).prove();
await tx.send().wait();

let account = Mina.getAccount(zkApp.address);
let currentVK = account.zkapp?.verificationKey?.hash.toString();

test('Initial verification key is set to the V1 contract', () => {
  assert(currentVK === v1Contract.verificationKey.hash.toString());
});

tx = await Mina.transaction(
  { sender: feepayerAddress, fee: fee + 10 },
  async () => {
    const update = AccountUpdate.createSigned(zkApp.address);
    update.update.verificationKey = {
      isSome: Bool(true),
      value: v2Contract.verificationKey,
    };
  }
);
await tx.sign([senderKey, addKey]).prove();
await tx.send().wait();

account = Mina.getAccount(zkApp.address);
currentVK = account.zkapp?.verificationKey?.hash.toString();

test('Verification key is updated to the V2 contract', () => {
  assert(currentVK === v2Contract.verificationKey.hash.toString());
});
