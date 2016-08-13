var wheight;
	$(document).ready(function(){
		sizes();
		 var slider = $(".featured-slider");
		  slider.owlCarousel({
			  items : 4,
			  itemsDesktop : [1199,3],
			  itemsDesktopSmall : [979,3]
		  });
		    $(".next").click(function(){
			slider.trigger('owl.next');
		  })
		  $(".prev").click(function(){
			slider.trigger('owl.prev');
		  })
		 
		 var owl = $(".blog-slider");
		  owl.owlCarousel({
			  items : 4,
			  itemsDesktop : [1199,3],
			  itemsDesktopSmall : [979,3]
			
		 });
		  $(".next").click(function(){
			owl.trigger('owl.next');
		  })
		  $(".prev").click(function(){
			owl.trigger('owl.prev');
		  })
		/*owl.on('mousewheel', '.owl-wrapper', function (e) {
			if (e.deltaY>0) {
				owl.trigger('owl.next');
			} else {
				owl.trigger('owl.prev');
			}
			e.preventDefault();
		});*/
		  
	});
	$(window).load(function(){
		sizes();
	});
	$(window).resize(function(){
		sizes();
	});

function sizes(){
	wheight = $(window).height();
	$('.wheight').css({'height': wheight});
}