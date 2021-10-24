window.onload = function() {
	//for the fist nav
	let faBars0 = document.querySelector(".nav .fa-bars-cursor");
	let navSpanI0 = document.querySelector('.nav i');
	faBars0.addEventListener('mouseenter', function() {
		faBars0.style.cursor = "pointer";
	})
	var flag = true;
	faBars0.addEventListener('click', function() {
		if (flag == true) {
			
			// navLastSpan.innerHTML= '<i class = "fa fa-times fa-bars-cursor"></i>';
			flag = false;
			navSpanI0.setAttribute('class', "fa fa-times fa-bars-cursor");

		} else {
			
			// navLastSpan.innerHTML= '<i class = "fa fa-bars fa-bars-cursor"></i>';
			navSpanI0.setAttribute('class', "fa  fa-bars fa-bars-cursor");
			flag = true;
		}
	});
	// for the second nav
	let faBars1 = document.querySelector(".nav1 .fa-bars-cursor");
	let nav1Span = document.querySelector('.nav1 span');
	faBars1.addEventListener('mouseenter', function() {
		faBars1.style.cursor = "pointer";
	})
	var flag1 = true;
	
	// the following use innerHTML to replace setAttr
	faBars1.addEventListener('click', function() {
		if (flag1 == true) {
			nav1Span.innerHTML= '<i class = "fa fa-times fa-bars-cursor"></i>';
			flag1 = false;
		} else {
			nav1Span.innerHTML= '<i class = "fa fa-bars fa-bars-cursor"></i>';
			flag1 = true;
		}
	});
	
};
