# [`eslint-config`](https://github.com/arbetsmyra/eslint-config)

Arbetsmyra's [ESLint config](https://eslint.org/docs/developer-guide/shareable-configs)

[![latest git version](https://img.shields.io/github/v/tag/arbetsmyra/eslint-config?label=version)](https://github.com/arbetsmyra/eslint-config)
[![latest npm version](https://img.shields.io/npm/v/@arbetsmyra/eslint-config)](https://www.npmjs.com/package/@arbetsmyra/eslint-config)
[![license](https://img.shields.io/github/license/arbetsmyra/eslint-config)](https://github.com/arbetsmyra/eslint-config/blob/master/LICENSE)

## Installation

### Requirements

- `node` >= v10
- `npm` >= v5

```bash
npm install --save-dev eslint @arbetsmyra/eslint-config
```

## Usage

Once the `@arbetsmyra/eslint-config` package is installed, you can use it by specifying the `@arbetsmyra` config in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  'extends': '@arbetsmyra'
}
```

Using the `@arbetsmyra` config with other [shareable configs](https://eslint.org/docs/developer-guide/shareable-configs).

```js
{
  'extends': [
    // other shareable configs
    '@arbetsmyra'
  ]
}
```

## Contributing

If you want to contribute and make our project better, your help is very welcome.

Our contribution guide is right now a bit empty but will be improved in the future. If you have any requests or suggestions please create an issue with the necessary information and we will get back to you.

## License

[MIT © Arbetsmyra](https://choosealicense.com/licenses/mit/)
