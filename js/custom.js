var wheight,skandi;
	skandi = {
		featuredSlider: function(slider,center,urlhash,autoplay,startPosition,next,prev,items){
			var center,urlhash,autoplay,startPosition,next,prev,slider,featureSlider,items;
			  featureSlider = $(slider);
			  featureSlider.owlCarousel({
				   center: center,
				   URLhashListener: urlhash,
				   autoplayHoverPause: autoplay,
				   startPosition: startPosition,
				   loop:true,
				   responsive:{
						0:{
							items:1
						},
						480:{
							items:2
						},
						1000:{
							items: items
						}
					}
				 
			  });
				$(next).click(function(){
				featureSlider.trigger('next.owl.carousel');
			  })
			  $(prev).click(function(){
				featureSlider.trigger('prev.owl.carousel');
			  })
		},
		sizes: function(){
			wheight = $(window).height();
			$('.wheight').css({'height': wheight});
		},
		masonryGrid: function(){
			$('.grid').masonry({
			   itemSelector: '.box',
			   columnWidth: '.grid-sizer',
			   percentPosition: true
			});
		}
		
}
	$(document).ready(function(){
		skandi.sizes();
		if($(".featured-slider").length){
			skandi.featuredSlider(".featured-slider",false,false,false,0,".next",".prev",4);
		}
		if($(".blog-slider").length){
			skandi.featuredSlider(".blog-slider",true,true,true,"URLHash",".blog-next",".blog-prev",4);
		}
		if($(".blog-top-slider").length){
			skandi.featuredSlider(".blog-top-slider",true,true,true,"URLHash",".blog-next",".blog-prev",2);
		}
		if($('.grid').length){
			skandi.masonryGrid();
		}
	});
	$(window).on("load resize",function(e){
		skandi.sizes();
	});

