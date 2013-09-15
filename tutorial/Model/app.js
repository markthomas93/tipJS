/*
 * tipJS - OpenSource Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */
tipJS.config({
	developmentHostList:[
		'localhost'
		,'127.0.0.1'
		,'tipjs.com'
	]
});

tipJS.app({
	controllers:[
		"controller1.js"
	],
	models:[
		"modelA.js",
		"modelB.js"
	]
});
