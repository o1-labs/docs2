require("dotenv").config();
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

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
          },
          theme: {
            customCss: [require.resolve("./src/scss/custom.scss")],
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          logo: {
            alt: "Mina Logo",
            src: "svg/mina-logo.svg",
            href: "https://minaprotocol.com",
          },
          items: [
            {
              type: "html",
              position: "left",
              value: `<a href="/"><h3 style="margin:0">Documentation</h3></a>`,
            },
            {
              type: "localeDropdown",
              position: "right",
            },
            {
              href: "https://github.com/MinaProtocol/mina",
              label: "GitHub",
              position: "right",
            },
          ],
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
        },
      }),
  }
);
