import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import react from '@vitejs/plugin-react'

export default defineConfig({
  test: {
    projects: [
      {
        plugins: [react()],
        test: {
          name: 'browser',
          include: ['**/*.browser.{test,spec}.{ts,tsx}'],
          browser: {
            enabled: true,
            provider: playwright(),
            instances: [{ browser: 'chromium' }],
            headless: true,
            screenshotFailures: true,
            ui: false
          },
          css: true,
          globals: true,
        },
      }
    ]
  },
})
