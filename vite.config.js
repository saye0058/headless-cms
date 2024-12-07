import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/wp-json': {
        target: 'https://dev-movie-reviews-cms.pantheonsite.io',
        changeOrigin: true,
        secure: false,
      }
    }
  }
});