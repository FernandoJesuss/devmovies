export default {
  site: 'http://localhost:5173/',
  scanner: {
    maxRoutes: 50,
    sitemap: true,
    robotsTxt: true
  },
  lighthouseOptions: {
    onlyCategories: ['performance', 'accessibility', 'seo']
  },
  puppeteerOptions: {
    args: ['--no-sandbox']
  }
}