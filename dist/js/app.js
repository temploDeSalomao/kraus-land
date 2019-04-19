$(window).ready(function(){
	$('.btn_esconder').click(function(x){
			$('.main-bg').toggleClass('active');
		$(this).html('Show');
		return(x);
	})
});