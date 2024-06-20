const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "tvstxc",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
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
