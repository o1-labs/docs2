import { Square } from './Square.js';
import {
  isReady,
  shutdown,
  Mina,
  PrivateKey,
} from 'snarkyjs';

import { deploy } from './deploy.js';
import fs from 'fs';
import { loopUntilAccountExists, makeAndSendTransaction, zkAppNeedsInitialization, accountExists } from './utils.js';

(async function main() {
  await isReady;

  console.log('SnarkyJS loaded');

  // ----------------------------------------------------

  const Berkeley = Mina.BerkeleyQANet(
    'https://proxy.berkeley.minaexplorer.com/graphql'
  );
  Mina.setActiveInstance(Berkeley);

  let transactionFee = 100_000_000;

  const deployAlias = process.argv[2];

  const deployerKeysFileContents = fs.readFileSync(
    'keys/' + deployAlias + '.json',
    'utf8'
  );

  const deployerPrivateKeyBase58 = JSON.parse(
    deployerKeysFileContents
  ).privateKey;

  const deployerPrivateKey = PrivateKey.fromBase58(deployerPrivateKeyBase58);

  const zkAppPrivateKey = PrivateKey.fromBase58('EKFYdbghRSksmLyr5SwtqqT6De2qAXbGJqH7KrKVgvVTcSQChNiL');

  // ----------------------------------------------------

  let account = await loopUntilAccountExists({
    account: deployerPrivateKey.toPublicKey(),
    eachTimeNotExist: () => {
      console.log(
        'Deployer account does not exist. ' +
          'Request funds at faucet ' +
          'https://faucet.minaprotocol.com/?address=' +
          deployerPrivateKey.toPublicKey().toBase58()
      );
    },
    isZkAppAccount: false,
  });

  console.log(
    `Using fee payer account with nonce ${account.nonce}, balance ${account.balance}`
  );

  // ----------------------------------------------------

  console.log('Compiling smart contract...');
  let { verificationKey } = await Square.compile();

  const zkAppPublicKey = zkAppPrivateKey.toPublicKey();
  let zkapp = new Square(zkAppPublicKey);

  const accountExistsAlready = await accountExists(zkAppPublicKey);

  if (!accountExistsAlready) {
    // Programmatic deploy:
    //   Besides the CLI, you can also create accounts programmatically. This is useful if you need
    //   more custom account creation - say deploying a zkApp to a different key than the fee payer
    //   key, programmatically parameterizing a zkApp before initializing it, or creating Smart
    //   Contracts programmatically for users as part of an application.
    await deploy(deployerPrivateKey, zkAppPrivateKey, zkAppPublicKey, zkapp, verificationKey)
  }

  // ----------------------------------------------------

  let zkAppAccount = await loopUntilAccountExists({
    account: zkAppPrivateKey.toPublicKey(),
    eachTimeNotExist: () => console.log('waiting for zkApp account to be deployed...'),
    isZkAppAccount: true
  });

  const needsInitialization = await zkAppNeedsInitialization({ zkAppAccount });

  if (needsInitialization) {
    console.log('initializing smart contract');
    await makeAndSendTransaction({
      feePayerPrivateKey: deployerPrivateKey,
      zkAppPublicKey: zkAppPublicKey,
      mutateZkApp: () => zkapp.init(),
      transactionFee: transactionFee,
      getState: () => zkapp.num.get(),
      statesEqual: (num1, num2) => num1.equals(num2).toBoolean()
    });

    console.log('updated state!', zkapp.num.get().toString());
  }


  let num = (await zkapp.num.get())!;
  console.log('current value of num is', num.toString());

  // ----------------------------------------------------

  await makeAndSendTransaction({
    feePayerPrivateKey: deployerPrivateKey,
    zkAppPublicKey: zkAppPublicKey,
    mutateZkApp: () => zkapp.update(num.mul(num)),
    transactionFee: transactionFee,
    getState: () => zkapp.num.get(),
    statesEqual: (num1, num2) => num1.equals(num2).toBoolean()
  });

  console.log('updated state!', zkapp.num.get().toString());

  // ----------------------------------------------------

  console.log('Shutting down');

  await shutdown();
})().catch((e) => console.log(e));
