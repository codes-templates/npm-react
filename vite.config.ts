/// <reference types="vitest" />
/// <reference types="vite/client" />

import dts from 'vite-plugin-dts';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import browserslistToEsbuild from 'browserslist-to-esbuild';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import pkg from './package.json';

const resolvePath = (pathName: string) => path.resolve(__dirname, pathName);

// vite config can not read babel.config.js🤣🤣🤣
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    resolve: {
      alias: {
        'custom-package-name': resolvePath('./src/index.ts'),
        'custom-package-name/': resolvePath('../src/'),
      },
    },
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
        plugins: [
          // https://www.npmjs.com/package/@rollup/plugin-babel
          getBabelOutputPlugin({
            configFile: path.resolve(__dirname, '.babelrc'),
            filename: '.babelrc',
          }),
        ],
        output: {
          exports: 'named',
        },
        external: [
          ...Object.keys(pkg.dependencies), // if exist
          ...Object.keys(pkg.devDependencies),
          ...Object.keys(pkg.peerDependencies),
        ],
      },
    },
    plugins: [
      env?.NO_DTS !== '1'
        ?
        // https://www.npmjs.com/package/vite-plugin-dts
        dts({
          include: 'src',
          exclude: ['src/stories/**/**', '**/*.stories.tsx'],
          rollupTypes: true,
          afterBuild: () => {
            // do something else
          },
        })
      : null,
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
  };
});
