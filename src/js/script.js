/*function initMap() {
    var myLatLng = {
        lat: -25.363, lng: 131.044
    };

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 4
  });

var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Hello World!'
  });
} */


$(window).scroll(function() {
  console.log('oi');
  if ($(this).scrollTop() > 100) {
              $('.menu').addClass('fixed');
      } else {
          $('.menu').removeClass('fixed');
      }
});


document.getElementById('submit').onclick = function(){

};