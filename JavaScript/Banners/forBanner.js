window.addEventListener('load', function() {
	// arrows display none
	var arr_l = document.querySelector('.arr_l');
	var arr_r = document.querySelector('.arr_r');
	var banner = document.querySelector('.banners');
	var bannerwidth = banner.offsetWidth;
	banner.addEventListener('mouseenter', function() {
		arr_l.style.display = 'block';
		arr_r.style.display = 'block';
		arr_r.style.zIndex = '123'; //here must be used 
		arr_l.style.zIndex = '123';
		arr_r.style.cursor = 'pointer';
		arr_l.style.cursor = 'pointer';
	})
	banner.addEventListener('mouseleave', function() {
		arr_l.style.display = 'none';
		arr_r.style.display = 'none';
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
		
		
		animate(ul, -index*bannerwidth);
		})
		
	}
	// arr_r click event
	var num = 0;
	arr_l.addEventListener('click', function(){
		num++
		
		animate(ul, -num*bannerwidth);	
		
		
	});
})