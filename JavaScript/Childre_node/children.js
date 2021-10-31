

// window.onload = function(){
// 	var newP = document.querySelector("p");
// console.log('p_tag: ', newP);
	
// }
window.addEventListener('load', function(){
	var btn = document.querySelector('button');
	var fathers = document.querySelectorAll(".father");
	// console.log(fathers);
	// console.log(fathers[0]);
	// console.log(fathers[0].children[0]);
	// fathers[0].style.backgroundColor = "orange";
	//fathers and children must have indext to get any value
	btn.addEventListener('click', function(){
		for(let j=0; j< fathers.length; j++){
		for (let i = 0; i < fathers[j].children.length; i++){
		// for(let j = 0; j < fathers[i].children.length; j++ )
		fathers[j].children[i].style.opacity = "1.0";
			}
		}
	})
})
