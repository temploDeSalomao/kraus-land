$(window).ready(function(){
	$('.btn_esconder').click(function(x){
			$('.main-bg').toggleClass('active');
		$(this).val('Show');
		x();
	})



// Change div content - pour products

$('.tab-aside').click(function(){
    if ($('.tabela-1').css('display') != 'none') {

        $('.tabela-2').html($('.content-aside').html()).show().siblings('div').hide();
    } else if ($('.tabela-2').css('display') != 'none') {

        $('.tabela-1').show().siblings('div').hide();

    }
});

});