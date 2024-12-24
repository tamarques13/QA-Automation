const { defineConfig } = require("cypress");

const dotenv = require('dotenv');
dotenv.config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:{
    ...process.env
  },
  "watchForFileChanges": false,
  "defaultCommandTimeout": 4000
});
