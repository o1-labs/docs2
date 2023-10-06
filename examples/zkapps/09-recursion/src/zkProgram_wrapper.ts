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
  verify
} from 'snarkyjs';


const main = () => {

  const AddOne = ZkProgram({
    publicInput: Field,

    methods: {
      baseCase: {
        privateInputs: [],

        method() {
          return Field(0);
        },
      },

      step: {
        privateInputs: [ SelfProof ],

        method(earlierProof: SelfProof<Field>) {
          earlierProof.verify();
          return earlierProof.publicInput.add(1);
        },
      },
    },
  });
}



const ZkProgram = (config : any) => {

  const methods = config.methods;
  const zkProgramConfig = config;
  zkProgramConfig.methods = {}

  Object.keys(methods).forEach((key) => {
    zkProgramConfig.methods[key] = {
      privateInputs: methods[key].privateInputs,
      method: (...args: any[]) => {
        const result = methods[key].method.apply(null, args.slice(1));
        result.assertEquals(args[0])
      }
    }
  });

  const originalZkProgram = Experimental.ZkProgram(zkProgramConfig);

  const zkProgram: any = {};

  Object.keys(methods).forEach((key) => {
    zkProgram[key] = {
      method: (...args: any[]) => {
        const result = methods.apply(null, args);
        args.unshift(result);
        return (originalZkProgram[key] as any).apply(null, args);
      }
    }
  });

  return zkProgram;
}

main()
