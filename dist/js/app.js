$(window).ready(function(){
	$('.btn_esconder').click(function(x){
			$('.main-bg').toggleClass('active');
		$(this).val('Show');
		x();
	})



// Change div content - pour products

$('.tab-aside').click(function(){ 
	$('.tabela').each(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}
		else{
			$(this).addClass('active');
		}
	})
});

});