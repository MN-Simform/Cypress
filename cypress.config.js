const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    blockHosts: ['www.google-analytics.com',
      'js.zohocdn.com',
      'salesiq.zoho.com',
      'salesiq.zohopublic.com',
      'ws.zoominfo.com',
      'script.crazyegg.com',
      'js.zi-scripts.com',
    ],
    specPattern: 'cypress/intigration/*.js',
    chromeWebSecurity: false,
    video: true
  },
});
