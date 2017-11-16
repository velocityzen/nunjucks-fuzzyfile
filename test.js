'use strict';
const test = require('ava');
const nunjucks = require('nunjucks');
const Fuzzyfile = require('./index');

const env = new nunjucks.Environment();
env.addExtension('fuzzyfile', new Fuzzyfile());

test.cb('renders string with no file', t => {
  env.renderString('{% fuzzyfile "some.file" %}', function(err, res) {
    if (err) {
      t.fail(err);
    } else {
      t.is(res, 'some.file');
    }

    t.end();
  });
});

test.cb('renders string with no file', t => {
  env.renderString('{% fuzzyfile "package.json" %}', function(err, res) {
    if (err) {
      t.fail(err);
    } else {
      t.is(res, 'package-lock.json');
    }
    t.end();
  });
});

test.cb('renders string with no file', t => {
  env.renderString('{% fuzzyfile "not/existing.path" %}', function(err, res) {
    if (err) {
      t.fail(err);
    } else {
      t.is(res, 'existing.path');
    }
    t.end();
  });
});
