window.addEventListener('load', function() {
	// arrows display none
	var arr_l = document.querySelector('.arr_l');
	var arr_r = document.querySelector('.arr_r');
	var banner = document.querySelector('.banners');
	var bannerwidth = banner.offsetWidth;
	var num = 0;
	var circle = 0;
	banner.addEventListener('mouseenter', function() {
		arr_l.style.display = 'block';
		arr_r.style.display = 'block';
		arr_r.style.zIndex = '123'; //here must be used 
		arr_l.style.zIndex = '123';
		arr_r.style.cursor = 'pointer';
		arr_l.style.cursor = 'pointer';
		clearInterval(timer);
		timer = null;
	})
	banner.addEventListener('mouseleave', function() {
		arr_l.style.display = 'none';
		arr_r.style.display = 'none';
		timer = setInterval(function(){
			arr_r.click();
		}, 2000);
	})
	
	//dynamic to produce the focus circle
	var ul = banner.querySelector('.slideshow').querySelector('ul');
	var ol = banner.querySelector('.focus').querySelector('ol');
	for(var i=0; i < ul.children.length; i++){
		var li = document.createElement('li');
		li.setAttribute('index', i);  // add index to each cirle sign
		ol.appendChild(li);
		// li.addEventListener('click', function() {		// only li-clicking  uses current class
		// 	for (var i=0; i< ol.children.length; i++) {		//this method is also OK for the goal
		// 		ol.children[i].className = '';	
		// 	}
		// 	this.className = 'current';
		// })
		
	}
	var ol_lis = ol.querySelectorAll('li');
	for (var i=0; i < ol_lis.length; i++) {
		ol_lis[i].addEventListener('click', function(){
			for (var i=0; i< ol.children.length; i++) {
					ol.children[i].className = '';	
				}
			this.className = 'current';
		var index = this.getAttribute('index');
		num = index;  // use num to control arr's index
		circle = index; // use circle to control focus-circle index
		animate(ul, -index*bannerwidth);
		})
		
	}
	//clondNode() to add slide 1 , must be wirte after focus-circle
	var firstUlLi = ul.children[0].cloneNode(true);
	ul.appendChild(firstUlLi);
	
	// arr_r click event
	var flag = true; // useing flag to control the speed for animate function
	arr_r.addEventListener('click', function(){
		if (flag) {
			flag = false;
			if(num== ul.children.length-1){
				ul.style.left = 0;
				num = 0;
			}
			num++;
			circle++;
			animate(ul, -num*bannerwidth, function(){ 		// using call back to control animate function
				flag = true;
			});	
			if(circle == ol.children.length){
				circle = 0;
			}
			circleChange();
			
		}
	});
	// arr_left click event
	arr_l.addEventListener('click', function(){
		if (flag) {
			flag = false;
			if(num== 0){
				num = ul.children.length-1;
				ul.style.left = -num* bannerwidth + 'px';
				
			}
			num--;
			circle--;
			animate(ul, -num*bannerwidth,function(){
				flag = true;
			});	
			if(circle < 0){					//when click the first postion, circl will be minus number
				circle = ol.children.length-1;
			}
			circleChange();
		}
		
	});
	
	function circleChange() {
		for(var i = 0; i < ol.children.length; i++){
			ol.children[i].className = "";
		}
		ol.children[circle].className = "current";
	}
	// automacic banner equals to arr_r click
	var timer = setInterval(function(){
		arr_r.click();
	}, 2000);
	
})