import { fetchAccount, PublicKey, PrivateKey, Field } from 'o1js';

import type {
  ZkappWorkerRequest,
  ZkappWorkerReponse,
  WorkerFunctions,
} from './zkappWorker';

export default class ZkappWorkerClient {
  // ---------------------------------------------------------------------------------------

  setActiveInstanceToBerkeley() {
    return this._call('setActiveInstanceToBerkeley', {});
  }

  setActiveInstanceToLocal() {
    return this._call('setActiveInstanceToLocal', {});
  }

  async getLocalPrivateKey() {
    var privateKey58 = await this._call('getLocalPrivateKey', {});
    return PrivateKey.fromBase58(privateKey58 as string);
  }

  setStorageServer(storageServerAddress: string) {
    return this._call('setStorageServer', { storageServerAddress });
  }

  loadContract() {
    return this._call('loadContract', {});
  }

  compileContract() {
    return this._call('compileContract', {});
  }

  fetchAccount({
    publicKey,
  }: {
    publicKey: PublicKey;
  }): ReturnType<typeof fetchAccount> {
    const result = this._call('fetchAccount', {
      publicKey58: publicKey.toBase58(),
    });
    return result as ReturnType<typeof fetchAccount>;
  }

  initZkappInstance(publicKey: PublicKey) {
    return this._call('initZkappInstance', {
      publicKey58: publicKey.toBase58(),
    });
  }

  createInitTransaction(
    feePayerPrivateKey: PrivateKey,
    zkAppPrivateKey: PrivateKey
  ) {
    return this._call('createInitTransaction', {
      feePayerPrivateKey58: feePayerPrivateKey.toBase58(),
      zkAppPrivateKey58: zkAppPrivateKey.toBase58(),
    });
  }

  createDeployTransaction(
    feePayerPrivateKey: PrivateKey,
    transactionFee: number,
    zkAppPrivateKey: PrivateKey
  ) {
    return this._call('createDeployTransaction', {
      feePayerPrivateKey58: feePayerPrivateKey.toBase58(),
      transactionFee,
      zkAppPrivateKey58: zkAppPrivateKey.toBase58(),
    });
  }

  async getMessages(): Promise<Map<number, Field[]>> {
    const result = await this._call('getMessages', {});
    const map = JSON.parse(result as string);
    const idx2fields = new Map<number, Field[]>();
    for (let strKey in map) {
      idx2fields.set(
        parseInt(strKey),
        map[strKey].map((s: string) => Field.from(s))
      );
    }
    return idx2fields;
  }

  createUpdateTransaction(
    feePayerPrivateKey: PrivateKey,
    transactionFee: number,
    idx: number,
    message: string
  ) {
    const feePayerPrivateKey58 = feePayerPrivateKey.toBase58();
    return this._call('createUpdateTransaction', {
      feePayerPrivateKey58,
      message,
      idx,
      transactionFee,
    });
  }

  proveUpdateTransaction() {
    return this._call('proveUpdateTransaction', {});
  }

  async sendUpdateTransaction() {
    const result = await this._call('sendUpdateTransaction', {});
    return result as string;
  }

  // ---------------------------------------------------------------------------------------

  worker: Worker;

  promises: {
    [id: number]: { resolve: (res: any) => void; reject: (err: any) => void };
  };

  nextId: number;

  constructor() {
    this.worker = new Worker(new URL('./zkappWorker.ts', import.meta.url));
    this.promises = {};
    this.nextId = 0;

    this.worker.onmessage = (event: MessageEvent<ZkappWorkerReponse>) => {
      this.promises[event.data.id].resolve(event.data.data);
      delete this.promises[event.data.id];
    };
  }

  _call(fn: WorkerFunctions, args: any) {
    return new Promise((resolve, reject) => {
      this.promises[this.nextId] = { resolve, reject };

      const message: ZkappWorkerRequest = {
        id: this.nextId,
        fn,
        args,
      };

      this.worker.postMessage(message);

      this.nextId++;
    });
  }
}
