import { PrivateKey } from 'o1js';

var privateKey = PrivateKey.random();
var publicKey = privateKey.toPublicKey();

console.log(
  JSON.stringify({
    privateKey: privateKey.toBase58(),
    publicKey: publicKey.toBase58(),
  })
);
