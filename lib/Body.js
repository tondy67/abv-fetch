/**
 * Body
 */
"use strict";

const $s = 'Null body';

class Body
{
	constructor()
	{
		this._body = null;
		this._bodyUsed = false;
	}
	
	get body(){ return this._body; }

	get bodyUsed(){ return this._bodyUsed; }
	
	arrayBuffer()
	{
		const me = this;
		return new Promise((resolve, reject) => {
			if (me.body === null) return reject(new TypeError($s));
			resolve(Buffer.from(me.body).buffer);
		});
	}
	
	blob()
	{
		const me = this;
		return new Promise((resolve, reject) => {
			if (me.body === null) return reject(new TypeError($s));
			resolve(Buffer.from(me.body).buffer);
		});
	}
	
	formData()
	{
		const me = this;
		return new Promise((resolve, reject) => {
			if (me.body === null) return reject(new TypeError($s));
			let json = null;
			try{
				json = JSON.parse(me.body);
				resolve(json);
			}catch(e){
				reject(e);
			}
		});
	}
	
	json()
	{
		const me = this;
		return new Promise((resolve, reject) => {
			if (me.body === null) return reject(new TypeError($s));
			let json = null;
			try{
				json = JSON.parse(me.body);
				resolve(json);
			}catch(e){
				reject(e);
			}
		});
	}
	
	text()
	{
		const me = this;
		return new Promise((resolve, reject) => {
			if (me.body === null) return reject(new TypeError($s));
			resolve(Buffer.from(me.body).toString('utf8'));
		});
	}

}

module.exports = Body;
