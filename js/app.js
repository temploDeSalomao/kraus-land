$(window).ready(function(){$(".tab-aside").click(function(t,e,s){e=(t=$(this).parent().closest(".outer-aside-content")).children(".title-aside").children(".tab-aside"),s=t.children(".content-aside").children(".tabela"),e.each(function(){$(this).hasClass("active")?$(this).removeClass("active"):$(this).addClass("active")}),s.each(function(t){$(this).hasClass("active")?$(this).removeClass("active"):$(this).addClass("active")})}),$(".pic-item").click(function(t,e){e=$(this).attr("src"),(t=$(this).parent().closest("figure").children(".main-img")).fadeOut(400,function(){t.attr("src",e),t.fadeIn(400)})}),$(".open-table").click(function(t,e){e=$(this).parent(".outer-content-tabela-mobile").children(".content-tabela-mobile"),$(".content-tabela-mobile").removeClass("active"),e.addClass("active")}),$(window).scroll(function(t){180<$(window).scrollTop()?($(".header-home").addClass("fixed"),$("html,body").css("padding-top","130px")):($(".header-home").removeClass("fixed"),$("html,body").css("padding-top","0px"))}),$(".slide-certifications-mobile").slick({infinite:!0,speed:300,slidesToShow:1,variableWidth:!0}),$(".anchor").click(function(t){switch($(this).data("scroll")){case"Orcamento":return $("html, body").animate({scrollTop:$(".container-form").offset().top-50},1e3),!1;case"Prensa-Cabos":return $("html, body").animate({scrollTop:$(".container-industrial-line").offset().top-100},1e3),!1}}),$('input[name="telefone"]').blur(function(t,e){""<$(this).val()&&(new RegExp("^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$").test(t)?(t=$(this).val().replace(/(\d{2})(\d{5})(\d{4})/,"($1) $2.$3"),$(this).val(""),$(this).val(t)):($(this).css("border-color","red"),$("input[type='submit']").attr("Disabled","true"),$("input[type='submit']").css({cursor:"not-allowed",background:"#9f6916","border-color":"#9f6916"}),$(".container-submit").hover(function(){$(this).css("color","#000")})))}),$("input[type='submit']").click(function(t,e,s){return t=$(".first-row"),e=$(".second-row"),console.log(t,e),!1}),$(".actions-close").click(function(){$(this).parent().fadeOut(200,function(){$(this).css("transform","translateX(95px)")})}),$("#first-map").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5052593791643!2d-46.6623020845557!3d-23.550290384688456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5831ce745f75%3A0xa5c7d73d6946021e!2sR.+Goi%C3%A1s%2C+22+-+Higien%C3%B3polis%2C+S%C3%A3o+Paulo+-+SP%2C+01244-030!5e0!3m2!1spt-BR!2sbr!4v1556043721358!5m2!1spt-BR!2sbr"),$("#second-map").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0276046407566!2d-46.85259628455629!3d-23.49551518471565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf023b9094d6e1%3A0x7bc2a35445199cdd!2sAlameda+Madeira+-+Alphaville+Industrial%2C+Barueri+-+SP%2C+06454-010!5e0!3m2!1spt-BR!2sbr!4v1556043847102!5m2!1spt-BR!2sbr")});