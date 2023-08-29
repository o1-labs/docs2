import { SignedMessageBoard } from './SignedMessageBoard.js';
import { OffChainStorage, MerkleWitness8 } from 'experimental-zkapp-offchain-storage';

import {
  Mina,
  isReady,
  PublicKey,
  PrivateKey,
  AccountUpdate,
  Group,
  Character,
  CircuitString,
  Signature,
  Bool,
  shutdown,
} from 'o1js';

import XMLHttpRequestTs from 'xmlhttprequest-ts';
const NodeXMLHttpRequest =
  XMLHttpRequestTs.XMLHttpRequest as any as typeof XMLHttpRequest;

async function main() {
  await isReady;

  // ----------------------------------------

  const transactionFee = 100_000_000;

  const treeHeight = 8;

  const Local = Mina.LocalBlockchain();
  Mina.setActiveInstance(Local);

  const feePayerKey = Local.testAccounts[0].privateKey;

  const zkappPrivateKey = PrivateKey.random();
  const zkappPublicKey = zkappPrivateKey.toPublicKey();

  // ----------------------------------------
  // deploy and initialize the smart contract

  const storageServerAddress = 'http://localhost:3001';
  const serverPublicKey = await OffChainStorage.getPublicKey(
    storageServerAddress,
    NodeXMLHttpRequest
  );

  const zkapp = new SignedMessageBoard(zkappPublicKey);

  const transaction = await Mina.transaction(feePayerKey, () => {
    AccountUpdate.fundNewAccount(feePayerKey);
    zkapp.deploy({ zkappKey: zkappPrivateKey });
    zkapp.initState(serverPublicKey);
    zkapp.sign(zkappPrivateKey);
  });

  await transaction.send();

  // ----------------------------------------
  // update the smart contract

  const idx = BigInt(7);
  const messageStr = 'hi';

  // get the existing tree
  const treeRoot = await zkapp.storageTreeRoot.get();
  const idx2fields = await OffChainStorage.get(
    storageServerAddress,
    zkappPublicKey,
    treeHeight,
    treeRoot,
    NodeXMLHttpRequest
  );

  const tree = OffChainStorage.mapToTree(treeHeight, idx2fields);
  const leafWitness = new MerkleWitness8(tree.getWitness(BigInt(idx)));

  // get the prior leaf
  const priorLeafIsEmpty = !idx2fields.has(idx);
  let priorLeafMessage = CircuitString.fromString('');
  let priorLeafSigner = PrivateKey.random().toPublicKey();
  if (!priorLeafIsEmpty) {
    const fields = idx2fields.get(idx)!;

    const publicKeyFields = fields.slice(0, 2);
    priorLeafSigner = PublicKey.fromGroup(
      new Group(publicKeyFields[0], publicKeyFields[1])
    );

    const messageFields = fields.slice(2);
    const messageChars = messageFields.map((f) => new Character(f));
    priorLeafMessage = CircuitString.fromCharacters(messageChars);
  }

  // update the leaf
  const message = CircuitString.fromString(messageStr);
  const publicKey = feePayerKey.toPublicKey();
  const newLeaf = publicKey.toFields().concat(message.toFields());
  idx2fields.set(idx, newLeaf);

  // sign the update with the public key we're using
  const signature = Signature.create(feePayerKey, newLeaf);

  const [storedNewStorageNumber, storedNewStorageSignature] =
    await OffChainStorage.requestStore(
      storageServerAddress,
      zkappPublicKey,
      treeHeight,
      idx2fields,
      NodeXMLHttpRequest
    );

  // update the smart contract
  const updateTransaction = await Mina.transaction(
    { feePayerKey, fee: transactionFee },
    () => {
      zkapp!.update(
        priorLeafMessage,
        priorLeafSigner,
        Bool(priorLeafIsEmpty),
        leafWitness,
        message,
        publicKey,
        signature,
        storedNewStorageNumber,
        storedNewStorageSignature
      );
      zkapp.sign(zkappPrivateKey);
    }
  );

  await updateTransaction.send();

  console.log('root updated to', zkapp.storageTreeRoot.get().toString());

  //---------------------------

  await shutdown();
}

main();

