import { Square } from './Square.js';
import { isReady, shutdown, Mina, PrivateKey } from 'snarkyjs';

import { deploy } from './deploy.js';
import fs from 'fs';
import {
  loopUntilAccountExists,
  makeAndSendTransaction,
  accountExists,
} from './utils.js';

await isReady;

console.log('SnarkyJS loaded');

// ----------------------------------------------------

const Berkeley = Mina.Network(
  'https://proxy.berkeley.minaexplorer.com/graphql'
);
Mina.setActiveInstance(Berkeley);

const transactionFee = 100_000_000;

const deployAlias = process.argv[2];
const deployerKeysFileContents = fs.readFileSync(
  'keys/' + deployAlias + '.json',
  'utf8'
);
const deployerPrivateKeyBase58 = JSON.parse(
  deployerKeysFileContents
).privateKey;
const deployerPrivateKey = PrivateKey.fromBase58(deployerPrivateKeyBase58);
const deployerPublicKey = deployerPrivateKey.toPublicKey();

const zkAppPrivateKey = PrivateKey.fromBase58(
  'EKFTMuvTirzrwpeHP8RKe7bGufBGiKs27nTMzD5XyMV8NcK3upt2'
);

// ----------------------------------------------------

let account = await loopUntilAccountExists({
  account: deployerPublicKey,
  eachTimeNotExist: () => {
    console.log(
      'Deployer account does not exist. ' +
        'Request funds at faucet ' +
        'https://faucet.minaprotocol.com/?address=' +
        deployerPublicKey.toBase58()
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

let accountExistsAlready = await accountExists(zkAppPublicKey);
if (!accountExistsAlready) {
  // Programmatic deploy:
  //   Besides the CLI, you can also create accounts programmatically. This is useful if you need
  //   more custom account creation - say deploying a zkApp to a different key than the fee payer
  //   key, programmatically parameterizing a zkApp before initializing it, or creating Smart
  //   Contracts programmatically for users as part of an application.
  await deploy(deployerPrivateKey, zkAppPrivateKey, zkapp, verificationKey);
}

let num = (await zkapp.num.fetch())!;
console.log(`current value of num is ${num}`);

// ----------------------------------------------------

await makeAndSendTransaction({
  feePayerPrivateKey: deployerPrivateKey,
  mutateZkApp: () => zkapp.update(num.mul(num)),
  transactionFee,
});

console.log(`updated state! ${await zkapp.num.fetch()}`);

// ----------------------------------------------------

console.log('Shutting down');

await shutdown();
