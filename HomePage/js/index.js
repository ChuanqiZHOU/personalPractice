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
	// skill progress bar
	var solidSkillHtml = document.querySelector('.solid-skill-html');
	var solidSkillJs =  document.querySelector('#skill .solid-skill-js');
	var solidSkillJquery = document.querySelector("#skill .solid-skill-jquery");
	var solidSkillNode = document.querySelector("#skill .solid-skill-node");
	var solidSkillWp = document.querySelector("#skill .solid-skill-wp");
	var solidSkillJava = document.querySelector("#skill .solid-skill-java-shell");
	var expert = document.querySelector("#experiences .expert");
	
		
	var skills = document.querySelector('#skill');
	var skillTop = skills.offsetTop;
	
	var experiences = document.querySelector('#experiences');
	var experiTop = experiences.offsetTop;
	
	var education = document.querySelector("#education");
	var eduTop = education.offsetTop;
	var qualiLevel8 = document.querySelector(".quali_level8");
	var qualiLevel7 = document.querySelector(".quali_level7");
	var qualiMicro = document.querySelector(".quali_micro");
	var qualiFreecode = document.querySelector(".quanli_freecode");
	
	
	document.addEventListener("scroll", function(){
		if(window.pageYOffset >= 0.5*skill.offsetTop)
		{
			solidSkillHtml.style.width = "90%";
			solidSkillJs.style.width = "85%";
			solidSkillJquery.style.width = "85%";
			solidSkillNode.style.width = "80%"; 
			solidSkillWp.style.width = "80%";
			solidSkillJava.style.width = "80%";
		}
		if(window.pageYOffset >= experiTop)
		{
			expert.style.opacity = "1.0";
		}
		
		if(window.pageYOffset >= eduTop) {
			qualiLevel8.style.opacity = "1.0";
			qualiLevel7.style.opacity = "1.0";
			qualiMicro.style.opacity = "1.0";
			qualiFreecode.style.opacity = "1.0";
		}
	});
		
		
	
}