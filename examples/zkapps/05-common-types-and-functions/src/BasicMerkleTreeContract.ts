import {
  Field,
  SmartContract,
  state,
  State,
  method,
  MerkleWitness,
} from 'o1js';

class MerkleWitness20 extends MerkleWitness(20) {}

export class BasicMerkleTreeContract extends SmartContract {
  @state(Field) treeRoot = State<Field>();

  @method async initState(initialRoot: Field) {
    this.treeRoot.set(initialRoot);
  }

  @method async update(
    leafWitness: MerkleWitness20,
    numberBefore: Field,
    incrementAmount: Field
  ) {
    const initialRoot = this.treeRoot.get();
    this.treeRoot.requireEquals(initialRoot);

    incrementAmount.assertLessThan(Field(10));

    // check the initial state matches what we expect
    const rootBefore = leafWitness.calculateRoot(numberBefore);
    rootBefore.assertEquals(initialRoot);

    // compute the root after incrementing
    const rootAfter = leafWitness.calculateRoot(
      numberBefore.add(incrementAmount)
    );

    // set the new root
    this.treeRoot.set(rootAfter);
  }
}
