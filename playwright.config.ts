import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'https://smb.aksanlabs.com',
    trace: 'on-first-retry',
  },
})
