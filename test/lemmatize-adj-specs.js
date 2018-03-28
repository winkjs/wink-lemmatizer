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
var lemmatize = require( '../src/wink-lemmatizer.js' ).adjective;

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

var adjectives = [
              [ 'best', 'good' ],
              [ 'better', 'good' ],
              [ 'hottest', 'hot' ],
              [ 'hotter', 'hot' ],
              [ 'hot', 'hot' ],
              [ 'later', 'late' ],
              [ 'worse', 'bad' ],
              [ 'easier', 'easy' ],
              [ 'clumsy', 'clumsy' ],
              [ 'test', 'test' ]
            ];

describe( 'lemmatize adjective test cycle', function () {
  adjectives.forEach( function ( adjective ) {
    it( 'lemmatize ' + adjective[ 0 ] + ' must give ' + adjective[ 1 ], function () {
        expect( lemmatize( adjective[ 0 ] ) ).to.deep.equal( adjective[ 1 ] );
    } );
  } );
} );
