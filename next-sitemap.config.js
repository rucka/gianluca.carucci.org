/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://carucci.org',
  generateRobotsTxt: true,
  sitemapSize: 1000,
  exclude: ['/l', '/q', '/conferma', '/sitemap.xml']
}

module.exports = config
