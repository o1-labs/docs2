import { BasicTokenContract } from './BasicTokenContract.js';
import {
  isReady,
  shutdown,
  Mina,
  PrivateKey,
  AccountUpdate,
  UInt64,
  Signature,
} from 'snarkyjs';

(async function main() {
  await isReady;

  console.log('SnarkyJS loaded');

  const proofsEnabled = false;
  const Local = Mina.LocalBlockchain({ proofsEnabled });
  Mina.setActiveInstance(Local);
  const deployerAccount = Local.testAccounts[0].privateKey;

  // ----------------------------------------------------

  const zkAppPrivateKey = PrivateKey.random();
  const zkAppAddress = zkAppPrivateKey.toPublicKey();

  console.log('compiling...');

  let verificationKey: any;
  if (proofsEnabled) {
    ({ verificationKey } = await BasicTokenContract.compile());
  }

  console.log('compiled');

  // ----------------------------------------------------

  console.log('deploying...');
  const contract = new BasicTokenContract(zkAppAddress);
  const deploy_txn = await Mina.transaction(deployerAccount, () => {
    AccountUpdate.fundNewAccount(deployerAccount);
    contract.deploy({ verificationKey, zkappKey: zkAppPrivateKey });
  });
  await deploy_txn.prove();
  await deploy_txn.send();

  console.log('deployed');

  // ----------------------------------------------------

  console.log('initializing...');

  const init_txn = await Mina.transaction(deployerAccount, () => {
    contract.init();
  });

  await init_txn.prove();
  init_txn.sign([zkAppPrivateKey]);
  await init_txn.send();

  console.log('initialized');

  // ----------------------------------------------------

  console.log('minting...');

  const mintAmount = UInt64.from(10);

  const mintSignature = Signature.create(
    zkAppPrivateKey,
    mintAmount.toFields().concat(zkAppAddress.toFields())
  );

  const mint_txn = await Mina.transaction(deployerAccount, () => {
    AccountUpdate.fundNewAccount(deployerAccount);
    contract.mint(zkAppAddress, mintAmount, mintSignature);
  });

  await mint_txn.prove();
  mint_txn.sign([zkAppPrivateKey]);
  await mint_txn.send();

  console.log('minted');

  console.log(
    contract.totalAmountInCirculation.get() +
      ' ' +
      Mina.getAccount(zkAppAddress).tokenSymbol
  );

  // ----------------------------------------------------

  console.log('sending...');

  const sendAmount = UInt64.from(3);

  const send_txn = await Mina.transaction(deployerAccount, () => {
    AccountUpdate.fundNewAccount(deployerAccount);
    contract.sendTokens(
      zkAppAddress,
      deployerAccount.toPublicKey(),
      sendAmount
    );
  });
  await send_txn.prove();
  send_txn.sign([zkAppPrivateKey]);
  await send_txn.send();

  console.log('sent');

  console.log(
    contract.totalAmountInCirculation.get() +
      ' ' +
      Mina.getAccount(zkAppAddress).tokenSymbol
  );

  // ----------------------------------------------------

  console.log(
    'deployer tokens:',
    Mina.getBalance(
      deployerAccount.toPublicKey(),
      contract.token.id
    ).value.toBigInt()
  );

  console.log(
    'zkapp tokens:',
    Mina.getBalance(zkAppAddress, contract.token.id).value.toBigInt()
  );

  // ----------------------------------------------------

  console.log('Shutting down');

  await shutdown();
})().catch((f) => {
  console.log(f);
});
