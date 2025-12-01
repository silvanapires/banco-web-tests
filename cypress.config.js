const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  baseUrl: 'http://localhost:4000',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
