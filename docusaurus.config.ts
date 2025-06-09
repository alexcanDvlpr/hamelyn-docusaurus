import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Hamelyn',
  tagline: 'La documentación de Hamelyn',
  favicon: 'img/favicon.ico',

  url: 'https://alexcanDvlpr.github.io',
  baseUrl: '/',

  organizationName: 'alexcanDvlpr', // Tu usuario de GitHub
  projectName: 'docusaurus-demo', // Nombre del repositorio
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/intro',
            from: ['/'],
          },
        ],
      },
    ],
  ],


  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        pages: false,
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Hamelyn',
      logo: {
        alt: 'Hamelyn Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/Marcostp98/docusaurus-demo',
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
              label: 'Introducción',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Marcostp98/docusaurus-demo',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hamelyn.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;