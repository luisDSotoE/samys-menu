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
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion', 'zustand'],
          ui: ['@mui/material', '@emotion/react', '@emotion/styled', 'lucide-react', 'react-icons'],
          swiper: ['swiper'],
        } as Record<string, string[]>,
      },
    },
  },
});