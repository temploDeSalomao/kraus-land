$(window).ready(function(){
	$('.btn_esconder').click(function(){
		if($('.main-bg').hasClass('active')){
			$(this).removeClass('active');
		}
	})
});