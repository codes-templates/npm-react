/// <reference types="vitest" />
/// <reference types="vite/client" />

import dts from 'vite-plugin-dts';
import path from 'path';
import { defineConfig } from 'vite';
import browserslistToEsbuild from 'browserslist-to-esbuild';

const resolvePath = (pathName: string) => path.resolve(__dirname, pathName);

// vite config can not read babel.config.js🤣🤣🤣
export default defineConfig({
  build: {
    minify: true,
    lib: {
      fileName: (type) => {
        if (type === 'es') return 'index.mjs';
        if (type === 'cjs') return 'index.js';
        return 'index.js';
      },
      entry: resolvePath('src/index.ts'),
      formats: ['es', 'cjs'],
    },
    target: browserslistToEsbuild(),
    sourcemap: false,
    rollupOptions: {
      external: [
        'react',
        'react-dom'
      ],
    },
  },
  plugins: [
    // https://www.npmjs.com/package/vite-plugin-dts
    dts({
      include: 'src',
      rollupTypes: true,
      afterBuild: () => {
        // do something else
      },
    }),
  ],
  // https://github.com/vitest-dev/vitest
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});
