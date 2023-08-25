import {
  MerkleWitness4,
  MerkleWitness8,
  MerkleWitness16,
  MerkleWitness24,
  MerkleWitness32,
  MerkleWitness64,
  MerkleWitness128,
  MerkleWitness256,
  Update,
  assertRootUpdateValid,
  get,
  requestStore,
  getPublicKey,
  makeRequest,
  mapToTree,
} from './offChainStorage.js';

export type { Update };

const OffChainStorage = {
  assertRootUpdateValid,
  get,
  requestStore,
  getPublicKey,
  makeRequest,
  mapToTree,
};

export {
  OffChainStorage,
  MerkleWitness4,
  MerkleWitness8,
  MerkleWitness16,
  MerkleWitness24,
  MerkleWitness32,
  MerkleWitness64,
  MerkleWitness128,
  MerkleWitness256,
};
