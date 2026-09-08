import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: '127.0.0.1',
    strictPort: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
  },
  publicDir: 'public',
})
