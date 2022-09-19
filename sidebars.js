module.exports = {
  docs: [
    "welcome",
    {
      type: "category",
      label: "About Mina",
      items: [
        "about-mina/overview",
        "about-mina/zero-knowledge-proofs",
        "about-mina/protocol-architecture",
        "about-mina/consensus",
        "about-mina/faq",
        {
          type: "link",
          label: "Whitepaper", // The link label
          href: "https://minaprotocol.com/wp-content/uploads/economicsWhitepaper.pdf", // The external URL
        },
      ],
    },
    {
      type: "category",
      label: "Using Mina",
      items: ["using-mina/install-wallet"],
    },
    {
      type: "category",
      label: "zkApp Developers",
      items: [
        "zkapp-developers/overview",
        "zkapp-developers/how-zkapps-work",
        "zkapp-developers/how-to-write-zkapp",
        "zkapp-developers/how-to-test-zkapp",
        "zkapp-developers/how-to-deploy-zkapp",
        "zkapp-developers/how-to-write-zkapp-ui",
        "zkapp-developers/advanced-snarkyjs",
        "zkapp-developers/tutorial-anon-message-board",
        "zkapp-developers/zkapps-for-ethereum",
        "zkapp-developers/snarkyjs-reference",
      ],
    },
    {
      type: "category",
      label: "Node Operators",
      items: [
        "node-operators/overview",
        {
          type: "category",
          label: "Installation",
          items: [
            "node-operators/how-to-install-a-node/step-by-step",
            "node-operators/how-to-install-a-node/docker",
          ],
        },
        {
          type: "category",
          label: "Block Production (Staking)",
          items: [
            "node-operators/block-production/overview",
            "node-operators/block-production/faq",
            "node-operators/block-production/foundation-delegation-program",
          ],
        },
        "node-operators/snarking",
        {
          type: "category",
          label: "Archive Node",
          items: [
            "node-operators/archive-node/overview",
            "node-operators/archive-node/how-to-run-archive-node",
            "node-operators/archive-node/redundancy",
            "node-operators/archive-node/backing-up-and-restoring-block-data",
            "node-operators/archive-node/how-to-query-data",
            "node-operators/archive-node/troubleshooting",
          ],
        },
        {
          type: "category",
          label: "Developer References",
          items: [
            "node-operators/Developer-References/mina-node-cli-reference",
            "node-operators/Developer-References/graphql-api",
            "node-operators/Developer-References/javascript-client",
          ],
        },
        "node-operators/troubleshooting",
        "node-operators/connecting-devnet",
        "node-operators/ledger-app-mina",
        "node-operators/cli-reference"
      ],
    },

    {
      type: "category",
      label: "Exchange Operators",
      items: ["exchange-operators/exchange-faq"],
    },
    {
      type: "category",
      label: "Participate",
      items: [
        "participate/social-media",
        "participate/github",
        "participate/careers",
        "participate/grants",
        "participate/testnet-leaderboard",
        "participate/bug-bounty-program",
      ],
    },
    "mina-glossary",
  ],
};
