import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    //MONGODB_URI: 'mongodb://localhost:27017/nestjs',
    APP_API_KEY: "****",
    SITE_TITLE: "The restaurant title",
    support_email: "support@site.com",
    support_phone: "+98911*******",
    address: "Road-01, Block-B, Rasht City",
    work_hours: "9.00 am to 10.00 pm",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
