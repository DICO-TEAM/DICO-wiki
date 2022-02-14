// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DICO wiki',
  tagline: 'ICO platform for decentralized auto organization',
  url: 'https://wiki.dico.io/',
  baseUrl: '/DICO-wiki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DICO FOUNDATION LTD.', // Usually your GitHub org/user name.
  projectName: 'DICO wiki', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/DICO-TEAM/DICO-wiki/edit/master/',
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
      navbar: {
        title: 'DICO wiki',
        logo: {
          alt: 'DICO Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'DICO-Lite-user-manual',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/DICO-TEAM/DICO-wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/DICO-Lite-user-manual',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/V2MASPX3Ra',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@DearICO',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/dicochain',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/DICO03279704',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/DICO-TEAM',
              },
            ],
          },
        ],
        copyright: `©2022 DICO FOUNDATION LTD. All rights reserved.`,
      },
      
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
