import { WhitelistedTokenContract } from './WhitelistedTokenContract.js';
import {
  isReady,
  shutdown,
  Mina,
  PrivateKey,
  AccountUpdate,
  UInt64,
  Signature,
  Poseidon,
  MerkleWitness,
  MerkleTree,
} from 'snarkyjs';

class MerkleWitness20 extends MerkleWitness(20) {}

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
    ({ verificationKey } = await WhitelistedTokenContract.compile());
  }

  console.log('compiled');

  // ----------------------------------------------------

  console.log('deploying...');

  const contract = new WhitelistedTokenContract(zkAppAddress);
  const deploy_txn = await Mina.transaction(deployerAccount, () => {
    AccountUpdate.fundNewAccount(deployerAccount);
    if (proofsEnabled) {
      contract.deploy({ zkappKey: zkAppPrivateKey });
    } else {
      contract.deploy({ verificationKey, zkappKey: zkAppPrivateKey });
    }
  });
  await deploy_txn.prove();
  deploy_txn.sign([zkAppPrivateKey]);
  await deploy_txn.send();

  console.log('deployed');

  // ----------------------------------------------------

  const tree = new MerkleTree(20);

  tree.setLeaf(
    BigInt(0),
    Poseidon.hash(deployerAccount.toPublicKey().toFields())
  );

  // ----------------------------------------------------

  console.log('initializing...');
  let init_txn = await Mina.transaction(deployerAccount, () => {
    contract.init();
  });

  if (!proofsEnabled) {
    await init_txn.prove();
  } else {
    init_txn.sign([zkAppPrivateKey]);
  }
  await init_txn.send();

  init_txn = await Mina.transaction(deployerAccount, () => {
    contract.initState(tree.getRoot());
  });

  if (!proofsEnabled) {
    await init_txn.prove();
  } else {
    init_txn.sign([zkAppPrivateKey]);
  }
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
  if (!proofsEnabled) {
    await mint_txn.prove();
  } else {
    mint_txn.sign([zkAppPrivateKey]);
  }
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

  const sendWitness = new MerkleWitness20(tree.getWitness(BigInt(0)));

  const send_txn = await Mina.transaction(deployerAccount, () => {
    AccountUpdate.fundNewAccount(deployerAccount);
    contract.sendTokens(
      zkAppAddress,
      deployerAccount.toPublicKey(),
      sendAmount,
      sendWitness
    );
  });
  send_txn.sign([zkAppPrivateKey]);
  if (!proofsEnabled) {
    await send_txn.prove();
  }
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
