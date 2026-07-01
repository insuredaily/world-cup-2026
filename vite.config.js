import { defineConfig } from 'vite';

export default defineConfig({
  // Use relative paths for assets so the deployment works on any subdirectory (like GitHub Pages)
  base: './',
  server: {
    port: 5173,
    host: '0.0.0.0'
  }
});
