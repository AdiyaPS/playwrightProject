const { defineConfig } = require('@playwright/test');
require('dotenv').config();
const config = defineConfig({

  testDir: './tests',
  workers: 2,
  timeout: 60 * 1000,
  expect: {
    timeout: 10000,
  },

  reporter: [
    ['html'],
    ['allure-playwright']
  ],

  use: {
    channel: 'chrome',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'on',
    slowMo: 2000,
    video : 'retain-on-failure'
  }
});

module.exports = config;