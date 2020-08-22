$(document).ready(function(){
  $('.client-slider').slick({
    dots: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 720,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
        }
      }
    ]
  });
});