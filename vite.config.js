import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    rollupOptions: {
      external: [], // Remove the externals
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'lucide-react', 'framer-motion']
        }
      }
    }
  },
  test: {
    environment: 'jsdom'
  }
})