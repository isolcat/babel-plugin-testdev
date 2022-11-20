# 🐱babel-plugin-devtest

The babel plugin for hiding your test code

## Motivation

There are already many unit testing frameworks on the market, such as: `vitest`, `jest`, but if you do not want to or do not have the energy to learn unit testing.

You may wish to use the plug-in, you do not need any learning costs to solve some simple tests😽

## Install

```shell
pnpm add babel-plugin-devtest
```

## Configure

You just need to do this：

```js
// babel.config.js
module.exports = {
  plugins: ["devtest"],
};
```

At the time of testing：

```js
if(TEST){
    //Fill in the code you want to test here, he will be hidden in production
}
```

You can also do your own testing in the `test` file

