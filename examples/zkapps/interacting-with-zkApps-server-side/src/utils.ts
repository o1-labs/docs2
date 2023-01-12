import { Mina, PrivateKey, PublicKey, fetchAccount } from 'snarkyjs';

export { accountExists, loopUntilAccountExists, makeAndSendTransaction };

// ========================================================

async function accountExists(account: PublicKey) {
  let response = await fetchAccount({ publicKey: account });
  let accountExists = response.account !== undefined;
  return accountExists;
}

// ========================================================

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
      accountExists = response.account?.appState !== undefined;
    }
    if (!accountExists) {
      eachTimeNotExist();
      await new Promise((resolve) => setTimeout(resolve, 5000));
    } else {
      // TODO add optional check that verification key is correct once this is available in SnarkyJS
      return response.account!;
    }
  }
}

// ========================================================

async function makeAndSendTransaction({
  feePayerPrivateKey,
  mutateZkApp,
  transactionFee,
}: {
  feePayerPrivateKey: PrivateKey;
  mutateZkApp: () => void;
  transactionFee: number;
}) {
  const sender = feePayerPrivateKey.toPublicKey();

  let transaction = await Mina.transaction(
    { sender, fee: transactionFee },
    () => {
      mutateZkApp();
    }
  );

  // fill in the proof - this can take a while...
  console.log('Creating an execution proof...');
  const time0 = Date.now();
  await transaction.prove();
  const time1 = Date.now();
  console.log('creating proof took', (time1 - time0) / 1e3, 'seconds');

  console.log('Sending the transaction...');
  const res = await transaction.sign([feePayerPrivateKey]).send();
  const hash = res.hash();
  if (hash === undefined) {
    console.log('error sending transaction (see above)');
  } else {
    console.log(
      'See transaction at',
      'https://berkeley.minaexplorer.com/transaction/' + hash
    );
    console.log('Waiting for transaction to be included...');
    await res.wait();
  }
}
