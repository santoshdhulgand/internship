import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Explicitly set output directory to 'build'
    emptyOutDir: true, // Clear the directory before building
  },
  server: {
    open: true, // Optional: open browser on dev server start
  }
});