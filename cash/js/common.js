$(function() {
	$('.open').click(function(){
		$('.right_sub_menu').slideToggle();
	});

	$( ".DEMO" ).click(function() {
		$( ".show_work" ).fadeToggle( "slow", "linear" );
	  });

	$( ".show_work" ).click(function() {
		$( ".show_work" ).fadeOut( "slow", "linear" );
	});

	if (window.matchMedia('(max-width: 998px)').matches){

	$('.mobile_main_menu').click(function(){
		$('.toggle_list').slideToggle();
	});
	$('.sales').click(function(){
		$('.mobile_under_menu').slideToggle();
	});
	$('.mobile_tizer').click(function(){
		$('.tizer_sub').slideToggle();
	});
	$( ".second_list" ).remove();
}

	
});

