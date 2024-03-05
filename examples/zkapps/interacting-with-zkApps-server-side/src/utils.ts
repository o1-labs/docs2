import {
  PublicKey,
  fetchAccount,
  PrivateKey,
  Field,
  Mina,
  AccountUpdate,
} from 'o1js';
import { Square } from './Square';

export { loopUntilAccountExists, deploy };

async function loopUntilAccountExists({
  account,
  eachTimeNotExist,
  isZkAppAccount,
}: {
  account: PublicKey;
  eachTimeNotExist: () => void;
  isZkAppAccount: boolean;
}) {
  for (;;) {
    let response = await fetchAccount({ publicKey: account });
    let accountExists = response.account !== undefined;
    if (isZkAppAccount) {
      accountExists = response.account?.zkapp?.appState !== undefined;
    }
    if (!accountExists) {
      eachTimeNotExist();
      await new Promise((resolve) => setTimeout(resolve, 5000));
    } else {
      // TODO add optional check that verification key is correct once this is available in o1js
      return response.account!;
    }
  }
}

const deployTransactionFee = 100_000_000;

async function deploy(
  deployerPrivateKey: PrivateKey,
  zkAppPrivateKey: PrivateKey,
  zkapp: Square,
  verificationKey: { data: string; hash: string | Field }
) {
  let sender = deployerPrivateKey.toPublicKey();
  let zkAppPublicKey = zkAppPrivateKey.toPublicKey();
  console.log('using deployer private key with public key', sender.toBase58());
  console.log(
    'using zkApp private key with public key',
    zkAppPublicKey.toBase58()
  );

  let { account } = await fetchAccount({ publicKey: zkAppPublicKey });
  let isDeployed = account?.zkapp?.verificationKey !== undefined;

  if (isDeployed) {
    console.log(
      'zkApp for public key',
      zkAppPublicKey.toBase58(),
      'found deployed'
    );
  } else {
    console.log('Deploying zkapp for public key', zkAppPublicKey.toBase58());
    let transaction = await Mina.transaction(
      { sender, fee: deployTransactionFee },
      () => {
        AccountUpdate.fundNewAccount(sender);
        // NOTE: this calls `init()` if this is the first deploy
        zkapp.deploy({ verificationKey });
      }
    );
    await transaction.prove();
    transaction.sign([deployerPrivateKey, zkAppPrivateKey]);

    console.log('Sending the deploy transaction...');
    const res = await transaction.send();
    if (res.status === 'rejected') {
      console.log('error sending transaction (see above)');
    } else {
      console.log(
        'See deploy transaction at',
        'https://berkeley.minaexplorer.com/transaction/' + res.hash
      );
      console.log('waiting for zkApp account to be deployed...');
      await res.wait();
      isDeployed = true;
    }
  }
  return isDeployed;
}
