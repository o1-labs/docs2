import { Square } from './Square.js';
import {
  isReady,
  shutdown,
  Field,
  Mina,
  PrivateKey,
  AccountUpdate,
  SelfProof,
  Experimental,
  Struct,
  Bool,
  Circuit,
  Poseidon,
  MerkleMap,
  MerkleTree,
  MerkleWitness,
  MerkleMapWitness,
  verify,
} from 'o1js';

class MerkleWitness20 extends MerkleWitness(20) {}

async function main() {
  await isReady;

  console.log('o1js loaded');

  console.log('compiling...');

  const { verificationKey } = await Add.compile();

  console.log('making proof 0')

  const proof0 = await Add.init(Field(0));

  console.log('making proof 1')

  const proof1 = await Add.addNumber(Field(4), proof0, Field(4));

  console.log('making proof 2')

  const proof2 = await Add.add(Field(4), proof1, proof0);

  console.log('verifying proof 2');
  console.log('proof 2 data', proof2.publicInput.toString());

  const ok = await verify(proof2.toJSON(), verificationKey);
  console.log('ok', ok);

  console.log('Shutting down');

  await shutdown();
}

const Add = Experimental.ZkProgram({
  publicInput: Field,

  methods: {
    init: {
      privateInputs: [],

      method(state: Field) {
        state.assertEquals(Field(0));
      },
    },

    addNumber: {
      privateInputs: [SelfProof, Field ],

      method(newState: Field, earlierProof: SelfProof<Field>, numberToAdd: Field) {
        earlierProof.verify();
        newState.assertEquals(earlierProof.publicInput.add(numberToAdd));
      },
    },

    add: {
      privateInputs: [ SelfProof, SelfProof ],

      method(
        newState: Field, 
        earlierProof1: SelfProof<Field>,
        earlierProof2: SelfProof<Field>,
      ) {
        earlierProof1.verify();
        earlierProof2.verify();
        newState.assertEquals(earlierProof1.publicInput.add(earlierProof2.publicInput));
      },
    },
  },
});
main();
