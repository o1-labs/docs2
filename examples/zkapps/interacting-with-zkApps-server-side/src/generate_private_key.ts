import { PrivateKey, isReady, shutdown } from 'o1js';

await isReady;

var privateKey = PrivateKey.random();
var publicKey = privateKey.toPublicKey();

console.log('private key:', privateKey.toBase58());
console.log('public key:', publicKey.toBase58());

await shutdown();
