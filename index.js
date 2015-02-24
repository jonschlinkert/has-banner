/*!
 * has-banner <https://github.com/jonschlinkert/has-banner>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var bom = require('strip-bom');

module.exports = function (str) {
  if (typeof str !== 'string') {
    throw new Error('has-banner expects a string.');
  }
  return bom(str).replace(/^\s+/, '').indexOf('/*') === 0;
};
