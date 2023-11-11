$(document).ready(function () {
    const slider = $('.hero .slider');

    slider.slick({
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        rtl: true,
        prevArrow: $('.hero .prev_slide'),
        nextArrow: $('.hero .next_slide'),
        appendDots:document.querySelector('.custom_dots'),

        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    $(".special_offers .slider").slick({
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        rtl: true,
        prevArrow: $('.special_offers .action_arrow .prev_slide'),
        nextArrow: $('.special_offers .action_arrow .next_slide'),

        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $(".cta .slider").slick({
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        rtl: true,
        prevArrow: $('.cta .action_arrow .prev_slide'),
        nextArrow: $('.cta .action_arrow .next_slide'),

        responsive: [
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                }
            },
        ]
    });

    $(".blog .slider").slick({
        cssEase: 'linear',
        slidesToShow: 4.5,
        slidesToScroll: 2,
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: $('.blog .action_arrow .prev_slide'),
        nextArrow: $('.blog .action_arrow .next_slide'),

        responsive: [
            {
                breakpoint: 1439,
                settings: {
                    slidesToShow: 3.5
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });



    // const slickdots = document.querySelector('.hero .slick-dots')
    // const slickdotsWidth = slickdots.offsetWidth
    // const slickdotsLeft = slickdots.offsetLeft
    // const prevSlide = document.querySelector('.hero .action_arrow .prev_slide')
    // prevSlide.style.left = slickdotsLeft + 'px'


    // const nextSlide = document.querySelector('.hero .action_arrow .next_slide')
    // nextSlide.style.left = slickdotsLeft + slickdotsWidth + 47 + 'px'

})

