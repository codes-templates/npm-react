/**
 * https://www.npmjs.com/package/eslint-config-airbnb-typescript
 */
module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jsx-a11y/strict',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:storybook/recommended',
  ],
  env: {
    es6: true,
    browser: true,
  },
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 2020,
    useJSXTextNode: true,
    sourceType: 'module',
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect',
      flowVersion: '0.53',
    },
  },
  rules: {
    // react-hooks -> https://reactjs.org/docs/hooks-rules.html
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    // 代码风格
    'import/prefer-default-export': 'off',
    'default-param-last': 'off',
    'no-else-return': 'off',
    'import/extensions': 'off',
    'import/order': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default-member': 'off',
    'linebreak-style': 'off',
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'max-classes-per-file': 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'generator-star-spacing': 'off',
    'max-len': ['error', {
      'code': 130
    }],
    // typescript
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    // javascript
    'prefer-promise-reject-errors': 'off',
    'func-names': 'off',
    'no-bitwise': 'off',
    'no-plusplus': 'off',
    'prefer-template': 'off',
    'object-curly-newline': 'off',
    'no-param-reassign': 'off',
    'no-restricted-globals': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'no-useless-escape': 'off',
    'no-confusing-arrow': 'off',
    'no-new': 'off',
    'no-void': 'off',
    'prefer-rest-params': 'off',
    'no-async-promise-executor': 'off',
    'no-case-declarations': 'off',
    // jsx
    'jsx-a11y/aria-role': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/alt-text': 'off',
    // react
    'jsx-quotes': [2, 'prefer-double'],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-curly-newline': [2, {
      multiline: 'consistent'
    }],
    'react/jsx-max-props-per-line': [2, {
      maximum: 3
    }],
    'react/jsx-fragments': [2, 'syntax'],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/destructuring-assignment': [2, 'always'],
    'react/jsx-tag-spacing': [2, {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'allow'
    }],
    'react/jsx-closing-bracket-location': [2, 'line-aligned'],
    'react/jsx-boolean-value': [2, 'never'],
    'react/self-closing-comp': [2, {
      component: true,
      html: true
    }],
    'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
    'react/jsx-sort-props': [2, {
      callbacksLast: true
    }],
    'react/jsx-wrap-multilines': [2, {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      arrow: 'parens-new-line',
      prop: 'parens-new-line'
    }],
    'react/jsx-one-expression-per-line': 2,
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'arrow-parens': 'off',
    'react/sort-comp': 'off',
    'react/no-deprecated': 'off',
    'react/button-has-type': 'off',
    'react/prop-types': 'off',
    'arrow-body-style': 'off',
    'react/require-default-props': 'off',
    'react/no-array-index-key': 'off',
    'react/static-property-placement': 'off',
    'react/prefer-stateless-function': 'off',
    'react/state-in-constructor': 'off',
    'no-nested-ternary': 'off',
    'react/no-danger': 'off'
  }
};
