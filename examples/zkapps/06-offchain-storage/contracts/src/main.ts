import { NumberTreeContract } from './NumberTreeContract.js';
import { OffChainStorage, MerkleWitness8 } from 'experimental-zkapp-offchain-storage';
import fs from 'fs';

import {
  Mina,
  isReady,
  PublicKey,
  PrivateKey,
  AccountUpdate,
  Group,
  Character,
  CircuitString,
  Signature,
  Field,
  Bool,
  shutdown,
} from 'snarkyjs';

import { makeAndSendTransaction, loopUntilAccountExists } from './utils.js';

import XMLHttpRequestTs from 'xmlhttprequest-ts';
const NodeXMLHttpRequest =
  XMLHttpRequestTs.XMLHttpRequest as any as typeof XMLHttpRequest;

const useLocal = true;

async function main() {
  await isReady;

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
    const Berkeley = Mina.BerkeleyQANet(
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

  if (!useLocal) {
    console.log('Compiling smart contract...');
    await NumberTreeContract.compile();
  }

  const zkapp = new NumberTreeContract(zkappPublicKey);

  if (useLocal) {
    const transaction = await Mina.transaction(feePayerKey, () => {
      AccountUpdate.fundNewAccount(feePayerKey);
      zkapp.deploy({ zkappKey: zkappPrivateKey });
      zkapp.initState(serverPublicKey);
      zkapp.sign(zkappPrivateKey);
    });

    await transaction.send();
  } else {
    let zkAppAccount = await loopUntilAccountExists({
      account: zkappPrivateKey.toPublicKey(),
      eachTimeNotExist: () => console.log('waiting for zkApp account to be deployed...'),
      isZkAppAccount: true
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
      priorLeafNumber = Field.zero;
      newLeafNumber = Field.one;
    }

    // update the leaf, and save it in the storage server
    idx2fields.set(index, [ newLeafNumber ]);

    const [storedNewStorageNumber, storedNewStorageSignature] =
      await OffChainStorage.requestStore(
        storageServerAddress,
        zkappPublicKey,
        treeHeight,
        idx2fields,
        NodeXMLHttpRequest
      );

    console.log('changing index', index, 'from',  priorLeafNumber.toString(), 'to', newLeafNumber.toString());

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
    }

    if (useLocal) {
      const updateTransaction = await Mina.transaction(
        { feePayerKey, fee: transactionFee },
        () => {
          doUpdate();
          zkapp.sign(zkappPrivateKey);
        }
      );

      await updateTransaction.send();
    } else {
      await makeAndSendTransaction({
        feePayerPrivateKey: feePayerKey,
        zkAppPublicKey: zkappPublicKey,
        mutateZkApp: () => doUpdate(),
        transactionFee: transactionFee,
        getState: () => zkapp.storageTreeRoot.get(),
        statesEqual: (root1, root2) => root1.equals(root2).toBoolean()
      });
    }

    console.log('root updated to', zkapp.storageTreeRoot.get().toString());

  }

  for (;;) {
    await updateTree();
  }

  //---------------------------

  await shutdown();
}

main();
