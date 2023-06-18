// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BRC721 Docs",
  tagline: "Ordinals Collection Protocol documentation",
  // favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.brc721.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "d3vx-com", // Usually your GitHub org/user name.
  projectName: "brc721-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: "G-CVWHWCW3CE",
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/d3vx-com/brc721-docs/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: "openapi/openapi.yaml",
            route: "/api/",
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#1890ff",
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "twitter:title",
          content: "BRC721 Docs",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "og:description",
          content: "BRC721 documentation",
        },

        {
          name: "og:image",
          content: "https://docs.brc721.com/img/embed.png",
        },
        {
          name: "twitter:creator",
          content: "@BRC_721",
        },
        {
          name: "twitter:site",
          content: "@BRC_721",
        },
        {
          name: "twitter:domain",
          content: "https://docs.brc721.com",
        },
      ],

      // Replace with your project's social card
      // image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "BRC721 Docs",
        logo: {
          alt: "BRC721 Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Learn",
          },
          {
            to: "/docs/category/tutorials",
            position: "left",
            label: "Tutorials",
          },
          {
            to: "/docs/specification",
            position: "left",
            label: "Specification",
          },
          {
            to: "/api",
            position: "left",
            label: "API",
          },
          {
            href: "https://github.com/d3vx-com/brc721-docs",
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
                label: "Overview",
                to: "/docs/overview",
              },
              {
                label: "Tutorials",
                to: "/docs/category/tutorials",
              },
              {
                label: "Specification",
                to: "/docs/specification",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Dune",
                href: "https://dune.com/otterolie/brc721",
              },
              {
                label: "Discord",
                href: "http://discord.com/invite/brc721",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/brc_721",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Terms of Service",
                to: "/terms",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
