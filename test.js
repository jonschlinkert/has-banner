/*!
 * has-banner <https://github.com/jonschlinkert/has-banner>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var should = require('should');
var hasBanner = require('./');

describe('hasBanner', function () {
  it('should return true if the string has a banner comment:', function () {
    hasBanner('/*').should.be.true;
    hasBanner('/*!').should.be.true;
    hasBanner('/**').should.be.true;
    hasBanner('/**\n * foo\n*/').should.be.true;
    hasBanner('/*! Copyright whatever */').should.be.true;
  });

  it('should return true when a banner has leading whitespace:', function () {
    hasBanner('      /*').should.be.true;
    hasBanner('      /*!').should.be.true;
    hasBanner('      /**').should.be.true;
    hasBanner('      /**\n * foo\n*/').should.be.true;
    hasBanner('      /*! Copyright whatever */').should.be.true;
  });

  it('should return false if the string does not have a banner comment:', function () {
    hasBanner('a').should.be.false;
    hasBanner('a/*! Copyright whatever */').should.be.false;
  });

  it('should throw an error:', function () {
    (function () {
      hasBanner();
    }).should.throw('has-banner expects a string.');
  });
});
