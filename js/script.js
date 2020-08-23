$(document).ready(function(){
  $('.client-slider').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 720,
        settings: {
        slidesToShow: 1,
        arrows: false
        }
      }
    ]
  });
});