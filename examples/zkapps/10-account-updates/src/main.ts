import { ProofsOnlyZkApp } from './ProofsOnlyZkApp.js';
import { SecondaryZkApp } from './SecondaryZkApp.js';

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
    SecondaryZkApp.compile();
  }

  // ----------------------------------------------------

  const proofsOnlySk = PrivateKey.random();
  const proofsOnlyAddr = proofsOnlySk.toPublicKey();

  const secondarySk = PrivateKey.random();
  const secondaryAddr = secondarySk.toPublicKey();

  const legend = {
    [proofsOnlyAddr.toBase58()]: 'proofsOnlyZkApp',
    [secondaryAddr.toBase58()]: 'secondaryZkApp',
    [deployerAccount.toPublicKey().toBase58()]: 'deployer',
  };

  const proofsOnlyInstance = new ProofsOnlyZkApp(proofsOnlyAddr);
  const secondaryInstance = new SecondaryZkApp(secondaryAddr);

  // ----------------------------------------------------

  const deploy_txn = await Mina.transaction(deployerAccount, () => {
    AccountUpdate.fundNewAccount(deployerAccount, 2);
    proofsOnlyInstance.deploy({ zkappKey: proofsOnlySk });
    secondaryInstance.deploy({ zkappKey: secondarySk });
  });

  await deploy_txn.prove();
  deploy_txn.sign([ proofsOnlySk, secondarySk ]);

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

  const txn2 = await Mina.transaction(deployerAccount, () => {
    proofsOnlyInstance.callSecondary(secondaryAddr);
  });

  await txn2.prove();

  await showTxn(txn2, 'txn2', legend);
  await saveTxn(txn2, 'txn2', legend, './txn2.png');

  await txn2.send();

  // ----------------------------------------------------

  console.log('Shutting down');

  await shutdown();
})();
