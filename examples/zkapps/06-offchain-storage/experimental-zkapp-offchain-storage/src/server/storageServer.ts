//const cors = require('cors');
import express from 'express';
import cors from 'cors';
import fs from 'fs';

import {
  PrivateKey,
  Field,
  MerkleTree,
  Poseidon,
  Signature,
  PublicKey,
  fetchAccount,
  Mina,
} from 'o1js';

console.log(
  'CAUTION: This project is in development and not to be relied upon to guarantee storage in production environments.'
);

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// ==============================================================================

const maxHeight = 256;

const useLocalBlockchain = true;

const Local = Mina.LocalBlockchain();
if (useLocalBlockchain) {
  Mina.setActiveInstance(Local);
} else {
  const Berkeley = Mina.Network(
    'https://proxy.berkeley.minaexplorer.com/graphql'
  );
  Mina.setActiveInstance(Berkeley);
}

const saveFile = 'database.json';

// ==============================================================================

type data_obj_map = {
  [root: string]: { rootNumber: number; items: Array<[string, string[]]> };
};

let database: {
  [zkAppAddress: string]: {
    nextNumber: number;
    height: number;
    root2data: data_obj_map;
  };
} = {};

let serverPrivateKey: PrivateKey;
if (fs.existsSync(saveFile)) {
  var fileData = fs.readFileSync(saveFile, 'utf8');
  const data = JSON.parse(fileData);
  database = data.database;
  serverPrivateKey = PrivateKey.fromBase58(data.serverPrivateKey58);
  console.log('found database');
} else {
  serverPrivateKey = PrivateKey.random();

  fs.writeFileSync(
    saveFile,
    JSON.stringify({
      database,
      serverPrivateKey58: serverPrivateKey.toBase58(),
    }),
    'utf8'
  );
}

const serverPublicKey = serverPrivateKey.toPublicKey();

console.log('Server using public key', serverPublicKey.toBase58());

// ==============================================================================

(async () => {
  for (;;) {
    console.log('running cleanup');

    for (let zkAppAddress in database) {
      let response = await fetchAccount({
        publicKey: PublicKey.fromBase58(zkAppAddress),
      });
      if (response.account != null && response.account.zkapp != null) {
        let accountRootNumberF = Field(response.account.zkapp.appState![1]);
        let accountRootNumber = accountRootNumberF.toBigInt();

        let root2data = database[zkAppAddress].root2data;

        database[zkAppAddress].root2data = {};
        console.log('cleaning up', zkAppAddress);
        for (let root in root2data) {
          if (root2data[root].rootNumber >= accountRootNumber) {
            database[zkAppAddress].root2data[root] = root2data[root];
          }
        }
      }
    }

    fs.writeFileSync(
      saveFile,
      JSON.stringify({
        database,
        serverPrivateKey58: serverPrivateKey.toBase58(),
      }),
      'utf8'
    );

    await new Promise((resolve) => setTimeout(resolve, 60000));
  }
})();

// ==============================================================================

app.post('/data', (req, res) => {
  const height: number = req.body.height;
  const items: Array<[string, string[]]> = req.body.items;
  const zkAppAddress58: string = req.body.zkAppAddress;

  const fieldItems: Array<[bigint, Field[]]> = items.map(([idx, strs]) => [
    BigInt(idx),
    strs.map((s) => Field.fromJSON(s)),
  ]);

  const idx2fields = new Map<bigint, Field[]>();

  fieldItems.forEach(([index, fields]) => {
    idx2fields.set(index, fields);
  });

  const tree = new MerkleTree(height);

  for (let [idx, fields] of idx2fields) {
    tree.setLeaf(BigInt(idx), Poseidon.hash(fields));
  }

  if (height > maxHeight) {
    res
      .status(400)
      .send(
        'height is too large. A max height of ' +
          maxHeight +
          ' is supported for this implementation'
      );
    return;
  }

  if (items.length > 2 ** (height - 1)) {
    res.status(400).send('too many items for height');
    return;
  }

  if (!(zkAppAddress58 in database)) {
    database[zkAppAddress58] = {
      nextNumber: 1,
      height,
      root2data: {},
    };
  }

  if (database[zkAppAddress58].height != height) {
    res.status(400).send('wrong height');
    return;
  }

  const newRoot = tree.getRoot();
  const newRootNumber = Field(database[zkAppAddress58].nextNumber);

  database[zkAppAddress58].nextNumber += 1;
  database[zkAppAddress58].root2data[newRoot.toString()] = {
    rootNumber: Number(newRootNumber.toBigInt()),
    items,
  };

  fs.writeFileSync(
    saveFile,
    JSON.stringify({
      database,
      serverPrivateKey58: serverPrivateKey.toBase58(),
    }),
    'utf8'
  );

  let newRootSignature = Signature.create(serverPrivateKey, [
    newRoot,
    newRootNumber,
  ]);

  console.log('storing', zkAppAddress58, newRoot.toString());

  res.json({
    result: [
      newRootNumber.toString(),
      newRootSignature.toFields().map((f) => f.toString()),
    ],
  });
});

// ==============================================================================

app.get('/data', (req, res) => {
  const zkAppAddress58 = req.query.zkAppAddress;
  const root = req.query.root;

  if (typeof zkAppAddress58 == 'string' && typeof root == 'string') {
    console.log('getting', zkAppAddress58, root);
    res.json({
      items: database[zkAppAddress58].root2data[root].items,
    });
  } else {
    res.status(400).send('bad query parameters');
  }
});

// ==============================================================================

app.get('/publicKey', (req, res) => {
  res.json({
    serverPublicKey58: serverPublicKey.toBase58(),
  });
});

// ==============================================================================

app.listen(port, () =>
  console.log(`Storage Server listening on port ${port}!`)
);

// ==============================================================================
