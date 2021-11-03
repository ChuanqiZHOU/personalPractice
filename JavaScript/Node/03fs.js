const fs = require('fs');

fs.readFile('./2b.js', 'utf-8', (err, result)=>{
	if(err !== null){
		console.log('i am fs');
	}
})