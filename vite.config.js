import { defineConfig } from 'vite';

// Vite configuration
export default defineConfig({
  server: {
    open: false,  // Do not automatically open the browser
    port: 8080,   // Set server port
    hot: true,    // Enable hot module replacement (HMR)
  },
});

