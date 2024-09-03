import { Mina, PrivateKey, AccountUpdate, UInt64 } from 'o1js';
import { TokenUser, TokenHolder } from './TokenUser.js';
import { MyToken } from './MyToken.js';



await (async function main() {
  const proofsEnabled = true;
  const Local = await Mina.LocalBlockchain({ proofsEnabled });
  Mina.setActiveInstance(Local);
  const deployerAddr = Local.testAccounts[0];
  const deployerKey = deployerAddr.key;
  const other = Local.testAccounts[1];
  const otherKey = other.key;
  const another = Local.testAccounts[1];
  const anotherKey = other.key;
  let accountFee = Mina.getNetworkConstants().accountCreationFee;

  // ----------------------------------------------------

  const myTokenSk = PrivateKey.random();
  const myTokenAddr = myTokenSk.toPublicKey();

  const tokenUserSk = PrivateKey.random();
  const tokenUserAddr = tokenUserSk.toPublicKey();



  TokenUser.tokenSmartContractAddress = myTokenAddr;
  TokenHolder.tokenSmartContractAddress = myTokenAddr;

  const myTokenInstance = new MyToken(myTokenAddr);
  const tokenUserInstance = new TokenUser(tokenUserAddr);
  const tokenHolderInstance = new TokenHolder(
    tokenUserAddr,
    myTokenInstance.tokenId
  );



  if (proofsEnabled) {
    console.time('compile 1');
    await MyToken.compile();
    console.timeEnd('compile 1');

    console.time('compile 2');
    await TokenUser.compile();
    console.timeEnd('compile 2');

    console.time('compile 3');
    await TokenHolder.compile();
    console.timeEnd('compile 3');
  }

  // ----------------------------------------------------
  console.time('deploy');

  const deployTxn = await Mina.transaction(deployerAddr, async () => {
    AccountUpdate.fundNewAccount(deployerAddr, 3);

    await myTokenInstance.deploy();
    await tokenUserInstance.deploy();
    await tokenHolderInstance.deploy();

    await myTokenInstance.approveDeploy(tokenHolderInstance.self);
  });
  console.log(deployTxn.toPretty());

  await deployTxn.prove();

  await deployTxn.sign([deployerKey, myTokenSk, tokenUserSk]).send();

  console.timeEnd('deploy');


  // ----------------------------------------------------
  console.time('tx1');

  const txn1 = await Mina.transaction(other, async () => {
    AccountUpdate.fundNewAccount(other);
    await myTokenInstance.mintTokens(other, UInt64.from(500));
  });
  console.log(txn1.toPretty());

  await txn1.prove();
  await txn1.sign([deployerKey, myTokenSk, otherKey]).send();

  console.timeEnd('tx1');


  // ----------------------------------------------------
  console.time('tx2');

  const txn2 = await Mina.transaction(deployerAddr, async () => {
    await myTokenInstance.transfer(other, another, UInt64.from(100));
  });
  console.log(txn2.toPretty())
  await txn2.prove();
  txn2.sign([deployerKey, otherKey]);



  await new Promise((resolve) => setTimeout(resolve, 1000));

  await txn2.send();

  console.timeEnd('tx2');

})();
