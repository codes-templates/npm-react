# README

- ✈️ Project init with [vite](https://vitejs.dev/)
- 🪖 [Github Actions](https://docs.github.com/cn/actions) support (Auto CI / Auto Release when add a tag / Auto Deploy)
- 🍕 Build npm package with [tsup](https://tsup.egoist.sh/)
- 🍭 Built-in react dev environment

  > [playground](./playground/vite.config.ts) folder
  >
  > start --> ```npm run dev```

- 🍔 Use [browserslistrc](./.browserslistrc)
- 🪗 Build styles with [postcss](./postcss.config.js) ([postcss-nested](https://www.npmjs.com/package/postcss-nested)/ [autoprefixer](https://www.npmjs.com/package/autoprefixer) / [cssnano](https://cssnano.co/docs/getting-started/))
- 🌭 [Stylelint](https://stylelint.io/) that helps you avoid errors and enforce conventions in your styles.
- 🍟 [Mono repo with npm](https://dev.to/ynwd/how-to-create-react-monorepo-with-npm-workspace-webpack-and-create-react-app-2dhn)
- 🎉 [TypeScript](https://www.typescriptlang.org/), of course
- 🎄 Unit Testing with [Vitest](https://vitest.dev/)
- 🏑 [Storybook](https://storybook.js.org/) for building UI components and pages
- 🧆 [ESLint](https://eslint.org/) statically analyzes your code to quickly find problems.
- 🛸 Deploy on [Netlify](https://www.netlify.com/), zero-config
- 🥳 [MIT License](https://mit-license.org/)

## how to use

replace ```my-pkg-custom-name``` with your package name


## Directory structure

```js
Project
├── __tests__           # Unit Testing
├── babel.config.js     # babel config
├── package.json
├── playground          # dev environment folder (can use source code)
│   ├── index.html
│   ├── package.json
│   ├── public
│   ├── src
│   ├── tsconfig.json
│   ├── vite-env.d.ts
│   └── vite.config.ts
├── postcss.config.js  # build styles with postcss
├── src                # Package source code
│   ├── index.ts       # Package source entry
│   ├── stories        # storybook for building UI components and pages
│   ├── styles         # styles for Package
│   └── types.ts       # ts type declaration for Package
├── tsconfig.json      # ts config
└── tsup.config.ts     # build package with tsup
```

## how to add NPM_TOKEN

1. [create npm token](https://docs.npmjs.com/creating-and-viewing-access-tokens)
2. then copy npm token, add to github project settings

     - project -> settings -> secrets -> actions

## how to add GITHUB_TOKEN

- [add GITHUB_TOKEN](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)


