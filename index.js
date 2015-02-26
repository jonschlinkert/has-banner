/*!
 * has-banner <https://github.com/jonschlinkert/has-banner>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var bom = require('strip-bom');

module.exports = function (str, arr) {
  if (typeof str !== 'string') {
    throw new Error('has-banner expects a string.');
  }

  str = bom(str).replace(/^\s+/, '');
  var re = new RegExp(['global', 'jshint'].concat(arr || []).join('|'));

  return str.indexOf('/*') === 0 && !re.test(str);
};
