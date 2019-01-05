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
});


