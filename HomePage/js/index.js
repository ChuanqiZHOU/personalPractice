window.onload= function(){
	let navBar = document.querySelector(".nav-bar");
	let faBars = document.querySelector(".fa-bars-cursor");
	let navLastSpanI = document.querySelector('nav span:last-child i');
	faBars.addEventListener('mouseenter', function(){
		faBars.style.cursor = "pointer";
	})
	var flag = true;
	faBars.addEventListener('click',  function(){
		if(flag == true){
			navBar.style.display = "flex";
			navBar.style.alignItems = "center";
			flag = false;
			navLastSpanI.setAttribute('class', "fa fa-times fa-bars-cursor");
		}else {
			navBar.style.display = "none";
			navLastSpanI.setAttribute('class', "fa fa-bars fa-bars-cursor")
			flag = true;
		}	
	});
	
}