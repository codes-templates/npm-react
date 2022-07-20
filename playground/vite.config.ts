/// <reference types="vite/client" />

import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
      '#/': `${path.resolve(__dirname, '../dist')}/`,
      'custom-package-name': path.resolve(__dirname, '../src'),
    },
  },
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
  ],
});
