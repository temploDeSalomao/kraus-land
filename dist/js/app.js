$(window).ready(function(){
	$('.btn_esconxder').click(function(x){
			$('.main-bg').toggleClass('active');
		$(this).val('Show');
		x();
	})



// Change div content - pour products

$('.tab-aside').click(function(){
	$(this).each(function(){
			if($(this).hasClass('active')){
			$(this).removeClass('active');
		}
		else{cd va
			$(this).addClass('active');
		}
	}) 
	$((this).find('tabela')).each(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}
		else{
			$(this).addClass('active');
		}
	})
});

});