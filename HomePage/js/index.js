window.onload= function(){
	// nav bar js part
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
	// swiper button js for display
	let swiperButtonL = document.querySelector(".swiper-button-l");
	let swiperButtonR = document.querySelector(".swiper-button-r");
	let slideShow = document.querySelector(".slideshow");
	
	slideShow.addEventListener('mouseenter', function(){
		swiperButtonL.style.display = "block";
		swiperButtonR.style.display = "block";
		
	});
	slideShow.addEventListener('mouseleave', function(){
		swiperButtonL.style.display = "none";
		swiperButtonR.style.display = "none";
		
	});
}