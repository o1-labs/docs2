import {
  Field,
  SmartContract,
  state,
  State,
  method,
  DeployArgs,
  Permissions,
  MerkleWitness,
  Poseidon,
  PublicKey,
  Signature,
  Circuit,
} from 'snarkyjs';

class MerkleWitness20 extends MerkleWitness(20) {}

export class LedgerContract extends SmartContract {
  @state(Field) ledgerRoot = State<Field>();

  deploy(args: DeployArgs) {
    super.deploy(args);
    this.setPermissions({
      ...Permissions.default(),
      editState: Permissions.proofOrSignature(),
    });
  }

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
    this.ledgerRoot.assertEquals(initialLedgerRoot);

    // check the sender's signature
    senderSignature.verify(
      senderPublicKey, 
      [ initialLedgerRoot, sendAmount ].concat(recipientPublicKey.toFields())
    ).assertTrue();

    // check the initial state matches what we expect
    const rootSenderBefore = senderWitness.calculateRoot(
      Poseidon.hash([ Field(senderBalanceBefore), Poseidon.hash(senderPublicKey.toFields()) ]));
    rootSenderBefore.assertEquals(initialLedgerRoot);

    senderBalanceBefore.assertGte(sendAmount);

    // compute the sender state after sending
    const rootSenderAfter = senderWitness.calculateRoot(
      Poseidon.hash([ Field(senderBalanceBefore).sub(sendAmount), Poseidon.hash(senderPublicKey.toFields()) ]));

    // compute the possible recipient states before receiving
    const rootRecipientBefore = recipientWitness.calculateRoot(
      Poseidon.hash([ Field(recipientBalanceBefore), Poseidon.hash(recipientPublicKey.toFields()) ]));
    const rootRecipientBeforeEmpty = recipientWitness.calculateRoot(Field.zero);

    const recipientAccountNew = rootSenderAfter.equals(rootRecipientBeforeEmpty);

    // check requirements on the recipient state before receiving
    const recipientAccountPassesRequirements = Circuit.if(
      recipientAccountNew, 
      (() => {
        // new account
        // balance before must be zero
        return recipientBalanceBefore.equals(Field.zero)
      })(),
      (() => {
        // existing account
        // check existing account witness
        return rootSenderAfter.equals(rootRecipientBefore);
      })());

    recipientAccountPassesRequirements.assertTrue();

    // compute the recipient state after receiving
    const rootRecipientAfter = recipientWitness.calculateRoot(
      Poseidon.hash([ Field(recipientBalanceBefore).add(sendAmount), Poseidon.hash(recipientPublicKey.toFields()) ]));

    // set the new ledgerRoot
    this.ledgerRoot.set(rootRecipientAfter);
  }
}

