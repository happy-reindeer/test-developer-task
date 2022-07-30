const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/#/',
    setupNodeEvents(on, config) {
        // bind to the event we care about
        on('file:preprocessor', cucumber())
    },
    video: false,
    specPattern: "cypress/integration/*.feature"
  }
})