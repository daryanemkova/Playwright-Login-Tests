const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  expect: {
    timeout: 10000,
  },
  globalTimeout: 480 * 60 * 1000, // timeout for the whole test run
  timeout: 480 * 60 * 1000, // each test timeout
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 3 : 3,
  workers: process.env.CI ? 10 : 10,
  reporter: [['html', { open: 'never' }]],
  use: {
    // To maximize a browser window in local runs
    viewport: null,
    headless: false,
    launchOptions: {
      args: ["--start-maximized"],
    },
    actionTimeout: 15 * 1000,
    navigationTimeout: 60 * 1000,
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'Google Chrome',
      use: { channel: 'chrome' },
    },
  ],
});