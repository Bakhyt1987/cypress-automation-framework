const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "g4p6er",
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: "cypress/e2e/other/*.js",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "https://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 12000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    videosFolder: "cypress/videos",
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "https://www.webdriveruniversity.com/",
      autostore_homepage: "https://automationteststore.com/",
    },
  },
});
