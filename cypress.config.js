const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://www.webdriveruniversity.com/Contact-Us/',
    video: true,
    testIsolation: false,
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    requestTimeout: 180000,
    execTimeout: 60000,
    taskTimeout : 60000,
    responseTimeout: 180000,
    downloadsFolder : "cypress/downloads" ,
    fixturesFolder: "cypress/fixtures",
    retries: 	{ "runMode": 0, "openMode": 0 },
    viewportHeight: 960,
    viewportWidth: 1920,
  },
});


