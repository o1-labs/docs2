import {
  Mina,
  isReady,
  PublicKey,
  PrivateKey,
  Field,
  fetchAccount,
  AccountUpdate,
  Experimental,
  Poseidon,
  Group,
  Character,
  CircuitString,
  Signature,
  Bool,
  MerkleTree,
  MerkleWitness,
} from 'o1js';

type Transaction = Awaited<ReturnType<typeof Mina.transaction>>;

// ---------------------------------------------------------------------------------------

import type { SignedMessageBoard } from '../../contracts/src/SignedMessageBoard';
import { OffChainStorage, Update } from 'zkapp-offchain-storage';

const state = {
  SignedMessageBoard: null as null | typeof SignedMessageBoard,
  storageServerAddress: null as null | string,
  zkAppAddress: null as null | PublicKey,
  zkapp: null as null | SignedMessageBoard,
  transaction: null as null | Transaction,
  testAccounts: null as
    | null
    | { publicKey: PublicKey; privateKey: PrivateKey }[],
  isLocal: false,
};

// ---------------------------------------------------------------------------------------

const functions = {
  loadO1js: async (args: {}) => {
    await isReady;
  },
  setActiveInstanceToBerkeley: async (args: {}) => {
    const Berkeley = Mina.BerkeleyQANet(
      'https://proxy.berkeley.minaexplorer.com/graphql'
    );
    Mina.setActiveInstance(Berkeley);
  },
  setActiveInstanceToLocal: async (args: {}) => {
    const Local = Mina.LocalBlockchain();
    Mina.setActiveInstance(Local);
    state.testAccounts = Local.testAccounts;
    state.isLocal = true;
  },
  getLocalPrivateKey: async (args: {}) => {
    return state.testAccounts![0].privateKey.toBase58();
  },
  setStorageServer: async (args: { storageServerAddress: string }) => {
    state.storageServerAddress = args.storageServerAddress;
  },
  loadContract: async (args: {}) => {
    const { SignedMessageBoard } = await import(
      '../../contracts/build/src/SignedMessageBoard.js'
    );
    state.SignedMessageBoard = SignedMessageBoard;
  },
  compileContract: async (args: {}) => {
    if (!state.isLocal) {
      await state.SignedMessageBoard!.compile();
    }
  },
  fetchAccount: async (args: { publicKey58: string }) => {
    const publicKey = PublicKey.fromBase58(args.publicKey58);
    if (!state.isLocal) {
      return await fetchAccount({ publicKey });
    } else {
      return { error: null };
    }
  },
  initZkappInstance: async (args: { publicKey58: string }) => {
    const publicKey = PublicKey.fromBase58(args.publicKey58);
    state.zkAppAddress = publicKey;
    state.zkapp = new state.SignedMessageBoard!(publicKey);
  },
  getMessages: async (args: {}) => {
    const treeRoot = await state.zkapp!.storageTreeRoot.get();
    const idx2fields = await OffChainStorage.get(
      state.storageServerAddress!,
      state.zkAppAddress!,
      8,
      treeRoot
    );
    var map: { [key: string]: string[] } = {};
    for (let [key, fields] of Object.entries(idx2fields)) {
      map[key + ''] = fields.map((v: Field) => v.toString());
    }
    return JSON.stringify(map);
  },
  createInitTransaction: async (args: {
    feePayerPrivateKey58: string;
    transactionFee: number;
  }) => {
    // TODO
  },
  createUpdateTransaction: async (args: {
    feePayerPrivateKey58: string;
    transactionFee: number;
    idx: number;
    message: string;
  }) => {
    const feePayerKey = PrivateKey.fromBase58(args.feePayerPrivateKey58);

    if (!state.isLocal) {
      await fetchAccount({ publicKey: state.zkAppAddress! });
    }

    const treeRoot = await state.zkapp!.storageTreeRoot.get();
    const idx2fields = await OffChainStorage.get(
      state.storageServerAddress!,
      state.zkAppAddress!,
      8,
      treeRoot
    );

    const priorLeafIsEmpty = !idx2fields.has(args.idx);
    let priorLeafMessage = CircuitString.fromString('');
    let priorLeafSigner = PrivateKey.random().toPublicKey();
    if (!priorLeafIsEmpty) {
      const fields = idx2fields.get(args.idx)!;

      const publicKeyFields = fields.slice(0, 2);
      const messageFields = fields.slice(2);
      const messageChars = messageFields.map((f) => new Character(f));

      priorLeafSigner = PublicKey.fromFields(publicKeyFields);
      priorLeafMessage = CircuitString.fromCharacters(messageChars);
    }

    const tree = new MerkleTree(8);
    for (let [k, fields] of idx2fields) {
      tree.setLeaf(BigInt(k), Poseidon.hash(fields));
    }

    class MerkleWitness8 extends MerkleWitness(8) {}
    const leafWitness = new MerkleWitness8(tree.getWitness(BigInt(args.idx)));

    const message = CircuitString.fromString(args.message);

    const publicKey = feePayerKey.toPublicKey();
    const concat = publicKey.toFields().concat(message.toFields());
    const signature = Signature.create(feePayerKey, concat);

    idx2fields.set(args.idx, concat);
    const [storedNewStorageNumber, storedNewStorageSignature] =
      await OffChainStorage.requestStore(
        state.storageServerAddress!,
        state.zkAppAddress!,
        8,
        idx2fields
      );

    tree.setLeaf(BigInt(args.idx), Poseidon.hash(concat));
    const storedNewRoot = tree.getRoot();

    const transaction = await Mina.transaction(
      { feePayerKey, fee: args.transactionFee },
      () => {
        state.zkapp!.update(
          priorLeafMessage as any,
          priorLeafSigner,
          Bool(priorLeafIsEmpty),
          leafWitness,
          message as any,
          publicKey,
          signature,
          storedNewRoot,
          storedNewStorageNumber,
          storedNewStorageSignature
        );
        state.zkapp!.sign(feePayerKey);
      }
    );
    state.transaction = transaction;
  },
  createDeployTransaction: async (args: {
    feePayerPrivateKey58: string;
    transactionFee: number;
    zkAppPrivateKey58: string;
  }) => {
    const feePayerKey = PrivateKey.fromBase58(args.feePayerPrivateKey58);
    const zkAppPrivateKey = PrivateKey.fromBase58(args.zkAppPrivateKey58);

    const serverPublicKey = await OffChainStorage.getPublicKey(
      state.storageServerAddress!
    );

    const transaction = await Mina.transaction(feePayerKey, () => {
      AccountUpdate.fundNewAccount(feePayerKey);
      state.zkapp!.deploy({ zkappKey: zkAppPrivateKey });
      state.zkapp!.init(serverPublicKey);
      state.zkapp!.sign(zkAppPrivateKey);
    });
    state.transaction = transaction;
  },
  proveUpdateTransaction: async (args: {}) => {
    if (!state.isLocal) {
      await state.transaction!.prove();
    }
  },
  sendUpdateTransaction: async (args: {}) => {
    if (state.isLocal) {
      (await state.transaction!.send()).wait();
      return 'nohash_islocal';
    } else {
      var txn_res = await state.transaction!.send();
      const transactionHash = txn_res!.hash();
      return transactionHash;
    }
  },
};

// ---------------------------------------------------------------------------------------

export type WorkerFunctions = keyof typeof functions;

export type ZkappWorkerRequest = {
  id: number;
  fn: WorkerFunctions;
  args: any;
};

export type ZkappWorkerReponse = {
  id: number;
  data: any;
};
if (process.browser) {
  addEventListener(
    'message',
    async (event: MessageEvent<ZkappWorkerRequest>) => {
      const returnData = await functions[event.data.fn](event.data.args);

      const message: ZkappWorkerReponse = {
        id: event.data.id,
        data: returnData,
      };
      postMessage(message);
    }
  );
}
