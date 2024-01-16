const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: "cypress/e2e/other/*.js",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "https://www.webdriveruniversity.com",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 12000,
    videosFolder: "cypress/videos",
    video: true,
    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "https://www.webdriveruniversity.com/",
    },
  },
});
