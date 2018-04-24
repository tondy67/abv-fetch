/** 
 * Abvos Fetch
 * https://github.com/tondy67/abv-fetch
 */
"use strict";

const https = require('https');
const fs = require('fs');
const Path = require('path');
const Request = require('./Request.js');
const Response = require('./Response.js');

class Fetch
{
	constructor(){}
	
	fetch(input, init /* ~Request */)
	{
		return new Promise((resolve, reject) => {
			if (!input.startsWith('http')) return reject(new Error('Not url'));
			if (!init) init = {};
			if (!init.path) init.path = '.';
			const dest = init.path + '/' + Path.basename(input); console.log(dest);
			const r = new Response(input);
			// TODO: request etc...
			https.get(input, res => {
				const file = fs.createWriteStream(dest);
				res.pipe(file);
				file.on('finish', () => {
					file.close();  
					r._ok = true;
					r._headers = res.headers;
					r._status = res.statusCode;
					r._statusText = res.statusMessage;
					r._body = fs.readFileSync(dest);
					r._path = dest;
					resolve(r);
				});
				file.on('error', (err) => {
					fs.unlink(dest);
					reject(err);
				});

			}).on('error', (err) => {
				reject(err);
			});
		});
		
	}
}


module.exports = Fetch;
