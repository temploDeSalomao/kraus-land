$(window).ready(function(){$(".btn_esconxder").click(function(a){$(".main-bg").toggleClass("active"),$(this).val("Show"),a()}),$(".tab-aside").click(function(a){$(this).each(function(){$(this).hasClass("active")?$(this).removeClass("active"):$(this).addClass("active")}),$("tabela").each(function(){$(this).hasClass("active")?$(this).removeClass("active"):$(this).addClass("active")}),a.stopPropagation()})});