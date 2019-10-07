document.addEventListener("DOMContentLoaded", function (event) {
    window.onload = function () {
        const carousel = document.querySelector('.top-carousel');
        const containerFeatures = document.querySelector('.container-features');

        const tl = new TimelineMax();

        tl.fromTo(carousel, 3, { x: '-10%', opacity: 0 }, { x: '0%', opacity: 1, ease: Power2.easeInOut })
            .fromTo(containerFeatures, 3, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }, "-=2");
    };
});

