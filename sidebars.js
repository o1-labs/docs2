module.exports = {
  docs: [
    "intro",
    {
      type: "category",
      label: "About Mina",
      items: [
        "about-mina/overview",
        "about-mina/snarks",
        "about-mina/protocol-architecture",
        "about-mina/consensus-model",
        "about-mina/smart-contracts",
        {
          type: "category",
          label: "Advanced",
          items: [
            "about-mina/Advanced/cryptographers",
          ],
        },
        "about-mina/faq",
        {
          type: 'link',
          label: 'Whitepaper', // The link label
          href: 'https://minaprotocol.com/wp-content/uploads/economicsWhitepaper.pdf', // The external URL
        },
      ],
    },
    {
      type: "category",
      label: "Using Mina",
      items: [
        "using-mina/install-wallet",
        "using-mina/where-to-buy-mina",
        "using-mina/how-to-send",
        "using-mina/how-to-use-snapp",
        "using-mina/how-to-stake-delegate",
      ],
    },
    {
      type: "category",
      label: "Node Operators",
      items: [
        "node-operators/overview",
        "node-operators/how-to-run-node",
        "node-operators/block-production",
        "node-operators/snarking",
        {
          type: "category",
          label: "Archive Node Operators",
          items: [
            "node-operators/archive-node-operators/overview",
            "node-operators/archive-node-operators/how-to-run-archive-node",
            "node-operators/archive-node-operators/archive-node-redundancy",
            "node-operators/archive-node-operators/backing-up-and-restoring-block-data",
            "node-operators/archive-node-operators/how-to-query-data",
            "node-operators/archive-node-operators/troubleshooting",
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
      ],
    },
    "mina-faq",
    "exchange-faq",
    "mina-glossary",
    "troubleshooting",
    "image-example",
  ],
};
