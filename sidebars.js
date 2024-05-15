module.exports = {
  docs: [
    'welcome',
    {
      type: 'category',
      label: 'About Mina',
      items: [
        'about-mina/index',
        'about-mina/what-are-zero-knowledge-proofs',
        'about-mina/protocol-architecture',
        'about-mina/consensus',
        'about-mina/security',
        'about-mina/faq',
        {
          type: 'link',
          label: 'Whitepaper',
          href: 'https://minaprotocol.com/wp-content/uploads/economicsWhitepaper.pdf',
        },
      ],
    },
    {
      type: 'category',
      label: 'Using Mina',
      items: [
        'using-mina/install-a-wallet',
        'using-mina/ledger-hardware-wallet',
        'using-mina/how-to-send-and-receive',
        'using-mina/how-to-delegate',
        'using-mina/how-to-use-zkapp',
      ],
    },
    {
      type: 'category',
      label: 'zkApp Developers',
      items: [
        'zkapps/index',
        'zkapps/how-zkapps-work',
        'zkapps/getting-started-zkapps',
        'zkapps/install-zkapp-cli',
        {
          type: 'category',
          label: 'Creating zkApps',
          items: [
            'zkapps/how-to-write-a-zkapp',
            'zkapps/testing-zkapps-locally',
            'zkapps/testing-zkapps-lightnet',
            'zkapps/how-to-deploy-a-zkapp',
            'zkapps/how-to-write-a-zkapp-ui',
          ],
        },
        {
          type: 'category',
          label: 'o1js',
          items: [
            'zkapps/o1js/index',
            'zkapps/o1js/basic-concepts',
            'zkapps/o1js/smart-contracts',
            'zkapps/o1js/interact-with-mina',
            'zkapps/o1js/events',
            'zkapps/o1js/actions-and-reducer',
            'zkapps/o1js/fetch-events-and-actions',
            'zkapps/o1js/on-chain-values',
            'zkapps/o1js/offchain-storage',
            'zkapps/o1js/recursion',
            'zkapps/o1js/custom-tokens',
            'zkapps/o1js/gadgets',
            'zkapps/o1js/bitwise-operations',
            'zkapps/o1js/foreign-fields',
            'zkapps/o1js/merkle-tree',
            'zkapps/o1js/permissions',
            'zkapps/o1js/time-locked-accounts',
            'zkapps/o1js/keccak',
            'zkapps/o1js/ecdsa',
            'zkapps/o1js/sha256',
          ],
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'zkapps/tutorials/index',
            'zkapps/tutorials/hello-world',
            'zkapps/tutorials/private-inputs-hash-functions',
            'zkapps/tutorials/deploying-to-a-network',
            'zkapps/tutorials/zkapp-ui-with-react',
            'zkapps/tutorials/common-types-and-functions',
            'zkapps/tutorials/offchain-storage',
            'zkapps/tutorials/oracle',
            'zkapps/tutorials/recursion',
            'zkapps/tutorials/account-updates',
            'zkapps/tutorials/advanced-account-updates',
            'zkapps/tutorials/anonymous-message-board',
            'zkapps/tutorials/interacting-with-zkapps-server-side',
          ],
        },
        {
          type: 'category',
          label: 'o1js Reference',
          items: [
            {
              type: 'doc',
              id: 'zkapps/o1js-reference/README',
              label: 'Introduction',
            },
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/AccountUpdate',
                  label: 'AccountUpdate',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/AccountUpdateForest',
                  label: 'AccountUpdateForest',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/AccountUpdateTree',
                  label: 'AccountUpdateTree',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/AlmostForeignField',
                  label: 'AlmostForeignField',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/BaseMerkleWitness',
                  label: 'BaseMerkleWitness',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Bool',
                  label: 'Bool',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/CanonicalForeignField',
                  label: 'CanonicalForeignField',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Character',
                  label: 'Character',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Circuit',
                  label: 'Circuit',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/CircuitString',
                  label: 'CircuitString',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/DynamicProof',
                  label: 'DynamicProof',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/EcdsaSignature',
                  label: 'EcdsaSignature',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Field',
                  label: 'Field',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/ForeignCurve',
                  label: 'ForeignCurve',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/ForeignField',
                  label: 'ForeignField',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Group',
                  label: 'Group',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Hashed',
                  label: 'Hashed',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Int64',
                  label: 'Int64',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Keypair',
                  label: 'Keypair',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Ledger',
                  label: 'Ledger',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/MerkleList',
                  label: 'MerkleList',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/MerkleListIterator',
                  label: 'MerkleListIterator',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/MerkleMap',
                  label: 'MerkleMap',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/MerkleMapWitness',
                  label: 'MerkleMapWitness',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/MerkleTree',
                  label: 'MerkleTree',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Nullifier',
                  label: 'Nullifier',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Packed',
                  label: 'Packed',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/PrivateKey',
                  label: 'PrivateKey',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Proof',
                  label: 'Proof',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/ProofBase',
                  label: 'ProofBase',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/PublicKey',
                  label: 'PublicKey',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Scalar',
                  label: 'Scalar',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/SelfProof',
                  label: 'SelfProof',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Sign',
                  label: 'Sign',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Signature',
                  label: 'Signature',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/SmartContract',
                  label: 'SmartContract',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/TokenAccountUpdateIterator',
                  label: 'TokenAccountUpdateIterator',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/TokenContract',
                  label: 'TokenContract',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/TokenSymbol',
                  label: 'TokenSymbol',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/UInt32',
                  label: 'UInt32',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/UInt64',
                  label: 'UInt64',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/UInt8',
                  label: 'UInt8',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Unconstrained',
                  label: 'Unconstrained',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/VerificationKey',
                  label: 'VerificationKey',
                },
              ],
            },
            {
              type: 'category',
              label: 'Functions',
              items: [
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/Bytes',
                  label: 'Bytes',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/ConstantField',
                  label: 'ConstantField',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/MerkleListBase',
                  label: 'MerkleListBase',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/MerkleWitness',
                  label: 'MerkleWitness',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/Option',
                  label: 'Option',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/Reducer',
                  label: 'Reducer',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/State',
                  label: 'State',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/Struct',
                  label: 'Struct',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/VarField',
                  label: 'VarField',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/WithHash',
                  label: 'WithHash',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/ZkProgram',
                  label: 'ZkProgram',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/addCachedAccount',
                  label: 'addCachedAccount',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/assert',
                  label: 'assert',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/checkBitLength',
                  label: 'checkBitLength',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/checkZkappTransaction',
                  label: 'checkZkappTransaction',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/circuitMain',
                  label: 'circuitMain',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/createEcdsa',
                  label: 'createEcdsa',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/createForeignCurve',
                  label: 'createForeignCurve',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/createForeignField',
                  label: 'createForeignField',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/declareMethods',
                  label: 'declareMethods',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/declareState',
                  label: 'declareState',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/fetchAccount',
                  label: 'fetchAccount',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/fetchEvents',
                  label: 'fetchEvents',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/fetchLastBlock',
                  label: 'fetchLastBlock',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/fetchTransactionStatus',
                  label: 'fetchTransactionStatus',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/genericHash',
                  label: 'genericHash',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/initializeBindings',
                  label: 'initializeBindings',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/maybeSwap',
                  label: 'maybeSwap',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/merkleListHash',
                  label: 'merkleListHash',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/method',
                  label: 'method',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/provable',
                  label: 'provable',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/provablePure',
                  label: 'provablePure',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/public',
                  label: 'public',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/readVarMessage',
                  label: 'readVarMessage',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/sendZkapp',
                  label: 'sendZkapp',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/setArchiveGraphqlEndpoint',
                  label: 'setArchiveGraphqlEndpoint',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/setGraphqlEndpoint',
                  label: 'setGraphqlEndpoint',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/setGraphqlEndpoints',
                  label: 'setGraphqlEndpoints',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/setNumberOfWorkers',
                  label: 'setNumberOfWorkers',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/state-1',
                  label: 'state-1',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/toConstantField',
                  label: 'toConstantField',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/toFp',
                  label: 'toFp',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/verify',
                  label: 'verify',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/withHashes',
                  label: 'withHashes',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/functions/withMessage',
                  label: 'withMessage',
                },
              ],
            },
            {
              type: 'category',
              label: 'Interfaces',
              items: [
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/interfaces/Permissions',
                  label: 'Permissions',
                },
              ],
            },
            {
              type: 'category',
              label: 'Namespaces',
              items: [
                {
                  type: 'category',
                  label: 'Crypto',
                  items: [
                    {
                      type: 'doc',
                      id: 'zkapps/o1js-reference/namespaces/Crypto/README',
                      label: 'README',
                    },
                    {
                      type: 'category',
                      label: 'Type-Aliases',
                      items: [
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Crypto/type-aliases/Curve',
                          label: 'Curve',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Crypto/type-aliases/CurveParams',
                          label: 'CurveParams',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'Encryption',
                  items: [
                    {
                      type: 'doc',
                      id: 'zkapps/o1js-reference/namespaces/Encryption/README',
                      label: 'README',
                    },
                    {
                      type: 'category',
                      label: 'Functions',
                      items: [
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Encryption/functions/decrypt',
                          label: 'decrypt',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Encryption/functions/encrypt',
                          label: 'encrypt',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'Experimental',
                  items: [
                    {
                      type: 'doc',
                      id: 'zkapps/o1js-reference/namespaces/Experimental/README',
                      label: 'README',
                    },
                    {
                      type: 'category',
                      label: 'Classes',
                      items: [
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Experimental/classes/OffchainStateCommitments',
                          label: 'OffchainStateCommitments',
                        },
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Functions',
                      items: [
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Experimental/functions/OffchainState',
                          label: 'OffchainState',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Experimental/functions/memoizeWitness',
                          label: 'memoizeWitness',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'Lightnet',
                  items: [
                    {
                      type: 'doc',
                      id: 'zkapps/o1js-reference/namespaces/Lightnet/README',
                      label: 'README',
                    },
                    {
                      type: 'category',
                      label: 'Functions',
                      items: [
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Lightnet/functions/acquireKeyPair',
                          label: 'acquireKeyPair',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Lightnet/functions/listAcquiredKeyPairs',
                          label: 'listAcquiredKeyPairs',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Lightnet/functions/releaseKeyPair',
                          label: 'releaseKeyPair',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'Mina',
                  items: [
                    {
                      type: 'doc',
                      id: 'zkapps/o1js-reference/namespaces/Mina/README',
                      label: 'README',
                    },
                    {
                      type: 'category',
                      label: 'Functions',
                      items: [
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/functions/LocalBlockchain',
                          label: 'LocalBlockchain',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/functions/Network',
                          label: 'Network',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/functions/TestPublicKey',
                          label: 'TestPublicKey',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/functions/currentSlot',
                          label: 'currentSlot',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/functions/currentTransaction',
                          label: 'currentTransaction',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/functions/faucet',
                          label: 'faucet',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/functions/fetchActions',
                          label: 'fetchActions',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/functions/fetchEvents',
                          label: 'fetchEvents',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/functions/filterGroups',
                          label: 'filterGroups',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/functions/getAccount',
                          label: 'getAccount',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/functions/getActions',
                          label: 'getActions',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/functions/getBalance',
                          label: 'getBalance',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/functions/getNetworkConstants',
                          label: 'getNetworkConstants',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/functions/getNetworkId',
                          label: 'getNetworkId',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/functions/getNetworkState',
                          label: 'getNetworkState',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/functions/getProofsEnabled',
                          label: 'getProofsEnabled',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/functions/hasAccount',
                          label: 'hasAccount',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/functions/sender',
                          label: 'sender',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/functions/setActiveInstance',
                          label: 'setActiveInstance',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/functions/transaction',
                          label: 'transaction',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/functions/waitForFunding',
                          label: 'waitForFunding',
                        },
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Namespaces',
                      items: [
                        {
                          type: 'category',
                          label: 'TestPublicKey',
                          items: [
                            {
                              type: 'doc',
                              id: 'zkapps/o1js-reference/namespaces/Mina/namespaces/TestPublicKey/README',
                              label: 'README',
                            },
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: 'zkapps/o1js-reference/namespaces/Mina/namespaces/TestPublicKey/functions/random',
                                  label: 'random',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'category',
                          label: 'Transaction',
                          items: [
                            {
                              type: 'doc',
                              id: 'zkapps/o1js-reference/namespaces/Mina/namespaces/Transaction/README',
                              label: 'README',
                            },
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: 'zkapps/o1js-reference/namespaces/Mina/namespaces/Transaction/functions/fromJSON',
                                  label: 'fromJSON',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Type-Aliases',
                      items: [
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/type-aliases/ActionStates',
                          label: 'ActionStates',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/type-aliases/FeePayerSpec',
                          label: 'FeePayerSpec',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/type-aliases/IncludedTransaction',
                          label: 'IncludedTransaction',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/type-aliases/NetworkConstants',
                          label: 'NetworkConstants',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/type-aliases/PendingTransaction',
                          label: 'PendingTransaction',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/type-aliases/PendingTransactionPromise',
                          label: 'PendingTransactionPromise',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/type-aliases/PendingTransactionStatus',
                          label: 'PendingTransactionStatus',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/type-aliases/RejectedTransaction',
                          label: 'RejectedTransaction',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/type-aliases/TestPublicKey',
                          label: 'TestPublicKey',
                        },
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/type-aliases/Transaction',
                          label: 'Transaction',
                        },
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Variables',
                      items: [
                        {
                          type: 'doc',
                          id: 'zkapps/o1js-reference/namespaces/Mina/variables/activeInstance',
                          label: 'activeInstance',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Type-Aliases',
              items: [
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/Account',
                  label: 'Account',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/Bool',
                  label: 'Bool',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/BoolVar',
                  label: 'BoolVar',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/Bytes',
                  label: 'Bytes',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/Cache',
                  label: 'Cache',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/CacheHeader',
                  label: 'CacheHeader',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/ConstantField',
                  label: 'ConstantField',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/DeployArgs',
                  label: 'DeployArgs',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/Empty',
                  label: 'Empty',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/Field',
                  label: 'Field',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/FlexibleProvable',
                  label: 'FlexibleProvable',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/FlexibleProvablePure',
                  label: 'FlexibleProvablePure',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/Group',
                  label: 'Group',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/InferProvable',
                  label: 'InferProvable',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/JsonProof',
                  label: 'JsonProof',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/MerkleListBase',
                  label: 'MerkleListBase',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/MerkleListIteratorBase',
                  label: 'MerkleListIteratorBase',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/Option',
                  label: 'Option',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/Provable',
                  label: 'Provable',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/ProvableExtended',
                  label: 'ProvableExtended',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/ProvableHashable',
                  label: 'ProvableHashable',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/ProvablePure',
                  label: 'ProvablePure',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/Reducer',
                  label: 'Reducer',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/ScalarConst',
                  label: 'ScalarConst',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/State',
                  label: 'State',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/Struct',
                  label: 'Struct',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/TransactionPromise',
                  label: 'TransactionPromise',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/TransactionStatus',
                  label: 'TransactionStatus',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/Undefined',
                  label: 'Undefined',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/VarField',
                  label: 'VarField',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/Void',
                  label: 'Void',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/WithHash',
                  label: 'WithHash',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/Witness',
                  label: 'Witness',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/ZkProgram',
                  label: 'ZkProgram',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/type-aliases/ZkappPublicInput',
                  label: 'ZkappPublicInput',
                },
              ],
            },
            {
              type: 'category',
              label: 'Variables',
              items: [
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/variables/Account',
                  label: 'Account',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/variables/Bool',
                  label: 'Bool',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/variables/Cache',
                  label: 'Cache',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/variables/Crypto',
                  label: 'Crypto',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/variables/Empty',
                  label: 'Empty',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/variables/Field',
                  label: 'Field',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/variables/Gadgets',
                  label: 'Gadgets',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/variables/Group',
                  label: 'Group',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/variables/Hash',
                  label: 'Hash',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/variables/Keccak',
                  label: 'Keccak',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/variables/Permissions',
                  label: 'Permissions',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/variables/Poseidon',
                  label: 'Poseidon',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/variables/TokenId',
                  label: 'TokenId',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/variables/TransactionVersion',
                  label: 'TransactionVersion',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/variables/Undefined',
                  label: 'Undefined',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/variables/Void',
                  label: 'Void',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/variables/ZkappPublicInput',
                  label: 'ZkappPublicInput',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/variables/emptyHash',
                  label: 'emptyHash',
                },
              ],
            },
          ],
        },
        'zkapps/roadmap',
        'zkapps/faq',
        'zkapps/zkapps-for-ethereum-developers',
      ],
    },
    {
      type: 'category',
      label: 'Mina Protocol',
      items: [
        'mina-protocol/proof-of-stake',
        'mina-protocol/whats-in-a-block',
        'mina-protocol/block-producers',
        'mina-protocol/snark-workers',
        'mina-protocol/scan-state',
        'mina-protocol/hardforks',
        'mina-protocol/time-locked-accounts',
        'mina-protocol/sending-a-payment',
        'mina-protocol/lifecycle-of-a-payment',
      ],
    },
    {
      type: 'category',
      label: 'Node Operators',
      items: [
        'node-operators/index',
        {
          type: 'category',
          label: 'Delegation Program',
          items: [
            'node-operators/foundation-delegation-program',
            'node-operators/delegation-tiebreak',
            'node-operators/bp-sidecar',
            'node-operators/uptime-tracking-system',
          ],
        },
        'node-operators/getting-started',
        'node-operators/generating-a-keypair',
        'node-operators/connecting-to-the-network',
        'node-operators/connecting-to-devnet',
        'node-operators/staking-and-snarking',
        'node-operators/hot-cold-block-production',
        'node-operators/seed-peers',
        'node-operators/staking-service-guidelines',
        'node-operators/mina-signer',
        {
          type: 'category',
          label: 'Data and History',
          items: [
            'node-operators/querying-data',
            'node-operators/archive-node',
            'node-operators/archive-redundancy',
            'node-operators/rosetta',
          ],
        },
        'node-operators/mina-cli-reference',
        'node-operators/troubleshooting',
        'node-operators/faq',
      ],
    },
    {
      type: 'category',
      label: 'Node Developers',
      items: [
        'node-developers/index',
        'node-developers/codebase-overview',
        'node-developers/repository-structure',
        'node-developers/bip44',
        'node-developers/code-review-guidelines',
        'node-developers/style-guide',
        'node-developers/sandbox-node',
        'node-developers/graphql-api',
        'node-developers/contributing',
        'node-developers/logging',
      ],
    },
    {
      type: 'category',
      label: 'Exchange Operators',
      items: [
        {
          type: 'category',
          label: 'Rosetta API',
          link: {
            type: 'doc',
            id: 'exchange-operators/rosetta/index',
          },
          items: [
            'exchange-operators/rosetta/run-with-docker',
            'exchange-operators/rosetta/build-from-sources',
            'exchange-operators/rosetta/send-requests',
            {
              type: 'category',
              label: 'Code Samples',
              link: {
                type: 'doc',
                id: 'exchange-operators/rosetta/samples/index',
              },
              items: [
                'exchange-operators/rosetta/samples/requests',
                'exchange-operators/rosetta/samples/using-signer',
                'exchange-operators/rosetta/samples/scan-blocks',
                'exchange-operators/rosetta/samples/track-deposits',
                'exchange-operators/rosetta/samples/send-transactions',
              ],
            },
          ],
        },
        'exchange-operators/faq',
      ],
    },
    {
      type: 'category',
      label: 'Testworld Mission 2.0',
      items: [
        'test-world-2/node-operator-responsibilities',
        'test-world-2/technical-requirements',
        'test-world-2/test-plan',
        'test-world-2/timelines',
        'test-world-2/incentives',
        'test-world-2/bug-reporting',
        'test-world-2/launching-a-node',
        'test-world-2/questions',
      ],
    },
    {
      type: 'category',
      label: 'Participate',
      items: [
        'participate/online-communities',
        'participate/office-hours',
        'participate/grants-and-programs',
        'participate/careers',
        'participate/github',
        'participate/bugs-and-feature-requests',
      ],
    },
    'glossary',
  ],
};
