const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pqwsud',
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  "reporter":"mochawesome",
  "reporterOptions":{
    "reportdir":"cypress/report/mochawesome-report",
    "overwrite":false,
    "html":true,
    "json": false,
    "timestamp":"mmddyyyy_HHMMss"
  },
  env: {
    url: 'https://rahulshettyacademy.com',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots'
  },
});
