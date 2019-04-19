$(window).ready(function(){
	$('.btn_esconder').hover(function(x){
			$('.main-bg').toggleClass('active');
		$(this).val('Show');
		x();
	})
});