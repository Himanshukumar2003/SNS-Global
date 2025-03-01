



document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("fixed-nav");
        } else {
            navbar.classList.remove("fixed-nav");
        }
    });
});




var swiper = new Swiper(".hero-swiper", {
    loop: false,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: false,
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




var swiper = new Swiper(".expanding", {
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


var swiper = new Swiper('.banner', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper(".clints", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay:800,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
        },
        576: {
            slidesPerView: 3,
        },
        400: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var statsSection = document.querySelector(".stats-container");
    var statNumbers = document.querySelectorAll(".stat-item h1");
    var animationTriggered = false;

    function animateNumbers() {
        statNumbers.forEach((element) => {
            var target = parseFloat(element.getAttribute("data-target"));
            var current = 0;
            var increment = target / 100; // Smooth count
            var duration = 2000; // 2 seconds
            var stepTime = duration / 100;

            var counter = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.innerHTML = target + element.innerHTML.replace(/[0-9.]+/, ""); // Keep existing text
                    clearInterval(counter);
                } else {
                    element.innerHTML = Math.round(current) + element.innerHTML.replace(/[0-9.]+/, "");
                }
            }, stepTime);
        });
    }

    var observer = new IntersectionObserver(
        function (entries, observer) {
            if (entries[0].isIntersecting && !animationTriggered) {
                animateNumbers();
                animationTriggered = true; // Prevents re-triggering
                observer.disconnect(); // Stops observing after first trigger
            }
        },
        { threshold: 0.5 }
    );

    observer.observe(statsSection);
});
