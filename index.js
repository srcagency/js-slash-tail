'use strict';

module.exports = function( str ){
	if (str) {
		if (str.substr(-1) !== '/')
			return str + '/';
		else
			return str;
	}
}
