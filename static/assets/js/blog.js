let media = window.matchMedia('(max-width: 767px)');

if (media.matches) {
    $(".blog_hero .slider").slick({
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        rtl:true,
    });
}