$(window).ready(function(){

//  Function used to change div content and div title - Linha Industrial_Prensa-cabos
$('.tab-aside').click(function(x,y,z){
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
	$('.pic-item').click(function(x,y){
		y = $(this).attr('src');


		x = $(this).parent().closest('figure').children('.main-img');
		
		x.fadeOut(400,function(){
		x.attr('src',y);
		
		
		x.fadeIn(400);
	});
		
		
	});


// Function to make effect about product - mobile only
	$('.open-table').click(function(x,y){
		x = $(this).parent('.outer-content-tabela-mobile');
		y = x.children('.content-tabela-mobile');
		$('.content-tabela-mobile').removeClass('active');
	    y.addClass('active');
})

// Function to add class fixed when user scroll and increase padding top to prevent article jump
	$(window).scroll(function(x){
		x = $(window).scrollTop();
		if(x>180){
			$('.header-home').addClass('fixed');
			$('html,body').css('padding-top','130px');
		}
		else{
			$('.header-home').removeClass('fixed');
			$('html,body').css('padding-top','0px');

		}
	});


// Start Slide
$('.slide-certifications-mobile').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  variableWidth: true
});



// anchor

$('.anchor').click(function(x){
	x = $(this).data('scroll');
	switch(x){
		case 'Orcamento':
			$('html, body').animate({
    			scrollTop: $(".container-form").offset().top  - 50
			}, 1000);
			return false;
		break;

		case 'Prensa-Cabos':
			$('html, body').animate({
    			scrollTop: $(".container-industrial-line").offset().top - 100
			}, 1000);
			return false;
		break;
	}


});

// mask tel
// string

$('input[name="telefone"]').blur(function(x){
	$(this).val='';
	x=$(this).val().replace(/(\d{2})(\d{5})(\d{4})/,"$1-$2-$3");
	
})

// validate form 

$("input[type='submit']").click(function(x,y,z){
	x=$('.first-row');
	y=$('.second-row');


	console.log(x,y);
	return false;
})


$('.actions-close').click(function(){
	$(this).parent().fadeOut(200,function(){
		$(this).css('transform','translateX(95px)')
	});
})

// Load maps async

	$('#first-map').attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5052593791643!2d-46.6623020845557!3d-23.550290384688456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5831ce745f75%3A0xa5c7d73d6946021e!2sR.+Goi%C3%A1s%2C+22+-+Higien%C3%B3polis%2C+S%C3%A3o+Paulo+-+SP%2C+01244-030!5e0!3m2!1spt-BR!2sbr!4v1556043721358!5m2!1spt-BR!2sbr');
	$('#second-map').attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0276046407566!2d-46.85259628455629!3d-23.49551518471565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf023b9094d6e1%3A0x7bc2a35445199cdd!2sAlameda+Madeira+-+Alphaville+Industrial%2C+Barueri+-+SP%2C+06454-010!5e0!3m2!1spt-BR!2sbr!4v1556043847102!5m2!1spt-BR!2sbr');
});
