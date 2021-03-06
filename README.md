# has-banner [![NPM version](https://img.shields.io/npm/v/has-banner.svg)](https://www.npmjs.com/package/has-banner) [![Build Status](https://img.shields.io/travis/jonschlinkert/has-banner.svg)](https://travis-ci.org/jonschlinkert/has-banner)

> Returns true if a file has a banner code comment. Used for linting.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install has-banner --save
```

## Usage

```js
var hasBanner = require('has-banner');

hasBanner('/*! Copyright whatever */');
//=> 'true'

hasBanner('a/*! Copyright whatever */');
//=> 'false'
```

Pass an array of keywords to disqualify banners (`jshint` and `global` are already included)

```js
hasBanner('/*! jshint:foo */');
//=> false

hasBanner('/*! foo */', ['foo']);
//=> false
```

## Related projects

* [add-banner](https://www.npmjs.com/package/add-banner): Add a banner to a string. Banners are just Lo-Dash/underscore templates, if a custom one… [more](https://www.npmjs.com/package/add-banner) | [homepage](https://github.com/jonschlinkert/add-banner)
* [strip-banner](https://www.npmjs.com/package/strip-banner): Strip banners from code. | [homepage](https://github.com/jonschlinkert/strip-banner)
* [update-banner](https://www.npmjs.com/package/update-banner): Add or update a banner in a string. | [homepage](https://github.com/jonschlinkert/update-banner)
* [write-banner](https://www.npmjs.com/package/write-banner): Add a banner to any file. | [homepage](https://github.com/jonschlinkert/write-banner)

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/has-banner/issues/new).

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install verb && npm run docs
```

Or, if [verb](https://github.com/verbose/verb) is installed globally:

```sh
$ verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016 [Jon Schlinkert](https://github.com/jonschlinkert)
Released under the [MIT license](https://github.com/jonschlinkert/has-banner/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on March 20, 2016._