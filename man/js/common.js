$(function() {

	$('.header_content').slick({
			autoplaySpeed: 2000,
			arrows: false,
			dots: true,
			fade: true
		});

		$('.header_content_block').click(function() {
			$('.header_content').slick('slickNext');
		});

		var mh = 0;
			$(".header_h").each(function () {
				var h_block = parseInt($(this).height());
				if(h_block > mh) {
					
					mh = h_block;
					
				};
			});
			$(".header_h").height(mh);
			

			var qwe = 0;
			$(".header_p").each(function () {
				var hh_block = parseInt($(this).height());
				if(hh_block > qwe) {
					
					qwe = hh_block;
					
				};
			});
			$(".header_p").height(qwe);
			
});




