import { Mina, PrivateKey, fetchAccount } from 'o1js';

type SetupOptions = {
  useLocalBlockchain: boolean;
};
export async function initializeMina({ useLocalBlockchain }: SetupOptions) {
  if (useLocalBlockchain) {
    const Local = Mina.LocalBlockchain();
    Mina.setActiveInstance(Local);
    return Local;
  } else {
    const Berkeley = Mina.Network({
      mina: [
        'https://proxy.berkeley.minaexplorer.com/graphql',
        'https://api.minascan.io/node/berkeley/v1/graphql',
      ],
      archive: 'https://proxy.berkeley.minaexplorer.com/graphql',
    });
    Mina.setActiveInstance(Berkeley);
    return null;
  }
}

export async function initializeKeys(
  Local: any,
  { useLocalBlockchain }: SetupOptions
) {
  let deployerPrivateKey, zkAppPrivateKey;

  if (useLocalBlockchain) {
    deployerPrivateKey = Local.testAccounts[0].privateKey;
    zkAppPrivateKey = PrivateKey.random();
  } else {
    if (process.argv.length != 4) {
      throw Error(
        'Usage: node build/src/examples/main.js <deployer private key> <zkapp private key>'
      );
    }

    deployerPrivateKey = PrivateKey.fromBase58(process.argv[2]);
    zkAppPrivateKey = PrivateKey.fromBase58(process.argv[3]);

    let response = await fetchAccount({
      publicKey: deployerPrivateKey.toPublicKey(),
    });

    if (response.error) throw Error(response.error.statusText);
    let { nonce, balance } = response.account;
    console.log(
      `Using fee payer account with nonce ${nonce}, balance ${balance}`
    );
  }

  return {
    deployer: {
      privateKey: deployerPrivateKey,
      publicKey: deployerPrivateKey.toPublicKey(),
    },
    zkapp: {
      privateKey: zkAppPrivateKey,
      publicKey: zkAppPrivateKey.toPublicKey(),
    },
  };
}
