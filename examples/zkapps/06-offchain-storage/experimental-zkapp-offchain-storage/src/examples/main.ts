/* 
  Usage: npm run build && node build/src/examples/main.js <deployer private key> <zkapp private key>
*/

import {
  OffChainStorageTestContract,
  height,
} from './OffChainStorageTestContract.js';
import {
  Field,
  Mina,
  AccountUpdate,
  MerkleTree,
  MerkleWitness,
  fetchAccount,
  Poseidon,
  Bool,
} from 'o1js';
import { OffChainStorage } from '../index.js';
import { retryOperation } from '../utils/network.js';
import { initializeMina, initializeKeys } from '../utils/mina-setup.js';
import random from 'random-bigint';
import XMLHttpRequestTs from 'xmlhttprequest-ts';

const NodeXMLHttpRequest =
  XMLHttpRequestTs.XMLHttpRequest as any as typeof XMLHttpRequest;

const TRANSACTION_FEE = 19_000_000;
const USE_LOCAL_BLOCKCHAIN = false;
const SERVER_ADDRESS = 'http://localhost:3001';

(async function main() {
  const options = {
    useLocalBlockchain: USE_LOCAL_BLOCKCHAIN,
  };
  const Local = await initializeMina(options);
  const { deployer: deployerAccount, zkapp: zkAppAccount } =
    await initializeKeys(Local, options);

  class OffchainStorageMerkleWitness extends MerkleWitness(height) {}

  // create a destination we will deploy the smart contract to
  console.log('using zkApp account at', zkAppAccount.publicKey.toBase58());

  const serverPublicKey = await OffChainStorage.getPublicKey(
    SERVER_ADDRESS,
    NodeXMLHttpRequest
  );

  console.log('Compiling smart contract...');
  await OffChainStorageTestContract.compile();
  console.log('Done compiling smart contract');

  let isDeployed = false;
  if (!USE_LOCAL_BLOCKCHAIN) {
    console.log('Checking if zkApp is already deployed...');
    let response = await fetchAccount({ publicKey: zkAppAccount.publicKey });
    if (response.account && response.account.zkapp) {
      console.log('zkApp already deployed');
      isDeployed = true;
    }
  }

  const zkAppInstance = new OffChainStorageTestContract(zkAppAccount.publicKey);
  zkAppInstance._serverPublicKey = serverPublicKey;

  if (!isDeployed) {
    console.log('Deploying zkapp...');
    const deploy_txn = await Mina.transaction(
      { sender: deployerAccount.publicKey, fee: TRANSACTION_FEE },
      () => {
        AccountUpdate.fundNewAccount(deployerAccount.publicKey);
        zkAppInstance.deploy({ zkappKey: zkAppAccount.privateKey });
      }
    );
    deploy_txn.sign([deployerAccount.privateKey, zkAppAccount.privateKey]);
    const res = await deploy_txn.send();

    if (!USE_LOCAL_BLOCKCHAIN) {
      const hash = await res.hash(); // This will change in a future version of o1js
      if (hash == null) {
        console.log('error sending transaction (see above)');
      } else {
        console.log(
          'See deploy transaction at',
          'https://berkeley.minaexplorer.com/transaction/' + hash
        );
        console.log('Waiting for zkApp to be deployed...');
        await retryOperation(async () => {
          await res.wait({
            maxAttempts: 200,
            interval: 10000,
          });
        });
      }
    } else {
      isDeployed = true;
    }
  }

  // get the initial state of IncrementSecret after deployment
  console.log('Getting initial state...');
  let root;
  if (USE_LOCAL_BLOCKCHAIN) {
    root = await zkAppInstance.root.get();
  } else {
    await retryOperation(async () => {
      root = await zkAppInstance.root.fetch();
      if (!root) throw Error('zkApp not deployed');
    });
  }
  if (!root) throw Error('fetching zkApp state failed');
  console.log('state after init:', root.toString());
  const make_transaction = async (root: Field) => {
    const tree = new MerkleTree(height);

    console.log('getting state from server...');
    const idx2fields = await OffChainStorage.get(
      SERVER_ADDRESS,
      zkAppAccount.publicKey,
      height,
      root,
      NodeXMLHttpRequest
    );

    for (let [idx, fields] of idx2fields) {
      tree.setLeaf(BigInt(idx), Poseidon.hash(fields));
    }

    const index = random(height - 1);
    const leafIsEmpty = Bool(!idx2fields.has(index));

    const oldNum = leafIsEmpty.toBoolean()
      ? Field(0)
      : idx2fields.get(index)![0];
    const newNum = oldNum.add(1);
    const witness = tree.getWitness(BigInt(index));
    const circuitWitness = new OffchainStorageMerkleWitness(witness);
    tree.setLeaf(BigInt(index), Poseidon.hash([newNum]));
    const newRoot = tree.getRoot();

    console.log(
      'updating',
      index,
      'from',
      oldNum.toString(),
      'to',
      newNum.toString()
    );

    console.log('updating to new root', newRoot.toString());
    console.log('root from ', zkAppInstance.root.get().toString());

    idx2fields.set(index, [newNum]);
    const [newRootNumber, newRootSignature] =
      await OffChainStorage.requestStore(
        SERVER_ADDRESS,
        zkAppAccount.publicKey,
        height,
        idx2fields,
        NodeXMLHttpRequest
      );

    // ----------------------------------------------------

    if (!USE_LOCAL_BLOCKCHAIN) {
      await fetchAccount({ publicKey: deployerAccount.publicKey });
    }

    console.log('updating zkApp...');
    const txn1 = await Mina.transaction(
      { sender: deployerAccount.publicKey, fee: TRANSACTION_FEE },
      () => {
        zkAppInstance.update(
          leafIsEmpty,
          oldNum,
          newNum,
          circuitWitness,
          newRoot,
          newRootNumber,
          newRootSignature
        );
        zkAppInstance.requireSignature();
      }
    );
    txn1.sign([deployerAccount.privateKey, zkAppAccount.privateKey]);

    if (!USE_LOCAL_BLOCKCHAIN) {
      console.log('Creating an execution proof...');
      const time0 = Date.now();
      await txn1.prove();
      const time1 = Date.now();
      console.log('creating proof took', (time1 - time0) / 1e3, 'seconds');
    }

    console.log('Sending the transaction...');
    const res = await txn1.send();

    if (!USE_LOCAL_BLOCKCHAIN) {
      const hash = await res.hash(); // This will change in a future version of o1js
      if (hash == null) {
        console.log('error sending transaction (see above)');
      } else {
        console.log(
          'See transaction at',
          'https://berkeley.minaexplorer.com/transaction/' + hash
        );
        console.log('Waiting for transaction...');
        await retryOperation(async () => {
          await res.wait({
            maxAttempts: 200,
            interval: 10000,
          });
        });
      }

      let stateChange = false;

      let root2;
      while (!stateChange) {
        console.log(
          'waiting for zkApp state to change... (current state: ',
          root.toString() + ')'
        );
        await new Promise((resolve) => setTimeout(resolve, 5000));
        root2 = await zkAppInstance.root.fetch();
        stateChange = root2 != null && root2.equals(root).not().toBoolean();
      }
    }

    let root2;
    if (USE_LOCAL_BLOCKCHAIN) {
      root2 = await zkAppInstance.root.get();
    } else {
      root2 = (await zkAppInstance.root.fetch())!;
    }
    console.log('state after txn:', root2.toString());

    return root2;
  };

  let nextRoot = root;
  for (;;) {
    console.log('next root:', nextRoot.toString());
    nextRoot = await make_transaction(nextRoot);
  }
})().catch((e) => {
  console.log('error', e);
});
