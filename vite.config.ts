import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
    // Otimizações para geração de páginas estáticas
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Gera arquivos estáticos otimizados
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
  },
  publicDir: 'public',
});
