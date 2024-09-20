import { Mina, PublicKey, fetchAccount } from 'o1js';
import * as Comlink from "comlink";
import type { Add } from '../../../contracts/src/Add';

type Transaction = Awaited<ReturnType<typeof Mina.transaction>>;

const state = {
  Add: null as null | typeof Add,
  zkapp: null as null | Add,
  transaction: null as null | Transaction,
};

const api = {
  async setActiveInstanceToDevnet() {
    const Network = Mina.Network('https://api.minascan.io/node/devnet/v1/graphql');
    Mina.setActiveInstance(Network);
  },
  async loadContract() {
    const { Add } = await import('../../../contracts/build/src/Add.js');
    state.Add = Add;
  },
  async compileContract() {
    await state.Add!.compile();
  },
  async fetchAccount(publicKey58: string) {
    console.log(`fetchAccount Received publicKey58: ${publicKey58}`);

    const publicKey = PublicKey.fromBase58(publicKey58);
    return fetchAccount({ publicKey });
  },
  async initZkappInstance(publicKey58: string) {
    console.log(`initZkappInstance Received publicKey58: ${publicKey58}`);
    const publicKey = PublicKey.fromBase58(publicKey58);
    state.zkapp = new state.Add!(publicKey);
  },
  async getNum() {
    const currentNum = await state.zkapp!.num.get();
    return JSON.stringify(currentNum.toJSON());
  },
  async createUpdateTransaction() {
    state.transaction = await Mina.transaction(async () => {
      await state.zkapp!.update();
    });
  },
  async proveUpdateTransaction() {
    await state.transaction!.prove();
  },
  async getTransactionJSON() {
    return state.transaction!.toJSON();
  },
};

// Expose the API to be used by the main thread
Comlink.expose(api);
