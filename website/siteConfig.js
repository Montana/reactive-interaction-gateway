// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [{
  caption: 'Accenture',
  // You will need to prepend the image path with your baseUrl
  // if it is not '/', like: '/test-site/img/docusaurus.svg'.
  image: '/img/docusaurus.svg',
  infoLink: 'https://www.accenture.com',
  pinned: true,
}, ];

const siteConfig = {
  title: 'Reactive Interaction Gateway',
  tagline: 'Your UI deserves an API, too!',
  url: 'https://accenture.github.io',
  baseUrl: '/reactive-interaction-gateway/',
  projectName: 'reactive-interaction-gateway',
  organizationName: 'Accenture',
  headerLinks: [{
      doc: 'intro',
      label: 'Docs'
    },
    {
      page: 'help',
      label: 'Help'
    },
    {
      blog: true,
      label: 'Blog'
    },
  ],

  users,

  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',

  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: 'Copyright © ' +
    new Date().getFullYear() +
    ' Accenture',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
