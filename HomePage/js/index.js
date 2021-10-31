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
	
	var skills = document.querySelector('#skill');
	var skillTop = skills.offsetTop;
	
	
	//obtain DOM for experience animation
	// var experiences = document.querySelector('#experiences');
	var expert = document.querySelector("#experiences .expert");
	var expertBox1 = document.querySelector(".expert-box1");
	var expertBox2 = document.querySelector(".expert-box2");
	var expertBox3 = document.querySelector(".expert-box3");
	var experiTop = experiences.offsetTop;
	// education animation
	var education = document.querySelector("#education");
	var eduTop = education.offsetTop;
	var qualicerliBoxs = document.querySelectorAll('.quanlicerli-box');
	// document scroll event
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
		// experience animatin
		if(window.pageYOffset >= experiTop)
		{
			expertBox1.style.opacity = "1.0";
			expertBox2.style.opacity = "1.0";
			expertBox3.style.opacity = "1.0";
		}
		// education animation
		if(window.pageYOffset >= eduTop) {
			for( let i = 0; i < qualicerliBoxs.length; i++){
				for( let j = 0; j < qualicerliBoxs[i].children.length; j++){
					qualicerliBoxs[i].children[j].style.opacity = "1.0";
					qualicerliBoxs[i].children[j].style.marginLeft = "0rem";
					qualicerliBoxs[i].children[j].style.marginRight = "0rem";
				}
			}
		}
	});
		
		
	
}