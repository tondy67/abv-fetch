/**
 * Request
 */
"use strict";

const Re = require('./Re.js');

class Request extends Re
{
	constructor(url='')
	{
		super(url);
		
		this._method = '';
		this._context = '';
		this._referrer = '';
		this._referrerPolicy = '';
		this._mode = '';
		this._credentials = '';
		this._redirect = '';
		this._integrity = '';
		this._cache = '';
	}

	get method() { return this._method; }

	get context() { return this._context; }

	get referrer() { return this._referrer; }

	get referrerPolicy() { return this._referrerPolicy; }

	get mode() { return this._mode; }

	get credentials() { return this._credentials; }

	get redirect() { return this._redirect; }

	get integrity() { return this._integrity; }

	get cache() { return this._cache; }

	clone() 
	{ 
		const r = new Request();
		r._method = this._method;
		r._context = this._context;
		r._referrer = this._referrer;
		r._referrerPolicy = this._referrerPolicy;
		r._mode = this._mode;
		r._credentials = this._credentials;
		r._redirect = this._redirect;
		r._integrity = this._integrity;
		r._cache = this._cache;
		return r;
	}
	
}

module.exports = Request;
