import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom', 
    setupFiles: './vitest.setup.js',
    globals: true, 
  }
})