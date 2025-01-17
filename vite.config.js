import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom'] // Add more dependencies if needed
    }
  },
  test: {
    environment: 'jsdom'
  }
})
