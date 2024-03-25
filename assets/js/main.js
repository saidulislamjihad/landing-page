//Review slider Js
$('.review__items-wrapper').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

//Testimonial slider Js
$('.choose__slider-items-wrapper').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});