const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return {
        baseUrl: 'https://seubarriga.wcaquino.me/'
      }
    },
  },
});
