$(window).ready(function(){
	$('.btn_esconder').click(function(){
		if($('.main-bg').hasClass('active')){
			$('.main-bg').removeClass('active');
		}
	})
});