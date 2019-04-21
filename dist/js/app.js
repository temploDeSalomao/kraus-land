$(window).ready(function(){
	$('.btn_esconder').click(function(x){
			$('.main-bg').toggleClass('active');
		$(this).val('Show');
		x();
	})



// Change div content - pour products

$('.tab-aside').click(function(){
    if ($('#1').css('display') != 'none') {

        $('#2').html($('#static').html()).show().siblings('div').hide();
    } else if ($('#2').css('display') != 'none') {

        $('#1').show().siblings('div').hide();

    }
});

});