'use strict';

var slashTrail = require('./');
var test = require('tap').test;

test('slash-trail', function( t ) {
	var withoutSlash = 'london';
	var withSlash = 'london/';

	t.equal(slashTrail(withoutSlash),			withoutSlash);
	t.equal(slashTrail(withSlash),				withoutSlash);
	t.equal(slashTrail.remove(withoutSlash),	withoutSlash);
	t.equal(slashTrail.remove(withSlash),		withoutSlash);

	t.equal(slashTrail(withoutSlash, true),		withSlash);
	t.equal(slashTrail(withSlash, true),		withSlash);
	t.equal(slashTrail.add(withoutSlash),		withSlash);
	t.equal(slashTrail.add(withSlash),			withSlash);

	t.equal(slashTrail(), undefined);
	t.equal(slashTrail(undefined, false), undefined);

	t.equal(slashTrail(''), '');
	t.equal(slashTrail('', false), '');

	t.throws(function(){
		slashTrail({});
	});

	t.throws(function(){
		slashTrail([]);
	});

	t.throws(function(){
		slashTrail(1);
	});

	t.end();
});
