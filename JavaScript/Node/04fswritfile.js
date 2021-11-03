const fs = require('fs');

fs.writeFile('./04fswriteresult.js', 'I am good person', (err)=>{
	if(err != null){
			console.log(err);
			return;
	}else {
		console.log('write sucessfully');
		return;
	}
})