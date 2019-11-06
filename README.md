# [`@arbetsmyra/eslint-config`](https://github.com/arbetsmyra/eslint-config)

> Arbetsmyra's [ESLint config](https://eslint.org/docs/developer-guide/shareable-configs)

## Installation

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

### Using the `@arbetsmyra` config with other [shareable configs](https://eslint.org/docs/developer-guide/shareable-configs)

```js
{
  'extends': [
    // other shareable configs
    '@arbetsmyra'
  ]
}
```

## License

MIT © Arbetsmyra
