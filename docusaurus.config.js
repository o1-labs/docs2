require("dotenv").config();

const math = require("remark-math");
const katex = require("rehype-katex");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Mina Documentation",
    tagline: "Website for documentation about Mina Protocol",
    url: "https://docs.minaprotocol.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "o1-labs",
    projectName: "docs2",
    trailingSlash: false,

    i18n: {
      defaultLocale: "en",
      locales: ["en"],
    },

    plugins: [
      "docusaurus-plugin-sass",
      [
        "@docusaurus/plugin-client-redirects",
        {
          redirects: [
            {
              from: "/about-mina/overview",
              to: "/about-mina",
            },
            {
              from: "/architecture/scan-state",
              to: "/node-operators/scan-state",
            },
            {
              from: "/architecture/snapps",
              to: "/zkapps",
            },
            {
              from: "/snapps",
              to: "/zkapps",
            },
            {
              from: "/node-developers/code-reviews",
              to: "/node-developers/code-review-guidelines",
            },
            {
              from: "/architecture/consensus",
              to: "/about-mina/consensus",
            },
            {
              from: "/zkapps/tutorials",
              to: "/zkapps/tutorials/hello-world",
            },
            {
              from: "/zkapps/simple-anonymous-message-board-tutorial",
              to: "/zkapps/tutorials/anonymous-message-board",
            },
            {
              from: "/architecture/snark-workers",
              to: "/node-operators/snark-workers",
            },
            {
              from: "/architecture/timelock",
              to: "/node-operators/time-locked-accounts",
            },
            {
              from: "/architecture",
              to: "/node-operators/getting-started",
            },
            {
              from: "/node-operators",
              to: "/node-operators/getting-started",
            },
            {
              from: "/advanced",
              to: "/node-operators/getting-started",
            },
            {
              from: "/node-operators/delegation",
              to: "/node-operators/foundation-delegation-program",
            },
            {
              from: "/contributing",
              to: "/node-developers/contributing",
            },
            {
              from: "/node-developers/directory-structure",
              to: "/node-developers/repository-structure",
            },
            {
              from: "/node-developers/bip44-information",
              to: "/node-developers/bip44",
            },
            {
              from: "/keypair",
              to: "/node-operators/generating-a-keypair",
            },
            {
              from: "/connecting",
              to: "/node-operators/connecting-to-the-network",
            },
            {
              from: "/staking",
              to: "/node-operators/staking-and-snarking",
            },
            {
              from: "/cli-reference",
              to: "/node-operators/mina-cli-reference",
            },
            {
              from: "/advanced/staking-service-guidelines",
              to: "/node-operators/staking-service-guidelines",
            },
            {
              from: "/advanced/using-mina/staking",
              to: "/node-operators/staking-and-snarking",
            },
            {
              from: "/participate/reporting",
              to: "/participate/bugs-and-feature-requests",
            },
            {
              from: "/mina-glossary",
              to: "/glossary",
            },
            {
              from: "/node-operators/operating-for-data",
              to: "/node-operators/querying-data",
            },
            {
              from: "/node-operators/cli-reference",
              to: "/node-operators/mina-cli-reference",
            },
            {
              from: "/node-operators/uptime-system",
              to: "/node-operators/uptime-tracking-system",
            },
            {
              from: "/node-operators/connecting-devnet",
              to: "/node-operators/connecting-to-devnet",
            },
            {
              from: "/node-operators/hardfork",
              to: "/node-operators/hardforks",
            },
            {
              from: "/node-operators/ledger-app-mina",
              to: "/node-operators/ledger-hardware-wallet",
            },
            {
              from: "/node-operators/timelock",
              to: "/node-operators/time-locked-accounts",
            },
            {
              from: "/node-operators/lifecycle-payment",
              to: "/node-operators/lifecycle-of-a-payment",
            },
            {
              from: "/node-operators/keypair",
              to: "/node-operators/generating-a-keypair",
            },
            {
              from: "/node-operators/connecting",
              to: "/node-operators/connecting-to-the-network",
            },
            {
              from: "/node-operators/send-payment",
              to: "/node-operators/sending-a-payment",
            },
            {
              from: "/node-operators/staking",
              to: "/node-operators/staking-and-snarking",
            },
            {
              from: "/exchange-operators/exchange-faq",
              to: "/exchange-operators/faq",
            },
          ],
        },
      ],
    ],

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            path: "./docs",
            routeBasePath: "/",
            sidebarPath: require.resolve("./sidebars.js"),
            editUrl: "https://github.com/o1-labs/docs2/edit/main",
            remarkPlugins: [math],
            rehypePlugins: [katex],
          },
          theme: {
            customCss: [require.resolve("./src/scss/custom.scss")],
          },
          gtag: {
            trackingID: 'GTM-MJBCZX9',
          },
        }),
      ],
    ],

    stylesheets: [
      {
        href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
        type: "text/css",
        integrity:
          "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
        crossorigin: "anonymous",
      },
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          logo: {
            alt: "Mina Logo",
            src: "svg/common/mina_logo.svg",
            href: "/",
          },
          items: [
            {
              type: "html",
              position: "left",
              className: "navbar-docs-copy",
              value: `<a href="/"><h3 style="margin:0">Docs</h3></a>`,
            },

            {
              type: "search",
              position: "left",
            },
            {
              type: "html",
              position: "right",
              value: `<a href="https://github.com/MinaProtocol/mina"><img class="navbar-icon" src="/svg/socials/github_24x24.svg"/></a>`,
            },
            {
              type: "html",
              position: "right",
              value: `<a href="https://bit.ly/MinaDiscord"><img class="navbar-icon" src="/svg/socials/discord_dark_24x24.svg"/></a>`,
            },
          ],
        },

        docs: {
          sidebar: {
            autoCollapseCategories: true,
          },
        },

        prism: {
          theme: require("prism-react-renderer/themes/oceanicNext"),
        },

        colorMode: {
          defaultMode: "light",
          disableSwitch: true,
          respectPrefersColorScheme: false,
        },

        algolia: {
          appId: process.env.ALGOLIA_APP_ID,
          apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
          indexName: "mina",
          contextualSearch: false,
        },
      }),
  }
);
