$(window).ready(function(){
	$('.btn_esconder').click(function(){
			$('.main-bg').toggleClass('active');
		$(this).html('Show');
	})
});