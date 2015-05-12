$(document).ready(main);
 
var contador = 1;
 
function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
} 

$(document).ready(function(){
  $(window).scroll(function(){
  var prueba = $(this).scrollTop();
  if (prueba > 658) {
  $(".barra-de-navegacion").addClass("menu-color");
  }
  else if (prueba < 658) {
  $(".barra-de-navegacion").removeClass("menu-color");
  }
  });
});







