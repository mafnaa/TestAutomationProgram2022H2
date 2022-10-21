import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    baseUrl: 'https://intranet.ctco.lv',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      username: 'maxim.fominih',
      password: ''
    }
  },
});
