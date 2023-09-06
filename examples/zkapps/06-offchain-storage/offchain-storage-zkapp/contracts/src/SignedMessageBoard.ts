import {
  Field,
  SmartContract,
  state,
  State,
  method,
  DeployArgs,
  Permissions,
  MerkleTree,
  CircuitString,
  PublicKey,
  Signature,
  Bool,
} from 'o1js';

import {
  OffChainStorage,
  Update,
  MerkleWitness8,
} from 'experimental-offchain-zkapp-storage';

export class SignedMessageBoard extends SmartContract {
  @state(PublicKey) storageServerPublicKey = State<PublicKey>();
  @state(Field) storageNumber = State<Field>();
  @state(Field) storageTreeRoot = State<Field>();

  deploy(args: DeployArgs) {
    super.deploy(args);
    this.account.permissions.set({
      ...Permissions.default(),
      editState: Permissions.proofOrSignature(),
    });
  }

  @method initState(storageServerPublicKey: PublicKey) {
    this.storageServerPublicKey.set(storageServerPublicKey);
    this.storageNumber.set(Field(0));

    const emptyTreeRoot = new MerkleTree(8).getRoot();
    this.storageTreeRoot.set(emptyTreeRoot);
  }

  @method update(
    priorLeafMessage: CircuitString,
    priorLeafSigner: PublicKey,
    priorLeafIsEmpty: Bool,
    leafWitness: MerkleWitness8,
    message: CircuitString,
    publicKey: PublicKey,
    signature: Signature,
    storedNewStorageNumber: Field,
    storedNewStorageSignature: Signature
  ) {
    const storedRoot = this.storageTreeRoot.get();
    this.storageTreeRoot.assertEquals(storedRoot);

    let storedNumber = this.storageNumber.get();
    this.storageNumber.assertEquals(storedNumber);

    let storageServerPublicKey = this.storageServerPublicKey.get();
    this.storageServerPublicKey.assertEquals(storageServerPublicKey);

    const leaf = priorLeafSigner
      .toGroup()
      .toFields()
      .concat(priorLeafMessage.toFields());
    const newLeaf = publicKey.toGroup().toFields().concat(message.toFields());

    signature.verify(publicKey, newLeaf).assertTrue();

    const updates: Update[] = [
      {
        leaf,
        leafIsEmpty: priorLeafIsEmpty,
        newLeaf,
        newLeafIsEmpty: Bool(false),
        leafWitness,
      },
    ];

    const storedNewRoot = OffChainStorage.assertRootUpdateValid(
      storageServerPublicKey,
      storedNumber,
      storedRoot,
      updates,
      storedNewStorageNumber,
      storedNewStorageSignature
    );

    this.storageTreeRoot.set(storedNewRoot);
    this.storageNumber.set(storedNewStorageNumber);
  }
}
