// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Official documentation', // Title for your website.
  tagline: 'HALO',
  url: 'https://web-halo.mobgen.com', // Your website URL
  baseUrl: '/',
  projectName: 'HALO',
  organizationName: 'MOBGEN | Accenture Interactive',
  algolia: {
    apiKey: 'my-api-key',
    indexName: 'my-index-name',
    algoliaOptions: {}, // Optional, if provided by Algolia,
    placeholder: 'Search in the docs'
  },
  headerLinks: [
    {doc: 'cms/cms_home', label: 'CMS docs'},
    {doc: 'android/android_home', label: 'Android docs'},
    {doc: 'ios/ios_home', label: 'iOS docs'},
    {doc: 'javascript/javascript_home', label: 'Javascript docs'},
    {doc: 'integrations/server_integrations_home', label: 'Server integrations'},
    {href: 'https://web-halo.mobgen.com/api/docs/', label: 'API'},
    {search: true},
  ],
  users,
  headerIcon: 'img/mobgen_logo_text.png',
  footerIcon: 'img/mobgen_logo_text.png',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#137cbd',
    secondaryColor: '#394b59'
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */
  copyright: `Copyright © ${new Date().getFullYear()} MOBGEN | Accenture Interactive`,
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },
  scripts: [
      'https://buttons.github.io/buttons.js'
  ],
  stylesheets: [
      'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      'https://fonts.googleapis.com/css?family=Raleway',
      'https://fonts.googleapis.com/css?family=Montserrat:400,700',
      'https://fonts.googleapis.com/css?family=Open+Sans'
  ],
  onPageNav: 'separate',
  cleanUrl: true,
  enableUpdateTime: true,
};

module.exports = siteConfig;
