// https://stylelint.io/user-guide/get-started
// 执行npx stylelint src/**/*.css 进行校验

module.exports = {
  extends: [
    'stylelint-config-standard',
  ],
  rules: {
    'annotation-no-unknown': null,
    'at-rule-no-unknown': null,
    'keyframe-selector-notation': null,
    'keyframe-block-no-duplicate-selectors': null,
    'property-no-vendor-prefix': null,
    'declaration-colon-newline-after': null,
    'value-list-comma-newline-after': null,
    'custom-property-pattern': null,
    'color-hex-length': 'short',
    'color-function-notation': null,
    'alpha-value-notation': null,
    'value-no-vendor-prefix': null,
    'selector-class-pattern': null,
    'function-url-quotes': null,
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
  },
  overrides: [
    // 若项目中存在scss文件，添加以下配置
    {
      files: '**/*.scss',
      customSyntax: 'postcss-scss',
    },
  ],
};
