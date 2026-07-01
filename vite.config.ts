import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // <-- 1. Importamos el plugin de Tailwind v4

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- 2. Lo agregamos a la lista de plugins de Vite
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    // Eliminamos rollupOptions y manualChunks para que Vite maneje todo automáticamente sin errores
  },
});