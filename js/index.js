







var swiper = new Swiper(".hero-swiper", {
    loop: false,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: false, // Remove next & prev buttons
});


document.addEventListener("DOMContentLoaded", function () {
    var circularSwiper = new Swiper(".circular-swiper", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});
