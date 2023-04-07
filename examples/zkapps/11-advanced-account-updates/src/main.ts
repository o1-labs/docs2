import { ProofsOnlyZkApp } from './ProofsOnlyZkApp.js';

import {
  isReady,
  shutdown,
  Field,
  Mina,
  PrivateKey,
  AccountUpdate,
} from 'snarkyjs';

import { showTxn, saveTxn, printTxn } from 'mina-transaction-visualizer';

(async function main() {
  await isReady;

  console.log('SnarkyJS loaded');

  const proofsEnabled = false;
  const Local = Mina.LocalBlockchain({ proofsEnabled });
  Mina.setActiveInstance(Local);
  const deployerAccount = Local.testAccounts[0].privateKey;

  if (proofsEnabled) {
    ProofsOnlyZkApp.compile();
  }

  // ----------------------------------------------------

  const proofsOnlySk = PrivateKey.random();
  const proofsOnlyAddr = proofsOnlySk.toPublicKey();

  const legend = {
    [proofsOnlyAddr.toBase58()]: 'proofsOnlyZkApp',
    [deployerAccount.toPublicKey().toBase58()]: 'deployer',
  };

  const proofsOnlyInstance = new ProofsOnlyZkApp(proofsOnlyAddr);

  // ----------------------------------------------------

  const deploy_txn = await Mina.transaction(deployerAccount, () => {
    AccountUpdate.fundNewAccount(deployerAccount, 1);
    proofsOnlyInstance.deploy({ zkappKey: proofsOnlySk });
  });

  await deploy_txn.prove();
  deploy_txn.sign([ proofsOnlySk ]);

  await showTxn(deploy_txn, 'deploy_txn', legend);
  await saveTxn(deploy_txn, 'deploy_txn', legend, './deploy_txn.png');

  await deploy_txn.send();

  // ----------------------------------------------------

  const txn1 = await Mina.transaction(deployerAccount, () => {
    proofsOnlyInstance.add(Field(4));
  });

  await txn1.prove();

  await showTxn(txn1, 'txn1', legend);
  await saveTxn(txn1, 'txn1', legend, './txn1.png');

  await txn1.send();

  // ----------------------------------------------------

  console.log('Shutting down');

  await shutdown();
})();
