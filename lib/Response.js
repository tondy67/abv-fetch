/**
 * Re
 */
"use strict";

const Re = require('./Re.js');

class Response  extends Re
{
	constructor(url='')
	{
		super(url);

		this._ok  = false;
		this._redirected  = false;
		this._status = 0;
		this._statusText = '';
		this._type = 'basic';
		this.useFinalURL = true;
		this._path = '';
	}

	get path() { return this._path; }

	get ok() { return this._ok; }

	get redirected() { return this._redirected; }

	get status() { return this._status; }

	get statusText() { return this._statusText; }
	
	get type() { return this._type; }
	
	error()
	{
		const r = new Response();
		r._type = 'error';
		return r;
	}
	
	redirect(url,status)
	{
		const r = new Response(url);
		if (status) r._status = status;
		return r;
	}
	
	clone() 
	{ 
		const r = new Response();
		r._ok = this._ok;
		r._redirected = this._redirected;
		r._status = this._status;
		r._statusText = this._statusText;
		r._type = this._type;
		r.useFinalURL = this.useFinalURL;
		return r;
	}
	
}

module.exports = Response;
