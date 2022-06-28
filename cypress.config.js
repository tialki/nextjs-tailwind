const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/{e2e,integration}/**/*.{cy,spec}.{js,jsx,ts,tsx}",
  },
});
