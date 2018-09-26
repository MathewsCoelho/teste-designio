function initMap() {
  var designio = { lat: -31.773446, lng: -52.339058 };
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 18, center: designio, title: 'Matheus' });
  var marker = new google.maps.Marker({ position: designio, map: map });
}

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.menu').addClass('fixed');
    $('.logo').addClass('logo-min');
  } else {
    $('.menu').removeClass('fixed');
    $('.logo').removeClass('logo-min');
  }
});

$('.menu a[href^="#"]').on('click', function (e) {
  let scroll;
  e.preventDefault();
  let id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
  scroll = 100;
  $('html, body').animate({
    scrollTop: targetOffset - scroll
  }, 500);
});

	
var SPMaskBehavior = function (val) {
  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
spOptions = {
  onKeyPress: function(val, e, field, options) {
      field.mask(SPMaskBehavior.apply({}, arguments), options);
    }
};

$('#telephone').mask(SPMaskBehavior, spOptions);


$('#submit').on('click', function(){
  nome = $('#name').val();
  telephone = $('#telephone').val();
  email = $('#email').val();
  mensagem = $('#message').val();

  if(nome == ''){
    $('#name').addClass('danger');
  }else{
    $('#name').removeClass('danger');
  }

  if(telephone == ''){
    $('#telephone').addClass('danger');
  }else{
    $('#telephone').removeClass('danger');
  }

  if(email == ''){
    $('#email').addClass('danger');
  }else{
    $('#email').removeClass('danger');
  }

  if(mensagem == ''){
    $('#message').addClass('danger');
  }else{
    $('#message').removeClass('danger');
  }
});
