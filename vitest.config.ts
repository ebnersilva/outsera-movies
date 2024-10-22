import { configDefaults, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'
 
export default defineConfig({
  plugins: [react()],
  test: {
    alias: {
      '~': path.resolve(__dirname, "./")
    },
    exclude: [...configDefaults.exclude, 'next.config.mjs'],
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.js'],
  },
})