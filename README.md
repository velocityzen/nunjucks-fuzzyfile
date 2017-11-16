# Nunjucks fuzzy file search tag extension

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

### Exmaple:
`{% fuzzyfile 'static/app.js' %}`

License: MIT.
