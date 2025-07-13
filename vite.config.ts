// Option 1: Explicitly set output to 'build' folder
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Force Vite to output to 'build'
    emptyOutDir: true
  }
})