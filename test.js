/*!
 * has-banner <https://github.com/jonschlinkert/has-banner>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

require('mocha');
var assert = require('assert');
var hasBanner = require('./');

describe('hasBanner', function() {
  it('should return true if the string has a banner comment:', function() {
    assert(hasBanner('// foo '));
    assert(hasBanner('//! foo '));
    assert(hasBanner('//! foo \nvar bar = "baz";'));
    assert(hasBanner('/* foo */'));
    assert(hasBanner('/*! bar */'));
    assert(hasBanner('/** baz */'));
    assert(hasBanner('/**\n * foo\n*/'));
    assert(hasBanner('/*! Copyright whatever */'));
  });

  it('should return true when a banner has leading whitespace:', function() {
    assert(hasBanner('      /* foo */'));
    assert(hasBanner('      // foo '));
    assert(hasBanner('      /*! foo */'));
    assert(hasBanner('      /** foo */'));
    assert(hasBanner('      /**\n * foo\n*/'));
    assert(hasBanner('      /*! Copyright whatever */'));
  });

  it('should return false if comment is not valid', function() {
    assert(!hasBanner('/*!foo'));
    assert(!hasBanner('/*! foo'));
    assert(!hasBanner('/** foo'));
    assert(!hasBanner('/*foo'));
    assert(!hasBanner('/*bar'));
    assert(!hasBanner('/* bar'));
    assert(!hasBanner('/! bar'));
    assert(!hasBanner('/*!bar'));
  });

  it('should return false if the string does not have a banner', function() {
    assert(!hasBanner('var foo = "bar";'));
  });

  it('should return false if the comment is not first in the string:', function() {
    assert(!hasBanner('foo/*! Copyright whatever */'));
  });

  it('should return true if the comment is preceded by "use strict"', function() {
    assert(hasBanner('"use strict";/*! Copyright whatever */'));
    assert(hasBanner('"use strict";\n\n\n/*! Copyright whatever */'));
  });

  it('should return false if the comment is a config comment:', function() {
    assert(!hasBanner('//!jshint \nvar foo = "bar";'));
    assert(!hasBanner('/*!jshint */'));
    assert(!hasBanner('/* eslint */'));
    assert(!hasBanner('/* eslint-disable-foo */'));
    assert(!hasBanner('// eslint-disable-line\nvar foo = "bar";'));
    assert(!hasBanner('/*! jshint */'));
    assert(!hasBanner('/** jshint */'));
    assert(!hasBanner('/*jshint */'));
    assert(!hasBanner('/*global */'));
    assert(!hasBanner('/* global */'));
    assert(!hasBanner('/! global */'));
    assert(!hasBanner('"use strict";/*!global */'));
  });

  it('should throw an error when a string is not passed', function(cb) {
    try {
      hasBanner();
      cb(new Error('expected an error'));
    } catch (err) {
      assert.equal(err.message, 'has-banner expects a string.');
      cb();
    }
  });
});
