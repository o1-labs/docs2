import { Field, PublicKey, fetchAccount } from 'o1js';
import * as Comlink from "comlink";

// import type {
//   WorkerFunctions,
//   ZkappWorkerReponse,
//   ZkappWorkerRequest,
// } from './zkappWorker';

export default class ZkappWorkerClient {
  // ---------------------------------------------------------------------------------------

  // Proxy to interact with the worker's methods as if they were local
  remoteApi: Comlink.Remote<typeof import('./zkappWorker').api>;

  constructor() {
    // Initialize the worker from the zkappWorker module
    const worker = new Worker(new URL('./zkappWorker.ts', import.meta.url), { type: 'module' });
    // Wrap the worker with Comlink to enable direct method invocation
    this.remoteApi = Comlink.wrap(worker);
  }

  setActiveInstanceToDevnet() {
    return this.remoteApi.setActiveInstanceToDevnet();
  }

  loadContract() {
    return this.remoteApi.loadContract();
  }

  compileContract() {
    return this.remoteApi.compileContract();
  }

  fetchAccount(publicKey: PublicKey): Promise<ReturnType<typeof fetchAccount>> {
    return this.remoteApi.fetchAccount(publicKey.toBase58());
  }

  initZkappInstance(publicKey: PublicKey) {
    return this.remoteApi.initZkappInstance(publicKey.toBase58());
  }

  async getNum(): Promise<Field> {
    const result = await this.remoteApi.getNum();
    return Field.fromJSON(JSON.parse(result as string));
  }

  createUpdateTransaction() {
    return this.remoteApi.createUpdateTransaction();
  }

  proveUpdateTransaction() {
    return this.remoteApi.proveUpdateTransaction();
  }

  getTransactionJSON() {
    return this.remoteApi.getTransactionJSON();
  }

}
