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

const adjectiveExceptions = require( 'wink-lexicon/src/wn-adjective-exceptions.js' );
const verbExceptions = require( 'wink-lexicon/src/wn-verb-exceptions.js' );
const nounExceptions = require( 'wink-lexicon/src/wn-noun-exceptions.js' );
const words = require( 'wink-lexicon/src/wn-words.js' );
const senseMap = require( 'wink-lexicon/src/wn-word-senses.js' );
const lemmatize = Object.create( null );

var isAdjective = function ( word ) {
  const index = words[ word ];
  if ( index === undefined ) return false;
  const senses = senseMap[ index ];
  for ( let k = 0; k < senses.length; k += 1 ) {
    if ( senses[ k ] < 2 ) return true;
  }
  return false;
};

// ### lemmatizeAdjective
/**
 *
 * Conjugates a `adjective` to it's base form (VB). It also has an alias
 * `lemmatizeAdjective` to maintain API level compatibility with preivious version.
 *
 * @param {string} adjective — that needs to be conjugated to base form.
 * @return {string} the base form of `adjective`.
 * @example
 * lemmatize.adjective( 'farthest' );
 * // -> far
*/
lemmatize.adjective = function ( adjective ) {
  var lemma = adjectiveExceptions[ adjective ];
  if ( lemma ) return lemma;
  lemma = adjective.replace( /est$|er$/, '' );
  if ( lemma.length === adjective.length ) return adjective;
  if ( isAdjective( lemma ) ) return lemma;
  lemma += 'e';
  if ( isAdjective( lemma ) ) return lemma;
  return adjective;
};


var isVerb = function ( word ) {
  const index = words[ word ];
  if ( index === undefined ) return false;
  const senses = senseMap[ index ];
  for ( let k = 0; k < senses.length; k += 1 ) {
    if ( senses[ k ] > 28 && senses[ k ] < 44  ) return true;
  }
  return false;
};

// ### lemmatizeVerb
/**
 *
 * Conjugates a `verb` to it's base form (VB).
 *
 * @param {string} verb — that needs to be conjugated to base form.
 * @return {string} the base form of `verb`.
 * @example
 * lemmatize.verb( 'winning' );
 * // -> win
*/
lemmatize.verb = function ( verb ) {
  var lemma = verbExceptions[ verb ];
  if ( lemma ) return lemma;

  lemma = verb.replace( /s$/, '' );
  if ( lemma.length !== verb.length && isVerb( lemma ) ) return lemma;

  lemma = verb.replace( /ies$/, 'y' );
  if ( lemma.length !== verb.length && isVerb( lemma ) ) return lemma;

  lemma = verb.replace( /es$|ed$|ing$/, '' );
    if ( lemma.length !== verb.length ) {
    if ( isVerb( lemma ) ) return lemma;
    lemma += 'e';
    if ( isVerb( lemma ) ) return lemma;
  }
  return verb;
};

const nounRegexes = [
  { replace: /s$/, by: '' },
  { replace: /ses$/, by: 's' },
  { replace: /xes$/, by: 'x' },
  { replace: /zes$/, by: 's' },
  { replace: /ves$/, by: 'f' },
  { replace: /ches$/, by: 'ch' },
  { replace: /shes$/, by: 'sh' },
  { replace: /men$/, by: 'man' },
  { replace: /ies$/, by: 'y' }
];

var isNoun = function ( word ) {
  const index = words[ word ];
  if ( index === undefined ) return false;
  const senses = senseMap[ index ];
  for ( let k = 0; k < senses.length; k += 1 ) {
    if ( senses[ k ] > 2 && senses[ k ] < 29  ) return true;
  }
  return false;
};

// ### lemmatizeNoun
/**
 *
 * Converts the input `noun` to it's singular form.
 *
 * @param {string} noun — that needs to be lemmatized.
 * @return {string} the singular of `noun`.
 * @example
 * lemmatize.noun( 'handkerchieves' );
 * // -> handkerchief
*/
lemmatize.noun = function ( noun ) {
  var lemma = nounExceptions[ noun ];
  if ( lemma ) return lemma;

  lemma = noun;
  for ( let k = 0; k < nounRegexes.length; k += 1 ) {
    lemma = noun.replace( nounRegexes[ k ].replace, nounRegexes[ k ].by );

    if ( lemma.length !== noun.length && isNoun( lemma ) ) return lemma;
  }

  return noun;
};

// Create alias to maintain backwards compatibility.
lemmatize.lemmatizeNoun = lemmatize.noun;
lemmatize.lemmatizeVerb = lemmatize.verb;
lemmatize.lemmatizeAdjective = lemmatize.adjective;

module.exports = lemmatize;

// console.log( lemmatize.verb( 'lates') )
