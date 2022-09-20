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
        "zkapps/overview",
        "zkapps/how-zkapps-work",
        "zkapps/how-to-write-zkapp",
        "zkapps/how-to-test-zkapp",
        "zkapps/how-to-deploy-zkapp",
        "zkapps/how-to-write-zkapp-ui",
        "zkapps/advanced-snarkyjs",
        {
          type: "category",
          label: "Step-by-Step Tutorials",
          items: [
            "zkapps/tutorial-anon-message-board",
          ],
        },
        "zkapps/zkapps-for-ethereum",
        "zkapps/snarkyjs-reference",
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
      label: "Node Developers",
      items: [
        "node-developers/overview",
      ],
    },
    {
      type: "category",
      label: "Participate",
      items: [
        "participate/grants-and-programs",
        "participate/online-communities",
        "participate/careers",
        "participate/github",
        "participate/bug-bounty-program",
      ],
    },
    "mina-glossary",
  ],
};
