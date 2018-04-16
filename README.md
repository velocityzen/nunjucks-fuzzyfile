# Nunjucks fuzzy file search tag extension

[![NPM Version](https://img.shields.io/npm/v/nunjucks-fuzzyfile.svg?style=flat-square)](https://www.npmjs.com/package/nunjucks-fuzzyfile)
[![NPM Downloads](https://img.shields.io/npm/dt/nunjucks-fuzzyfile.svg?style=flat-square)](https://www.npmjs.com/package/nunjucks-fuzzyfile)

[Nunjucks](https://github.com/mozilla/nunjucks) fuzzy file search tag extension.

## Installation

`npm i nunjucks-fuzzyfile`

## Usage

```js
const Fuzzyfile = require('nunjucks-fuzzyfile');

// env is nujucks environment
env.addExtension('fuzzyfile', new Fuzzyfile());
```

### fuzzyfile

Looks for file matching pattern `filename*.ext` and returns matched filename. If no matches found returns the filename.

`{% fuzzyfile filepath %}`

### Example:
`{% fuzzyfile 'static/app.js' %}`

License: MIT.
