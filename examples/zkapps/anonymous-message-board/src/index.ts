import {
  Field,
  PrivateKey,
  SmartContract,
  state,
  State,
  method,
  PublicKey,
  Poseidon,
  isReady,
} from 'snarkyjs';

await isReady;

// accountPublicKeys is used to configure which accounts will be allowed to publish messages.
// accountPrivateKeys stores the associated private keys, and it here only for convenience.

export const accountPrivateKeys = [
  PrivateKey.fromBase58('EKFAdBGSSXrBbaCVqy4YjwWHoGEnsqYRQTqz227Eb5bzMx2bWu3F'),
  PrivateKey.fromBase58('EKEitxmNYYMCyumtKr8xi1yPpY3Bq6RZTEQsozu2gGf44cNxowmg'),
  PrivateKey.fromBase58('EKE9qUDcfqf6Gx9z6CNuuDYPe4XQQPzFBCfduck2X4PeFQJkhXtt'), // This one says duck in it :)
];

export const accountPublicKeys = [
  PublicKey.fromBase58(
    'B62qkCkKQ5vSRkTQyEEj22vnHH4hVKfp4pc3QYd4GPSv7u6S4aBE4Fx'
  ),
  PublicKey.fromBase58(
    'B62qrvaafH1F812QFRF1Us8FjouuetZjU5ZpUUYEBBBA9tG9LogYuRB'
  ),
  PublicKey.fromBase58(
    'B62qkF6VsNiacd4WHjBpgX7Z4riBsjqbHYK5Z295t9yE3krK74sLYx9'
  ),
];

export class Message extends SmartContract {
  @state(Field) message = State<Field>();
  @state(Field) messageHistoryHash = State<Field>();
  @state(PublicKey) user1 = State<PublicKey>();
  @state(PublicKey) user2 = State<PublicKey>();
  @state(PublicKey) user3 = State<PublicKey>();

  // Initialization
  deploy(args: {
    verificationKey?: string | undefined;
    zkappKey?: PrivateKey | undefined;
  }) {
    super.deploy(args);
    this.message.set(Field.zero);
    this.messageHistoryHash.set(Field.zero);
    this.user1.set(accountPublicKeys[0]);
    this.user2.set(accountPublicKeys[1]);
    this.user3.set(accountPublicKeys[2]);
  }

  @method publishMessage(message: Field, signerPrivateKey: PrivateKey) {
    const signerPublicKey = signerPrivateKey.toPublicKey();
    const user1 = this.user1.get();
    const user2 = this.user2.get();
    const user3 = this.user3.get();

    signerPublicKey
      .equals(user1)
      .or(signerPublicKey.equals(user2))
      .or(signerPublicKey.equals(user3))
      .assertEquals(true);

    this.message.set(message);

    const oldHash = this.messageHistoryHash.get();
    const newHash = Poseidon.hash([oldHash, message]);
    this.messageHistoryHash.set(newHash);
  }
}
