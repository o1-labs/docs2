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
            customCss: require.resolve("./src/css/custom.css"),
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
            src: "img/mina-logo.svg",
            href: "https://minaprotocol.com",
          },
          items: [
            {
              label: "Docs",
              to: "/",
              position: "left",
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
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Introduction",
                  to: "/",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Discord",
                  href: "https://bit.ly/MinaDiscord",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/minaprotocol",
                },
                {
                  label: "Forums",
                  href: "https://forums.minaprotocol.com",
                },
                {
                  label: "Telegram",
                  href: "https://bit.ly/MinaTelegram",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "Blog",
                  to: "https://minaprotocol.com/blog",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/MinaProtocol/mina",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Mina Foundation.`,
        },

        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
        algolia: {
          appId: process.env.ALGOLIA_APP_ID,
          apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
          indexName: "mina",
        },
      }),
  }
);
