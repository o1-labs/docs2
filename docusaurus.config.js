require("dotenv").config();
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const math = require("remark-math");
const katex = require("rehype-katex");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Mina Documentation",
    tagline: "Website for documentation about Mina Protocol",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "o1-labs",
    projectName: "docs2",

    i18n: {
      defaultLocale: "en",
      locales: ["en", "fr", "ru"],
    },

    plugins: [
      "docusaurus-plugin-sass", 
      ["@docusaurus/plugin-client-redirects", { redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            to: '/node-operators/scan-state',
            from: '/architecture/scan-state',
          },
          {
            to: '/zkapps/overview',
            from: '/zkapps',
          },
          {
            to: '/zkapps/overview',
            from: '/architecture/snapps',
          },
          {
            to: '/about-mina/consensus',
            from: '/architecture/consensus',
          },
          {
            to: '/node-operators/snark-workers',
            from: '/architecture/snark-workers',
          },
          {
            to: '/node-operators/timelock',
            from: '/architecture/timelock',
          },
          {
            to: '/zkapps/overview',
            from: '/architecture/snapps',
          },
          {
            to: '/node-operators/getting-started',
            from: '/architecture',
          },
          {
            to: '/node-operators/getting-started',
            from: '/advanced',
          },
          {
            to: '/node-operators/getting-started',
            from: '/node-operators',
          },
          {
            to: '/node-developers/contributing',
            from: '/contributing',
          },
          {
            to: '/node-operators/keypair',
            from: '/keypair',
          },
          {
            to: '/node-operators/connecting',
            from: '/connecting',
          },
          {
            to: '/node-operators/staking',
            from: '/staking',
          },
          {
            to: '/node-operators/cli-reference',
            from: '/cli-reference',
          },
          {
            to: '/node-operators/staking-service-guidelines',
            from: '/advanced/staking-service-guidelines',
          },
          {
            to: '/node-operators/staking',
            from: '/advanced/using-mina/staking',
          },
          {
            to: '/participate/bugs-and-feature-requests',
            from: '/participate/reporting',
          },
          {
            to: '/mina-glossary',
            from: '/glossary',
          },


          // // Redirect from multiple old paths to the new path
          // {
          //   to: '/docs/newDoc2',
          //   from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
          // },
          ],
        createRedirects(existingPath) {
          if (existingPath.includes('/snapps')) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [
              existingPath.replace('/zkapps', '/snapps'),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
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
          theme: darkCodeTheme,
          darkTheme: darkCodeTheme,
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
