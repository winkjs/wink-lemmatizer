//     wink-lemmatizer
//     English lemmatizer
//
//     Copyright (C) 2017-18  GRAYPE Systems Private Limited
//
//     This file is part of “wink-lemmatizer”.
//
//     “wink-lemmatizer” is free software: you can redistribute
//     it and/or modify it under the terms of the GNU Affero
//     General Public License as published by the Free
//     Software Foundation, version 3 of the License.
//
//     “wink-lemmatizer” is distributed in the hope that it will
//     be useful, but WITHOUT ANY WARRANTY; without even
//     the implied warranty of MERCHANTABILITY or FITNESS
//     FOR A PARTICULAR PURPOSE.  See the GNU Affero General
//     Public License for more details.
//
//     You should have received a copy of the GNU Affero
//     General Public License along with “wink-lemmatizer”.
//     If not, see <http://www.gnu.org/licenses/>.

//
/* eslint-disable no-console */

var chai = require( 'chai' );
var mocha = require( 'mocha' );
var lemmatize = require( '../src/wink-lemmatizer.js' );

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe( 'lemmatizeVerb test', function () {
  it( 'lemmatize tries must give try', function () {
      expect( lemmatize.verb( 'tries' ) ).to.deep.equal( 'try' );
  } );
} );

describe( 'lemmatizeNoun test', function () {
  it( 'lemmatize shoes must give shoe', function () {
      expect( lemmatize.noun( 'shoes' ) ).to.deep.equal( 'shoe' );
  } );
} );

describe( 'lemmatizeAdjective test', function () {
  it( 'lemmatize coolest must give far', function () {
      expect( lemmatize.adjective( 'coolest' ) ).to.deep.equal( 'cool' );
  } );
} );
