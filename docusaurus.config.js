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
    favicon: "img/favicon.png",
    organizationName: "o1-labs",
    projectName: "docs2",

    i18n: {
      defaultLocale: "en",
      locales: ["en", "fr", "ru"],
    },

    plugins: ["docusaurus-plugin-sass"],

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
              value: `<a class="navbar-docs-copy" href="/"><h3 style="margin:0">Docs</h3></a>`,
            },
            {
              type: "html",
              position: "right",
              value: `<a href="https://github.com/MinaProtocol/mina"><img style="margin:0;padding-top:5px;width:28px;height:auto" src="/svg/socials/github_24x24.svg"/></a>`,
            },
          ],
        },

        docs: {
          sidebar: {
            autoCollapseCategories: true,
          },
        },

        prism: {
          theme: lightCodeTheme,
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
