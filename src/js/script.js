function initMap() {
  var designio = {lat: -31.773446,lng:  -52.339058};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 18, center: designio, title: 'Matheus'});
  var marker = new google.maps.Marker({position: designio, map: map});
}

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
              $('.menu').addClass('fixed');
              $('.logo').addClass('logo-min');
      } else {
          $('.menu').removeClass('fixed');
          $('.logo').removeClass('logo-min');
      }
});

$('.menu a[href^="#"]').on('click', function(e) {
  let scroll;
	e.preventDefault();
	let id = $(this).attr('href'),
  targetOffset = $(id).offset().top;
  scroll = 100;
	$('html, body').animate({ 
		scrollTop: targetOffset - scroll
	}, 500);
});



