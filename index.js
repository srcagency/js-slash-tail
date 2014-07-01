'use strict';

module.exports = function( str, trailingSlash ){
	if (str) {
		if (typeof str !== 'string')
			throw new Error('You should only pass strings');

		if (str.substr(-1) === '/')
			return trailingSlash ? str : str.slice(0, -1);
		else
			return trailingSlash ? str + '/' : str;
	}

	return str;
}

module.exports.add = function( str ){ return module.exports(str, true); };
module.exports.remove = function( str ){ return module.exports(str, false); };
