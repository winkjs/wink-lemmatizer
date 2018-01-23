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

var wl = Object.create( null );

// noun lemmatizer
wl.lemmatizeNoun = require( './lemmatize-nnx.js' );
// verb lemmatizer
wl.lemmatizeVerb = require( './lemmatize-vbx.js' );

module.exports = wl;
