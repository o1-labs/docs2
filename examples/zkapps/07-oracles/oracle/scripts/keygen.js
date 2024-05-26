const Client = require('mina-signer');
const client = new Client({ network: process.env.NETWORK_KIND ?? 'testnet' });

async function generateKeypair() {
  const keypair = client.genKeys();
  console.log({
    privateKey: keypair.privateKey,
    publicKey: keypair.publicKey,
  });
}

generateKeypair();
