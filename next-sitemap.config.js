/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.ggirhr.com",
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  priority: "0.8",
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: "/?*" }],
  },
};
