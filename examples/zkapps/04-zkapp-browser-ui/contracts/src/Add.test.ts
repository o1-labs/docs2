import { Add } from './Add';
import {
  AccountUpdate,
  Field,
  isReady,
  Mina,
  PrivateKey,
  PublicKey,
  shutdown
} from 'snarkyjs';

/*
 * This file specifies how to test the `Add` example smart contract. It is safe to delete this file and replace
 * with your own tests.
 *
 * See https://docs.minaprotocol.com/zkapps for more info.
 */

function createLocalBlockchain() {
  const Local = Mina.LocalBlockchain();
  Mina.setActiveInstance(Local);
  return Local.testAccounts;
}

async function localDeploy(
  zkAppInstance: Add,
  zkAppPrivateKey: PrivateKey,
  deployerAccount: PublicKey,
  deployerKey: PrivateKey
) {
  const txn = await Mina.transaction(deployerAccount, () => {
    AccountUpdate.fundNewAccount(deployerAccount);
    zkAppInstance.deploy();
  });
  await txn.sign([deployerKey, zkAppPrivateKey]).send();
}

describe('Add', () => {
  let deployerAccount: PublicKey,
    deployerKey: PrivateKey,
    senderAccount: PublicKey,
    senderKey: PrivateKey,
    zkAppAddress: PublicKey,
    zkAppPrivateKey: PrivateKey,
    testAccounts: { publicKey: PublicKey; privateKey: PrivateKey; }[];

  beforeEach(async () => {
    await isReady;
    testAccounts = createLocalBlockchain(); 
    ({ privateKey: deployerKey, publicKey: deployerAccount } = testAccounts[0]);
    ({ privateKey: senderKey, publicKey: senderAccount } = testAccounts[1]);
    zkAppPrivateKey = PrivateKey.random();
    zkAppAddress = zkAppPrivateKey.toPublicKey();
  });

  afterAll(async () => {
    // `shutdown()` internally calls `process.exit()` which will exit the running Jest process early.
    // Specifying a timeout of 0 is a workaround to defer `shutdown()` until Jest is done running all tests.
    // This should be fixed with https://github.com/MinaProtocol/mina/issues/10943
    setTimeout(shutdown, 0);
  });

  it('generates and deploys the `Add` smart contract', async () => {
    const zkAppInstance = new Add(zkAppAddress);
    await localDeploy(zkAppInstance, zkAppPrivateKey, deployerAccount, deployerKey);
    const num = zkAppInstance.num.get();
    expect(num).toEqual(Field(1));
  });

  it('correctly updates the num state on the `Add` smart contract', async () => {
    const zkAppInstance = new Add(zkAppAddress);
    await Add.compile();
    await localDeploy(zkAppInstance, zkAppPrivateKey, deployerAccount, deployerKey);
    const txn = await Mina.transaction(senderAccount, () => {
      zkAppInstance.update();
    });
    await txn.prove();
    await txn.sign([senderKey]).send();

    const updatedNum = zkAppInstance.num.get();
    expect(updatedNum).toEqual(Field(3));
  });
});
