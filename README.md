# wink-lemmatizer

English lemmatizer

### [![Build Status](https://api.travis-ci.org/winkjs/wink-lemmatizer.svg?branch=master)](https://travis-ci.org/winkjs/wink-lemmatizer) [![Coverage Status](https://coveralls.io/repos/github/winkjs/wink-lemmatizer/badge.svg?branch=master)](https://coveralls.io/github/winkjs/wink-lemmatizer?branch=master) [![Inline docs](http://inch-ci.org/github/winkjs/wink-lemmatizer.svg?branch=master)](http://inch-ci.org/github/winkjs/wink-lemmatizer) [![dependencies Status](https://david-dm.org/winkjs/wink-lemmatizer/status.svg)](https://david-dm.org/winkjs/wink-lemmatizer) [![devDependencies Status](https://david-dm.org/winkjs/wink-lemmatizer/dev-status.svg)](https://david-dm.org/winkjs/wink-lemmatizer?type=dev) [![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/winkjs/Lobby)

[<img align="right" src="https://decisively.github.io/wink-logos/logo-title.png" width="100px" >](https://winkjs.org/)

Obtain base form or [lemma](https://nlp.stanford.edu/IR-book/html/htmledition/stemming-and-lemmatization-1.html) of nouns, verbs and adjectives using **`wink-lemmatizer`**.

### Installation

Use [npm](https://www.npmjs.com/package/wink-lemmatizer) to install:

    npm install wink-lemmatizer --save

### Getting Started
```javascript
// Load wink-lemmatizer
var lemmatize = require( 'wink-lemmatizer' );

// Lemmatize adjectives
lemmatize.adjective( 'farthest' );
// -> 'far'
lemmatize.adjective( 'coolest' );
// -> 'cool'
lemmatize.adjective( 'easier' );
// -> 'easy'

// Lemmatize nouns
lemmatize.noun( 'knives' );
// -> 'knife'
lemmatize.noun( 'potatoes' );
// -> 'potato'
lemmatize.noun( 'men' );
// -> 'man'

// Lemmatize verbs
lemmatize.verb( 'eaten' );
// -> 'eat'
lemmatize.verb( 'pushes' );
// -> 'push'
lemmatize.verb( 'suggesting' );
// -> 'suggest'
```

### Documentation
Check out the [lemmatizer API documentation](https://winkjs.org/wink-lemmatizer/) to learn more.

### Need Help?

If you spot a bug and the same has not yet been reported, raise a new [issue](https://github.com/winkjs/wink-lemmatizer/issues) or consider fixing it and sending a pull request.

### About wink
[Wink](https://winkjs.org/) is a family of open source packages for **Natural Language Processing**, **Machine Learning**, and **Statistical Analysis** in NodeJS. The code is **thoroughly documented** for easy human comprehension and has a **test coverage of ~100%** for reliability to build production grade solutions.

### Copyright & License

**wink-lemmatizer** is copyright 2017-20 [GRAYPE Systems Private Limited](http://graype.in/).

It is licensed under the terms of the MIT License.
