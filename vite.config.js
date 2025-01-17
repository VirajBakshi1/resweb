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
        'framer-motion'
      ],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          'lucide-react': 'lucide',
          'framer-motion': 'framerMotion'
        }
      }
    }
  },
  resolve: {
    alias: {
      'react': 'react',
      'react-dom': 'react-dom'
    }
  },
  test: {
    environment: 'jsdom'
  }
})