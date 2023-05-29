//     wink-lemmatizer
//     English lemmatizer
//
//     This file is part of “wink-lemmatizer”.
//
//     Copyright (c) GRAYPE Systems Private Limited
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
/* eslint-disable no-console */

var chai = require( 'chai' );
var mocha = require( 'mocha' );
var lemmatize = require( '../src/wink-lemmatizer.js' ).verb;

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

var verbs = [
              [ 'winning', 'win' ],
              [ 'dying', 'die' ],
              [ 'agreed', 'agree' ],
              [ 'died', 'die' ],
              [ 'eaten', 'eat' ],
              [ 'wins', 'win' ],
              [ 'manages', 'manage' ],
              [ 'manage', 'manage' ],
              [ 'pushes', 'push' ],
              [ 'tries', 'try' ],
              [ 'had', 'have' ],
              [ 'are', 'be' ],
              [ 'suggesting', 'suggest' ],
              [ 'juxtaposes', 'juxtapose' ],
              [ 'foresaw', 'foresee' ],
              [ 'devouring', 'devour' ],
              [ 'scouring', 'scour' ],
              [ 'lates', 'lates' ],
              [ 'goes', 'go' ]
            ];

describe( 'lemmatizeVBX test cycle', function () {
  verbs.forEach( function ( verb ) {
    it( 'lemmatize ' + verb[ 0 ] + ' must give ' + verb[ 1 ], function () {
        expect( lemmatize( verb[ 0 ] ) ).to.deep.equal( verb[ 1 ] );
    } );
  } );
} );
