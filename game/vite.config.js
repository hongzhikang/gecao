import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: '/game/',
  publicDir: 'public',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
});
