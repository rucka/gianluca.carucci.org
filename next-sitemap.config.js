/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://gianluca.carucci.org',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/en', '/l', '/q', '/l/*', '/q/*', '/conferma', '/sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/en', '/l', '/q', '/l/*', '/q/*', '/conferma']
      }
    ]
  }
}

module.exports = config
