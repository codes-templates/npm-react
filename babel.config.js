module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        modules: false, // preserve ES modules.
        corejs: { version: 3, proposals: true },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    // https://babel.dev/docs/en/babel-plugin-transform-react-jsx
    [
      '@babel/plugin-transform-react-jsx',
      {
        // runtime: 'automatic',
      },
    ]
  ],
  exclude: [/core-js/],
};
