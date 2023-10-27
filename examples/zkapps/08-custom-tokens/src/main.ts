import { BasicTokenContract } from './BasicTokenContract.js';
import {
  isReady,
  shutdown,
  Mina,
  PrivateKey,
  AccountUpdate,
  UInt64,
  Signature,
} from 'o1js';

await isReady;

console.log('o1js loaded');

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
const deploy_txn = await Mina.transaction(deployerAccount.toPublicKey(), () => {
  AccountUpdate.fundNewAccount(deployerAccount.toPublicKey());
  contract.deploy({ verificationKey, zkappKey: zkAppPrivateKey });
});
await deploy_txn.prove();
await deploy_txn.sign([deployerAccount]).send();

console.log('deployed');

// ----------------------------------------------------

console.log('minting...');

const mintAmount = UInt64.from(10);

const mintSignature = Signature.create(
  zkAppPrivateKey,
  mintAmount.toFields().concat(zkAppAddress.toFields())
);

const mint_txn = await Mina.transaction(deployerAccount.toPublicKey(), () => {
  AccountUpdate.fundNewAccount(deployerAccount.toPublicKey());
  contract.mint(zkAppAddress, mintAmount, mintSignature);
});

await mint_txn.prove();
await mint_txn.sign([deployerAccount]).send();

console.log('minted');

console.log(
  contract.totalAmountInCirculation.get() +
    ' ' +
    Mina.getAccount(zkAppAddress).tokenSymbol
);

// ----------------------------------------------------

console.log('sending...');

const sendAmount = UInt64.from(3);

const send_txn = await Mina.transaction(deployerAccount.toPublicKey(), () => {
  AccountUpdate.fundNewAccount(deployerAccount.toPublicKey());
  contract.sendTokens(zkAppAddress, deployerAccount.toPublicKey(), sendAmount);
});
await send_txn.prove();
await send_txn.sign([deployerAccount, zkAppPrivateKey]).send();

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