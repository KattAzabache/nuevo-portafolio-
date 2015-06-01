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
  if ($(window).width() <= 700) {
    $(".menudes a").click(function(){
  		contador = 1;
      $('nav').animate({
        left: '-100%'
      });
    })
  };
});

/*scroll*/
$(document).ready(function(){
  $(window).scroll(function(){
    var prueba = $(this).scrollTop();
    $("#nav").text(prueba);
    if (prueba > 658) {
      $(".menudes").addClass("navegacion");
      $(".marca").addClass("marca1");
      $(".menu_bar").addClass("menu-responsive");
    }
      else if (prueba < 658) {
      $(".menudes").removeClass("navegacion");
      $(".marca").removeClass("marca1");
      $(".menu_bar").addClass("menu-responsive");
    }
  });
});












$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})






