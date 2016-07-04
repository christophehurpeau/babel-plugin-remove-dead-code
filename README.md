# babel-plugin-remove-dead-code

This plugin for babel 6 remove dead code

## Usage

### cli

```sh
npm install babel-cli babel-plugin-remove-dead-code
babel --plugins babel-plugin-remove-dead-code script.js
```

### .babelrc

```json
{
  "plugins": [
    "remove-dead-code"
  ]
}
```

### What it does

[See the example](https://github.com/christophehurpeau/babel-plugin-remove-dead-code/blob/master/example.diff)

### Thanks

Inspired by https://github.com/achicu/babel-plugin-dead-code-elimination
