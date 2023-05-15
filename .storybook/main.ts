
import { mergeConfig } from 'vite';
import path from 'path';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: [
          ...(
            Object.entries({
              'custom-package-name': path.resolve(__dirname, '../src/index.ts'),
            }).map(([key, val]) => ({ find: key, replacement: val }))
          ),
        ],
      },
    });
  },
};
export default config;
