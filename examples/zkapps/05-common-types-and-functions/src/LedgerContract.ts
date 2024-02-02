import {
  Field,
  SmartContract,
  state,
  State,
  method,
  MerkleWitness,
  Poseidon,
  PublicKey,
  Signature,
  Provable,
} from 'o1js';

class MerkleWitness20 extends MerkleWitness(20) {}

export class LedgerContract extends SmartContract {
  @state(Field) ledgerRoot = State<Field>();

  @method initState(initialLedgerRoot: Field) {
    this.ledgerRoot.set(initialLedgerRoot);
  }

  @method sendBalance(
    senderWitness: MerkleWitness20,
    recipientWitness: MerkleWitness20,
    senderBalanceBefore: Field,
    recipientBalanceBefore: Field,
    senderPublicKey: PublicKey,
    recipientPublicKey: PublicKey,
    senderSignature: Signature,
    sendAmount: Field
  ) {
    const initialLedgerRoot = this.ledgerRoot.get();
    this.ledgerRoot.requireEquals(initialLedgerRoot);

    // check the sender's signature
    senderSignature
      .verify(
        senderPublicKey,
        [initialLedgerRoot, sendAmount].concat(recipientPublicKey.toFields())
      )
      .assertTrue();

    // check the initial state matches what we expect
    const rootSenderBefore = senderWitness.calculateRoot(
      Poseidon.hash([
        Field(senderBalanceBefore),
        Poseidon.hash(senderPublicKey.toFields()),
      ])
    );
    rootSenderBefore.assertEquals(initialLedgerRoot);

    senderBalanceBefore.assertGreaterThan(sendAmount);

    // compute the sender state after sending
    const rootSenderAfter = senderWitness.calculateRoot(
      Poseidon.hash([
        Field(senderBalanceBefore).sub(sendAmount),
        Poseidon.hash(senderPublicKey.toFields()),
      ])
    );

    // compute the possible recipient states before receiving
    const rootRecipientBefore = recipientWitness.calculateRoot(
      Poseidon.hash([
        Field(recipientBalanceBefore),
        Poseidon.hash(recipientPublicKey.toFields()),
      ])
    );
    const rootRecipientBeforeEmpty = recipientWitness.calculateRoot(Field(0));

    const recipientAccountNew = rootSenderAfter.equals(
      rootRecipientBeforeEmpty
    );

    // check requirements on the recipient state before receiving
    const recipientAccountPassesRequirements = Provable.if(
      recipientAccountNew,
      (() => {
        // new account
        // balance before must be zero
        return recipientBalanceBefore.equals(Field(0));
      })(),
      (() => {
        // existing account
        // check existing account witness
        return rootSenderAfter.equals(rootRecipientBefore);
      })()
    );

    recipientAccountPassesRequirements.assertTrue();

    // compute the recipient state after receiving
    const rootRecipientAfter = recipientWitness.calculateRoot(
      Poseidon.hash([
        Field(recipientBalanceBefore).add(sendAmount),
        Poseidon.hash(recipientPublicKey.toFields()),
      ])
    );

    // set the new ledgerRoot
    this.ledgerRoot.set(rootRecipientAfter);
  }
}
