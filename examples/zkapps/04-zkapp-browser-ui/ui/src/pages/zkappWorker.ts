import { Mina, PublicKey, fetchAccount } from 'o1js';
import * as Comlink from "comlink";
import type { Add } from '../../../contracts/src/Add';

type Transaction = Awaited<ReturnType<typeof Mina.transaction>>;

// ---------------------------------------------------------------------------------------


const state = {
  Add: null as null | typeof Add,
  zkapp: null as null | Add,
  transaction: null as null | Transaction,
};

// ---------------------------------------------------------------------------------------

// Define the worker's methods
const api = {
  setActiveInstanceToDevnet: async (args: {}) => {
    const Network = Mina.Network(
      'https://api.minascan.io/node/devnet/v1/graphql'
    );
    console.log('Devnet network instance configured.');
    Mina.setActiveInstance(Network);
  },
  loadContract: async (args: {}) => {
    const { Add } = await import('../../../contracts/build/src/Add.js');
    state.Add = Add;
  },
  compileContract: async (args: {}) => {
    await state.Add!.compile();
  },
  fetchAccount: async (publicKey: PublicKey) => {
    // console.log('args', args  )
    // const publicKey = PublicKey.fromBase58(args.publicKey58);
    return await fetchAccount(publicKey);
  },
  initZkappInstance: async (publicKey: PublicKey) => {
    console.log(publicKey)
    // const publicKey = PublicKey.fromBase58(args.publicKey58);
    state.zkapp = new state.Add!(publicKey);
  },
  getNum: async (args: {}) => {
    const currentNum = await state.zkapp!.num.get();
    return JSON.stringify(currentNum.toJSON());
  },
  createUpdateTransaction: async (args: {}) => {
    const transaction = await Mina.transaction(async () => {
      await state.zkapp!.update();
    });
    state.transaction = transaction;
  },
  proveUpdateTransaction: async (args: {}) => {
    await state.transaction!.prove();
  },
  getTransactionJSON: async (args: {}) => {
    return state.transaction!.toJSON();
  },
};

// ---------------------------------------------------------------------------------------

// Expose the API to be used by the main thread 
Comlink.expose(api);
