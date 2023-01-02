console.log("Here");
$('.fade').slick({
    infinite: true,
    dots: false,
    speed: 800,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
  });
  $('.market-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    autoplay: true,
    dots: true,
    speed: 400,
  });