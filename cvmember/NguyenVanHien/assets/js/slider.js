$(document).ready(function(){
    $(".card-box").slick({
        slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bx bx-left-arrow-alt'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='bx bx-right-arrow-alt'></i></button>",
    });
  });