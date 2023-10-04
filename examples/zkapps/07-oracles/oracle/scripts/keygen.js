const Client = require('mina-signer');
const client = new Client({ network: 'testnet' });

async function generateKeypair() {
    const keypair = client.genKeys();
    console.log({
        privateKey: keypair.privateKey,
        publicKey: keypair.publicKey
    });
}

generateKeypair();
