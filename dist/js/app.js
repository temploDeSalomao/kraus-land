$(window).ready(function(){


//  Function used to change div content and div title - Linha Industrial_Prensa-cabos
$('.tab-aside').click(function(){
		var x,y,z;
		// x = vairavel que busca o container geral
		// y =  variavel que busca a div dos titulos para checagem de qual esta ativa
		// z = Varibel que vusca dentro da iv dos conteudos qual esta ativa

		x=$(this).parent().closest('.outer-aside-content');
		y=x.children('.title-aside').children('.tab-aside');
		z=x.children('.content-aside').children('.tabela');
		y.each(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
			}
			else{
				$(this).addClass('active');

			}
		});

			z.each(function(i){
				if($(this).hasClass('active')){
					$(this).removeClass('active');
				}
				else{
					$(this).addClass('active');

				}
			})
	});


	//  Function to change img - using on same section
	$('.pic-item').click(function(){
		var x,y;
		y = $(this).attr('src');


		x = $(this).parent().closest('figure').children('.main-img');
		
		x.fadeOut(400,function(){
		x.attr('src',y);
		
		
		x.fadeIn(400);
	});
		
		
	});


// Function to make effect about product - mobile only
	$('.open-table').click(function(){
		var x,y;
		x = $(this).parent('.outer-content-tabela-mobile');
		y = x.children('.content-tabela-mobile');
		$('.content-tabela-mobile').removeClass('active');
	    y.addClass('active');
})

// Function to add class fixed when user scroll
	$(window).scroll(function(x){
		x = $(window).scrollTop();
		if(x>180){
			$('.header-home').addClass('fixed');
		}
		else{
			$('.header-home').removeClass('fixed');

		}
	});


// Start Slide
$('.slide-certifications-mobile').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  variableWidth: true
});




$('.main-nav ul li').click(function(x){
	x = $(this).data('scroll');
	switch(x){
		case 'Orcamento':
			$('html, body').animate({
    			scrollTop: $(".container-form").offset().top
			}, 1000);
		break;
		case 'Prensa-Cabos':
			$('html, body').animate({
    			scrollTop: $(".container-industrial-line").offset().top-300
			}, 1000);
		break;
	}

})




});