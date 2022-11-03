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
        'using-mina/how-to-send-and-receive',
        'using-mina/how-to-delegate',
      ],
    },
    {
      type: 'category',
      label: 'zkApp Developers',
      items: [
        'zkapps/index',
        'zkapps/how-zkapps-work',
        'zkapps/how-to-write-a-zkapp',
        'zkapps/how-to-test-a-zkapp',
        'zkapps/how-to-deploy-a-zkapp',
        'zkapps/how-to-write-a-zkapp-ui',
        {
          type: 'category',
          label: 'Advanced SnarkyJS',
          items: [
            "zkapps/advanced-snarkyjs/on-chain-values",
            "zkapps/advanced-snarkyjs/events",
            "zkapps/advanced-snarkyjs/recursion",
            "zkapps/advanced-snarkyjs/custom-tokens",
            "zkapps/advanced-snarkyjs/actions-and-reducer",
            "zkapps/advanced-snarkyjs/merkle-tree",
          ],
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            "zkapps/tutorials/hello-world",
            "zkapps/tutorials/private-inputs-hash-functions",
            "zkapps/tutorials/deploying-to-a-network",
            "zkapps/tutorials/in-browser-react-ui",
            "zkapps/tutorials/anonymous-message-board",
          ],
        },
        'zkapps/zkapps-for-ethereum-developers',
        {
          type: 'category',
          label: 'SnarkyJS Reference',
          items: [
            {
              type: 'doc',
              id: 'zkapps/snarkyjs-reference/README',
              label: 'Overview',
            },
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/AccountUpdate',
                  label: 'AccountUpdate',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Bool',
                  label: 'Bool',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Character',
                  label: 'Character',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Circuit',
                  label: 'Circuit',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/CircuitString',
                  label: 'CircuitString',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/CircuitValue',
                  label: 'CircuitValue',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Field',
                  label: 'Field',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Group',
                  label: 'Group',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Int64',
                  label: 'Int64',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Keypair',
                  label: 'Keypair',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Ledger',
                  label: 'Ledger',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/PrivateKey',
                  label: 'PrivateKey',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Proof',
                  label: 'Proof',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Scalar',
                  label: 'Scalar',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/SelfProof',
                  label: 'SelfProof',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Sign',
                  label: 'Sign',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Signature',
                  label: 'Signature',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/SmartContract',
                  label: 'SmartContract',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Token',
                  label: 'Token',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Types.PublicKey',
                  label: 'Types.PublicKey',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/UInt32',
                  label: 'UInt32',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/UInt64',
                  label: 'UInt64',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/VerificationKey',
                  label: 'VerificationKey',
                },
              ],
            },
            {
              type: 'category',
              label: 'Interfaces',
              items: [
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/interfaces/AsFieldElements',
                  label: 'AsFieldElements',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/interfaces/Permissions',
                  label: 'Permissions',
                },
              ],
            },
            {
              type: 'category',
              label: 'Modules',
              items: [
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/modules/Encoding',
                  label: 'Encoding',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/modules/Encryption',
                  label: 'Encryption',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/modules/Experimental',
                  label: 'Experimental',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/modules/Mina',
                  label: 'Mina',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/modules/Types.Json',
                  label: 'Types.Json',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/modules/Types',
                  label: 'Types',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Node Operators',
      items: [
        'node-operators/getting-started',
        'node-operators/archive-node',
        'node-operators/archive-redundancy',
        'node-operators/foundation-delegation-program',
        'node-operators/delegation-tiebreak',
        'node-operators/bp-sidecar',
        'node-operators/uptime-tracking-system',
        'node-operators/client-sdk',
        'node-operators/querying-data',
        'node-operators/connecting-to-devnet',
        'node-operators/hardforks',
        'node-operators/hot-cold-block-production',
        'node-operators/ledger-hardware-wallet',
        'node-operators/rosetta',
        'node-operators/proof-of-stake',
        'node-operators/snark-workers',
        'node-operators/scan-state',
        'node-operators/time-locked-accounts',
        'node-operators/block-producers',
        'node-operators/whats-in-a-block',
        'node-operators/lifecycle-of-a-payment',
        'node-operators/seed-peers',
        'node-operators/staking-service-guidelines',
        'node-operators/troubleshooting',
        'node-operators/faq',
        'node-operators/generating-a-keypair',
        'node-operators/connecting-to-the-network',
        'node-operators/sending-a-payment',
        'node-operators/staking-and-snarking',
        'node-operators/mina-cli-reference',
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
        'node-developers/client-sdk',
        'node-developers/contributing',
        'node-developers/logging',
      ],
    },
    {
      type: 'category',
      label: 'Exchange Operators',
      items: ['exchange-operators/faq'],
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
