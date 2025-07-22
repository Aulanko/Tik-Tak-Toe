import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom', // lighter than jsdom
    setupFiles: './vitest.setup.js',
    globals: true, // so we don't need to import `describe`, `test`, etc.
  }
})