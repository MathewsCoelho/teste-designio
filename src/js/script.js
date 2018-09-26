function initMap() {
  var designio = {lat: -31.773446,lng:  -52.339058};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 18, center: designio, title: 'Matheus'});
  var marker = new google.maps.Marker({position: designio, map: map});
}

$(window).scroll(function() {
  console.log('oi');
  if ($(this).scrollTop() > 100) {
              $('.menu').addClass('fixed');
              $('.logo').addClass('logo-min');
      } else {
          $('.menu').removeClass('fixed');
          $('.logo').removeClass('logo-min');
      }
});

