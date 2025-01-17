import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react', 
        'react-dom',
        'lucide-react',
        'framer-motion'  // Added this line
      ]
    }
  },
  test: {
    environment: 'jsdom'
  }
})