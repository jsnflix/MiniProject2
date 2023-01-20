
const swiper = new Swiper(".mySwiper", {
slidesPerView: 1,
spaceBetween: 10,
pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 6000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 40,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 40,
            },
        1024: {
        slidesPerView: 3,
        spaceBetween: 40,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40,
        }
    },
});