import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3002,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        secure: false,
      },
    },
  },
 plugins: [
      tailwindcss(),
    ],
  optimizeDeps: {
    include: ['react', 'react-dom',],
  },
});
