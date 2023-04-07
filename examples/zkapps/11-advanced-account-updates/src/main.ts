import { TokenUser, TokenHolder } from './TokenUser.js';
import { MyToken } from './MyToken.js';

import {
  isReady,
  shutdown,
  Field,
  Mina,
  PrivateKey,
  AccountUpdate,
  UInt64,
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
    MyToken.compile();
    TokenUser.compile();
  }

  let accountFee = Mina.accountCreationFee();

  // ----------------------------------------------------

  const myTokenSk = PrivateKey.random();
  const myTokenAddr = myTokenSk.toPublicKey();

  const tokenUserSk = PrivateKey.random();
  const tokenUserAddr = tokenUserSk.toPublicKey();

  const legend = {
    [myTokenAddr.toBase58()]: 'myToken',
    [tokenUserAddr.toBase58()]: 'tokenUser',
    [deployerAccount.toPublicKey().toBase58()]: 'deployer',
  };
  console.log(legend)

  TokenUser.tokenSmartContractAddress = myTokenAddr;
  TokenHolder.tokenSmartContractAddress = myTokenAddr

  const myTokenInstance = new MyToken(myTokenAddr);
  const tokenUserInstance = new TokenUser(tokenUserAddr);
  const tokenHolderInstance = new TokenHolder(tokenUserAddr, myTokenInstance.token.id);

  // ----------------------------------------------------

  const deploy_txn = await Mina.transaction(deployerAccount, () => {
    let feePayerUpdate = AccountUpdate.fundNewAccount(deployerAccount, 4);
    feePayerUpdate.send({ to: myTokenAddr, amount: accountFee });

    myTokenInstance.deploy();
    tokenUserInstance.deploy();
    tokenHolderInstance.deploy()

    myTokenInstance.approveDeploy(tokenHolderInstance.self);
  });

  await deploy_txn.prove();
  deploy_txn.sign([ myTokenSk, tokenUserSk ]);

  //await showTxn(deploy_txn, 'deploy_txn', legend);
  //await saveTxn(deploy_txn, 'deploy_txn', legend, './deploy_txn.png');

  await deploy_txn.send();

  console.log('sent deploy txn');

  // ----------------------------------------------------

  const txn1 = await Mina.transaction(deployerAccount, () => {
    myTokenInstance.mintTokens(tokenUserAddr, UInt64.from(500));
  });

  txn1.sign([ myTokenSk, tokenUserSk ]);
  await txn1.prove();

  //await showTxn(txn1, 'txn1', legend);
  //await saveTxn(txn1, 'txn1', legend, './txn1.png');

  await txn1.send();

  console.log('sent txn1');

  // ----------------------------------------------------

  const txn2 = await Mina.transaction(deployerAccount, () => {
    tokenUserInstance.sendMyTokens(UInt64.from(100), tokenUserAddr);
  });

  await txn2.prove();

  await showTxn(txn2, 'txn2', legend);
  //await saveTxn(txn2, 'txn2', legend, './txn2.png');

  await new Promise((resolve) => setTimeout(resolve, 1000));

  await txn2.send();

  console.log('sent txn2');

  // ----------------------------------------------------

  console.log('Shutting down');

  await shutdown();
})();
