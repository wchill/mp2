$('ul.menu > li > a').on('click', function(e) {
  e.preventDefault();
  var id= $(this).attr('section');
  var navbarHeight = 41;
  var targetPosition = $('#' + id).offset().top;
  targetPosition -= navbarHeight;
  $('html, body').animate({scrollTop: targetPosition}, 500);
});

$('.carousel').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
