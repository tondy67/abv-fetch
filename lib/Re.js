/**
 * Re
 */
"use strict";

const Body = require('./Body.js');

class Re extends Body
{
	constructor(url='')
	{
		super();
		
		this._headers = '';
		this._url = url;
	}
	
	get headers() { return this._headers; }
	
	get url() { return this._url; }

	clone() { }
	
}

module.exports = Re;
