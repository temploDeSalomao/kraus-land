$(window).ready(function(){$(".btn_esconder").click(function(i){$(".main-bg").toggleClass("active"),$(this).val("Show"),i()}),$(".tab-aside").click(function(){"none"!=$("#1").css("display")?$("#2").html($("#static").html()).show().siblings("div").hide():"none"!=$("#2").css("display")&&$("#1").show().siblings("div").hide()})});