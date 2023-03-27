// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {

  // ------ Site Metadata ------
  title: 'Code Samples Validation (Dashboard-v2)',
  url: 'https://cqa-sandbox.github.io',
  baseUrl: '/cqa-dashboard-app/',
  favicon: 'img/favicon.ico',

  // ------- Deployment Config -----
  organizationName: 'cqa-sandbox', 
  projectName: 'cqa-dashboard-app', 
  deploymentBranch: 'gh-pages',

  // ------- Custom Configurations ------
  customFields: {
    description: 
    "The Code Samples Validation project automates testing of target code samples repositories, with a centralized reporting dashboard for quick review of current status. For each target repo, we publish the `Latest Run` status (left) based on last commit, PR or manual workflow dispatch. And we maintain a 7-day history of `Nightly Tests` status (right) run on a predefined schedule."
  },

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Articles',
          postsPerPage: 1,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      navbar: {
        title: 'Dashboard',
        logo: {
          alt: 'Dashboard Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/mspnp/intern-js-pipeline',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Microsoft. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
