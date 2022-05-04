/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.ggirhr.com",
  generateRobotsTxt: true, // (optional)
  sitemapSize: 20000,
};
