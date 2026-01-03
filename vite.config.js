// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  assetsInclude: ['**/*.json'],
  json: {
    stringify: false
  }
})