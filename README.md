## `babel-plugin-console-line`

Add line information to `console.log` statements

<br/>

[![NPM](https://img.shields.io/npm/v/babel-plugin-console-line)](https://www.npmjs.com/package/babel-plugin-console-line)

<br/>

Your `console.log`

```
console.log("hello")
```

Now with line info 🤙🏼

```
console.log("(line:1)", "hello")
```

## Install

```
npm i -D babel-plugin-console-line
```

## Usage

```
{
   "plugins": ["babel-plugin-console-line"]
}
```

## Test

Clone project and run `npm run test`
