import {
  Poseidon,
  Field,
  Bool,
  MerkleTree,
  MerkleWitness,
  Signature,
  PublicKey,
  Provable,
} from 'o1js';

export class MerkleWitness4 extends MerkleWitness(4) {}
export class MerkleWitness8 extends MerkleWitness(8) {}
export class MerkleWitness16 extends MerkleWitness(16) {}
export class MerkleWitness24 extends MerkleWitness(24) {}
export class MerkleWitness32 extends MerkleWitness(32) {}
export class MerkleWitness64 extends MerkleWitness(64) {}
export class MerkleWitness128 extends MerkleWitness(128) {}
export class MerkleWitness256 extends MerkleWitness(256) {}

// ==============================================================================

const printCaution = () =>
  console.log(
    'CAUTION: This project is in development and not to be relied upon to guarantee storage in production environments.'
  );

export type Update = {
  leaf: Field[];
  leafIsEmpty: Bool;
  newLeaf: Field[];
  newLeafIsEmpty: Bool;
  leafWitness: MerkleWitness8;
};

export const assertRootUpdateValid = (
  serverPublicKey: PublicKey,
  rootNumber: Field,
  root: Field,
  updates: Update[],
  storedNewRootNumber: Field,
  storedNewRootSignature: Signature
) => {
  let emptyLeaf = Field(0);

  var currentRoot = root;
  for (var i = 0; i < updates.length; i++) {
    const { leaf, leafIsEmpty, newLeaf, newLeafIsEmpty, leafWitness } =
      updates[i];

    // check the root is starting from the correct state
    let leafHash = Provable.if(leafIsEmpty, emptyLeaf, Poseidon.hash(leaf));
    leafWitness.calculateRoot(leafHash).assertEquals(currentRoot);

    // calculate the new root after setting the leaf
    let newLeafHash = Provable.if(
      newLeafIsEmpty,
      emptyLeaf,
      Poseidon.hash(newLeaf)
    );
    currentRoot = leafWitness.calculateRoot(newLeafHash);
  }

  const storedNewRoot = currentRoot;

  // check the server is storing the stored new root
  storedNewRootSignature
    .verify(serverPublicKey, [storedNewRoot, storedNewRootNumber])
    .assertTrue();
  rootNumber.assertLessThan(storedNewRootNumber);

  return storedNewRoot;
};

// ==============================================================================

export const get = async (
  serverAddress: string,
  zkAppAddress: PublicKey,
  height: number,
  root: Field,
  UserXMLHttpRequest: typeof XMLHttpRequest | null = null
) => {
  const idx2fields = new Map<bigint, Field[]>();

  const tree = new MerkleTree(height);
  if (tree.getRoot().equals(root).toBoolean()) {
    return idx2fields;
  }

  var params =
    'zkAppAddress=' + zkAppAddress.toBase58() + '&root=' + root.toString();

  const response = await makeRequest(
    'GET',
    serverAddress + '/data?' + params,
    null,
    UserXMLHttpRequest
  );

  const data = JSON.parse(response);
  printCaution();

  const items: Array<[string, string[]]> = data.items;
  const fieldItems: Array<[string, Field[]]> = items.map(([idx, strs]) => [
    idx,
    strs.map((s) => Field.fromJSON(s)),
  ]);

  fieldItems.forEach(([index, fields]) => {
    idx2fields.set(BigInt(index), fields);
  });

  return idx2fields;
};

// ==============================================================================

export const requestStore = async (
  serverAddress: string,
  zkAppAddress: PublicKey,
  height: number,
  idx2fields: Map<bigint, Field[]>,
  UserXMLHttpRequest: typeof XMLHttpRequest | null = null
): Promise<[Field, Signature]> => {
  const items = [];

  for (let [idx, fields] of idx2fields) {
    items.push([idx.toString(), fields.map((f) => f.toJSON())]);
  }

  const response = await makeRequest(
    'POST',
    serverAddress + '/data',
    JSON.stringify({
      zkAppAddress: zkAppAddress.toBase58(),
      items,
      height,
    }),
    UserXMLHttpRequest
  );

  const data = JSON.parse(response);
  printCaution();

  const result: [string, string[]] = data.result;

  const newRootNumber = Field.fromJSON(result[0]);
  const newRootSignature = Signature.fromFields(
    result[1].map((s) => Field.fromJSON(s))
  );
  return [newRootNumber, newRootSignature];
};

// ==============================================================================

export const getPublicKey = async (
  serverAddress: string,
  UserXMLHttpRequest: typeof XMLHttpRequest | null = null
) => {
  const response = await makeRequest(
    'GET',
    serverAddress + '/publicKey',
    null,
    UserXMLHttpRequest
  );

  const data = JSON.parse(response);
  printCaution();

  const publicKey = PublicKey.fromBase58(data.serverPublicKey58);

  return publicKey;
};

// ==============================================================================

export function makeRequest(
  method: string,
  url: string,
  data: string | null = null,
  UserXMLHttpRequest: typeof XMLHttpRequest | null = null
): Promise<string> {
  return new Promise(function (resolve, reject) {
    let xhr: XMLHttpRequest;
    if (UserXMLHttpRequest != null) {
      xhr = new UserXMLHttpRequest();
    } else {
      xhr = new XMLHttpRequest();
    }
    xhr.open(method, url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject({
          status: this.status,
          statusText: xhr.responseText,
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.responseText,
      });
    };
    if (data != null) {
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    }
    xhr.send(data);
  });
}

// ==============================================================================

export function mapToTree(height: number, idx2fields: Map<bigint, Field[]>) {
  const tree = new MerkleTree(height);
  for (let [k, fields] of idx2fields) {
    tree.setLeaf(k, Poseidon.hash(fields));
  }
  return tree;
}

// ==============================================================================
