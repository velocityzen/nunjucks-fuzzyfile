'use strict';
const fs = require('fs');
const path = require('path');
const nm = require('nanomatch');

const insertBeforeExt = function(filepath, str) {
  const parts = filepath.split('.');
  const ext = parts.pop();
  return parts.join('.') + `${str}.${ext}`;
};

const Fuzzyfile = function() {
  this.tags = [ 'fuzzyfile' ];
};

Fuzzyfile.prototype.parse = function(parser, nodes) {
  const token = parser.nextToken();
  const args = parser.parseSignature(null, true);
  parser.advanceAfterBlockEnd(token.value);
  return new nodes.CallExtensionAsync(this, 'render', args);
};

Fuzzyfile.prototype.render = function(context, filepath, cb) {
  const fullFilepath = path.resolve(process.cwd(), filepath);
  const basename = path.basename(fullFilepath);

  fs.readdir(path.dirname(fullFilepath), (err, files) => {
    if (err) {
      return cb(null, basename);
    }

    const match = nm(files, insertBeforeExt(basename, '*'));
    cb(null, match[0] || basename);
  });
};


module.exports = Fuzzyfile;
