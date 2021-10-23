window.onload= function(){
	let navBar = document.querySelector(".nav-bar");
	let faBars = document.querySelector(".fa-bars-cursor");
	let navLastSpanI = document.querySelector('.nav span:last-child i');
	// let navLastSpan = document.querySelector('.nav span:last-child');
	faBars.addEventListener('mouseenter', function(){
		faBars.style.cursor = "pointer";
	})
	var flag = true;
	faBars.addEventListener('click',  function(){
		if(flag == true){
			navBar.style.display = "flex";
			navBar.style.alignItems = "center";
			// navLastSpan.innerHTML= '<i class = "fa fa-times fa-bars-cursor"></i>';
			flag = false;
			navLastSpanI.setAttribute('class', "fa fa-times fa-bars-cursor");
			
		}else {
			navBar.style.display = "none";
			// navLastSpan.innerHTML= '<i class = "fa fa-bars fa-bars-cursor"></i>';
			navLastSpanI.setAttribute('class', "fa  fa-bars fa-bars-cursor");
			flag = true;
		}	
	});
	
}