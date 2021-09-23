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
        "using-mina/set-up-a-wallet",
        "using-mina/where-to-buy-mina",
        "using-mina/how-to-send",
        "using-mina/how-to-use-snapps",
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
    {
      type: "category",
      label: "Archive Node Operators",
      items: [
        "archive-node-operators/overview",
        "archive-node-operators/how-to-run-archive-node",
        "archive-node-operators/archive-node-redundancy",
        "archive-node-operators/how-to-run-archive-node",
        "archive-node-operators/how-to-run-archive-node",
      ],
    },
    "mina-faq",
    "exchange-faq",
    "mina-glossary",
    "troubleshooting",
    "image-example",
  ],
};
