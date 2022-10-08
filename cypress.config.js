const { defineConfig } = require("cypress");
//make sure to import first cucumber
const cucumber = require('cypress-cucumber-preprocessor').default

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
      //2nd step after installation of cucumber  load here 
      on('file:preprocessor', cucumber())
    },
   // specPattern: 'cypress/integration/examples/*.js',
   specPattern: 'cypress/integration/examples/BDD/*.feature',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots'
  },
});
