$(window).ready(function(){
	$('.btn_esconder').click(function(x){
			$('.main-bg').toggleClass('active');
		$(this).val('Show');
		x();
	})



// Change div content - pour products

$('.tab-aside').click(function(){
	$('.tab-aside').each(function(){
			if($('.tab-aside').hasClass('active')){
			$('.tab-aside').removeClass('active');
		}
		else{
			$('.tab-aside').addClass('active');
		}
	});
	$('.tabela').each(function(){
		if($('.tabela').hasClass('active')){
			$('.tabela').removeClass('active');
		}
		else{
			$('.tabela').addClass('active');
		}
	})
});

});