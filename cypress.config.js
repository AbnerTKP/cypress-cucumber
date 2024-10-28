const cucumber = require("cypress-cucumber-preprocessor").default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920, 
  viewportHeight: 1080, 
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber())
    },
    supportFile: false,
    specPattern: 'cypress/e2e/step_definitions/**/*.feature',
  },
});
