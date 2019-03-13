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
  title: 'HALO', // Title for your website.
  tagline: 'Official documentation',
  url: 'https://mobgen.github.io', // Your website URL
  baseUrl: '/halo-documentation/',
  projectName: 'halo-documentation',
  organizationName: 'mobgen',
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
    {searcharticlearticle: true},
  ],
  users,
  footerIcon: 'img/mobgen_logo_text.png',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#137cbd',
    secondaryColor: '#394b59'
  },
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
      'https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Raleway'
  ],
  onPageNav: 'separate',
  cleanUrl: true,
  enableUpdateTime: true,
};

module.exports = siteConfig;
