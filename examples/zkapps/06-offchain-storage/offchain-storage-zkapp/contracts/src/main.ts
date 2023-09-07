import { NumberTreeContract } from './NumberTreeContract.js';
import {
  OffChainStorage,
  MerkleWitness8,
} from 'experimental-offchain-zkapp-storage';
import fs from 'fs';

import { Mina, PrivateKey, AccountUpdate, Field, Bool } from 'o1js';

import { makeAndSendTransaction, loopUntilAccountExists } from './utils.js';

import XMLHttpRequestTs from 'xmlhttprequest-ts';
const NodeXMLHttpRequest =
  XMLHttpRequestTs.XMLHttpRequest as any as typeof XMLHttpRequest;

const useLocal = true;

// ----------------------------------------

const transactionFee = 100_000_000;

const treeHeight = 8;

let feePayerKey: PrivateKey;
let zkappPrivateKey: PrivateKey;
if (useLocal) {
  const Local = Mina.LocalBlockchain();
  Mina.setActiveInstance(Local);

  feePayerKey = Local.testAccounts[0].privateKey;
  zkappPrivateKey = PrivateKey.random();
} else {
  const Berkeley = Mina.Network(
    'https://proxy.berkeley.minaexplorer.com/graphql'
  );
  Mina.setActiveInstance(Berkeley);

  const deployAlias = process.argv[2];

  const deployerKeysFileContents = fs.readFileSync(
    'keys/' + deployAlias + '.json',
    'utf8'
  );

  const deployerPrivateKeyBase58 = JSON.parse(
    deployerKeysFileContents
  ).privateKey;

  feePayerKey = PrivateKey.fromBase58(deployerPrivateKeyBase58);
  zkappPrivateKey = feePayerKey;
}

const zkappPublicKey = zkappPrivateKey.toPublicKey();

// ----------------------------------------
// setup the zkapp

const storageServerAddress = 'http://localhost:3001';
const serverPublicKey = await OffChainStorage.getPublicKey(
  storageServerAddress,
  NodeXMLHttpRequest
);

console.log('Compiling smart contract...');
await NumberTreeContract.compile();
console.log('Done compiling smart contract');

const zkapp = new NumberTreeContract(zkappPublicKey);

if (useLocal) {
  const transaction = await Mina.transaction(feePayerKey.toPublicKey(), () => {
    AccountUpdate.fundNewAccount(feePayerKey.toPublicKey());
    zkapp.deploy({ zkappKey: zkappPrivateKey });
    zkapp.initState(serverPublicKey);
  });
  transaction.sign([zkappPrivateKey, feePayerKey]);
  await transaction.prove();
  await transaction.send();
} else {
  await loopUntilAccountExists({
    account: zkappPrivateKey.toPublicKey(),
    eachTimeNotExist: () =>
      console.log('waiting for zkApp account to be deployed...'),
    isZkAppAccount: true,
  });
}

// ----------------------------------------
// update the smart contract

const height = 8;

async function updateTree() {
  const index = BigInt(Math.floor(Math.random() * 4));

  // get the existing tree
  const treeRoot = await zkapp.storageTreeRoot.get();
  const idx2fields = await OffChainStorage.get(
    storageServerAddress,
    zkappPublicKey,
    treeHeight,
    treeRoot,
    NodeXMLHttpRequest
  );

  const tree = OffChainStorage.mapToTree(treeHeight, idx2fields);
  const leafWitness = new MerkleWitness8(tree.getWitness(BigInt(index)));

  // get the prior leaf
  const priorLeafIsEmpty = !idx2fields.has(index);
  let priorLeafNumber: Field;
  let newLeafNumber: Field;
  if (!priorLeafIsEmpty) {
    priorLeafNumber = idx2fields.get(index)![0];
    newLeafNumber = priorLeafNumber.add(3);
  } else {
    priorLeafNumber = Field(0);
    newLeafNumber = Field(1);
  }

  // update the leaf, and save it in the storage server
  idx2fields.set(index, [newLeafNumber]);

  const [storedNewStorageNumber, storedNewStorageSignature] =
    await OffChainStorage.requestStore(
      storageServerAddress,
      zkappPublicKey,
      treeHeight,
      idx2fields,
      NodeXMLHttpRequest
    );

  console.log(
    'changing index',
    index,
    'from',
    priorLeafNumber.toString(),
    'to',
    newLeafNumber.toString()
  );

  // update the smart contract

  const doUpdate = () => {
    zkapp.update(
      Bool(priorLeafIsEmpty),
      priorLeafNumber,
      newLeafNumber,
      leafWitness,
      storedNewStorageNumber,
      storedNewStorageSignature
    );
  };

  if (useLocal) {
    const updateTransaction = await Mina.transaction(
      { sender: feePayerKey.toPublicKey(), fee: transactionFee },
      () => {
        doUpdate();
      }
    );
    updateTransaction.sign([zkappPrivateKey, feePayerKey]);
    await updateTransaction.prove();
    await updateTransaction.send();
  } else {
    await makeAndSendTransaction({
      feePayerPrivateKey: feePayerKey,
      zkAppPublicKey: zkappPublicKey,
      mutateZkApp: () => doUpdate(),
      transactionFee: transactionFee,
      getState: () => zkapp.storageTreeRoot.get(),
      statesEqual: (root1, root2) => root1.equals(root2).toBoolean(),
    });
  }

  console.log('root updated to', zkapp.storageTreeRoot.get().toString());
}

for (;;) {
  await updateTree();
}

//---------------------------
