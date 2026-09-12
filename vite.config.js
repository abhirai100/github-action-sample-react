
/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,            // Allows using 'describe', 'test', 'expect' without importing them
    environment: 'jsdom',    // Mimics a browser environment in Node.js
    setupFiles: './src/test/setup.js', // Global setup file for custom matchers (created next)
  },
})
