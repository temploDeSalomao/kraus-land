$(window).ready(function(){$(".tab-aside").click(function(){var e,t,a;t=(e=$(this).parent().closest(".outer-aside-content")).children(".title-aside").children(".tab-aside"),a=e.children(".content-aside").children(".tabela"),t.each(function(){$(this).hasClass("active")?$(this).removeClass("active"):$(this).addClass("active")}),a.each(function(e){$(this).hasClass("active")?$(this).removeClass("active"):$(this).addClass("active")})}),$(".pic-item").click(function(){var e,t;t=$(this).attr("src"),(e=$(this).parent().closest("figure").children(".main-img")).fadeOut(400,function(){e.attr("src",t),e.fadeIn(400)})}),$(".open-table").click(function(){var e;e=$(this).parent(".outer-content-tabela-mobile").children(".content-tabela-mobile"),$(".content-tabela-mobile").removeClass("active"),e.addClass("active")}),$(window).scroll(function(e){180<$(window).scrollTop()?($(".header-home").addClass("fixed"),$("html,body").css("padding-top","130px")):($(".header-home").removeClass("fixed"),$("html,body").css("padding-top","0px"))}),$(".slide-certifications-mobile").slick({infinite:!0,speed:300,slidesToShow:1,variableWidth:!0}),$(".anchor").click(function(e){switch($(this).data("scroll")){case"Orcamento":return $("html, body").animate({scrollTop:$(".container-form").offset().top},1e3),!1;case"Prensa-Cabos":$("html, body").animate({scrollTop:$(".container-industrial-line").offset().top-300},1e3)}}),$("#first-map").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5052593791643!2d-46.6623020845557!3d-23.550290384688456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5831ce745f75%3A0xa5c7d73d6946021e!2sR.+Goi%C3%A1s%2C+22+-+Higien%C3%B3polis%2C+S%C3%A3o+Paulo+-+SP%2C+01244-030!5e0!3m2!1spt-BR!2sbr!4v1556043721358!5m2!1spt-BR!2sbr"),$("#second-map").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0276046407566!2d-46.85259628455629!3d-23.49551518471565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf023b9094d6e1%3A0x7bc2a35445199cdd!2sAlameda+Madeira+-+Alphaville+Industrial%2C+Barueri+-+SP%2C+06454-010!5e0!3m2!1spt-BR!2sbr!4v1556043847102!5m2!1spt-BR!2sbr")});