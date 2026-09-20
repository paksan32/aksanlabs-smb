import { defineConfig } from '@playwright/test'

// Local server by default: every request a run makes against the deployed site
// is billed Vercel usage. E2E_BASE_URL can point elsewhere, but a production
// run is an explicit exception, not the default.
const baseURL = process.env.E2E_BASE_URL || 'http://localhost:3000'
const isLocal = /^https?:\/\/(localhost|127\.0\.0\.1)(:|\/|$)/.test(baseURL)

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  webServer: isLocal
    ? { command: 'npm run dev', url: baseURL, reuseExistingServer: true, timeout: 120_000 }
    : undefined,
})
