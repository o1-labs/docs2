import {
  SmartContract,
  Field,
  MerkleTree,
  state,
  State,
  method,
  DeployArgs,
  Signature,
  PublicKey,
  Permissions,
  Bool,
} from 'o1js';

import {
  OffChainStorage,
  MerkleWitness8,
} from 'experimental-offchain-zkapp-storage';

export class NumberTreeContract extends SmartContract {
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
    leafIsEmpty: Bool,
    oldNum: Field,
    num: Field,
    path: MerkleWitness8,
    storedNewRootNumber: Field,
    storedNewRootSignature: Signature
  ) {
    const storedRoot = this.storageTreeRoot.get();
    this.storageTreeRoot.assertEquals(storedRoot);

    let storedNumber = this.storageNumber.get();
    this.storageNumber.assertEquals(storedNumber);

    let storageServerPublicKey = this.storageServerPublicKey.get();
    this.storageServerPublicKey.assertEquals(storageServerPublicKey);

    let leaf = [oldNum];
    let newLeaf = [num];

    // newLeaf can be a function of the existing leaf
    newLeaf[0].assertGreaterThan(leaf[0]);

    const updates = [
      {
        leaf,
        leafIsEmpty,
        newLeaf,
        newLeafIsEmpty: Bool(false),
        leafWitness: path,
      },
    ];

    const storedNewRoot = OffChainStorage.assertRootUpdateValid(
      storageServerPublicKey,
      storedNumber,
      storedRoot,
      updates,
      storedNewRootNumber,
      storedNewRootSignature
    );

    this.storageTreeRoot.set(storedNewRoot);
    this.storageNumber.set(storedNewRootNumber);
  }
}
