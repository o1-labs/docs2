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
    favicon: "img/favicon.ico",
    organizationName: "o1-labs",
    projectName: "docs2",

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl: "https://github.com/o1-labs/docs2",
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl: "https://github.com/o1-labs/docs2/blog/",
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
          title: "Documentation",
          logo: {
            alt: "Mina Logo",
            src: "img/mina-logo.svg",
          },
          items: [
            {
              type: "doc",
              docId: "introduction",
              position: "left",
              label: "Docs",
            },
            {
              type: "doc",
              position: "left",
              docId: "examples/overview",
              label: "Examples",
            },
            { to: "/blog", label: "Blog", position: "left" },
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
                  to: "/docs/intro",
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
      }),
  }
);
