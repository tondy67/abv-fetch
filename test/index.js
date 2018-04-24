/** 
 * Fetch tests
 * https://github.com/tondy67/abv-fetch
 */
"use strict";

const fetch = require('../index.js');
const os = require('os');

fetch('https://apps.now.sh/img/abvos.png',{path:os.tmpdir()})
	.then(res => {
		return console.log(11,res);
	})
	.catch( err => {
		return console.log(14,err);
	})
