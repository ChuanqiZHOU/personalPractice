

// window.onload = function(){
// 	var newP = document.querySelector("p");
// console.log('p_tag: ', newP);
	
// }
window.addEventListener('load', function(){
	var fathers = document.querySelectorAll('.father');
	// console.log(fathers);
	// console.log(fathers[0]);
	console.log(fathers[0].children[0]);
	fathers[0].style.backgroundColor = "orange";
	//fathers and children must have indext to get any value
})
