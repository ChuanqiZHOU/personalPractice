var first = 'hello nodejs';
console.log(first);

function fn (){
	console.log('fn函数又被调用了');
}

fn ();

for (var i = 0; i <5; i ++) {
	console.log(i);
}

if (true){
	console.log('123');
}

console.log('文件被修改了');
console.log ("haha 再次被修改");
fn();
