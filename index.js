/*!
 * has-banner <https://github.com/jonschlinkert/has-banner>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var extractBanner = require('extract-banner');

module.exports = function(str, custom) {
  if (typeof str !== 'string') {
    throw new Error('has-banner expects a string.');
  }
  return extractBanner(str, custom) !== '';
};
