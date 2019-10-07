document.addEventListener("DOMContentLoaded", function (event) {
    window.onload = function () {
        console.log("Loaded!");
        const carousel = document.querySelector('.top-carousel');
        const containerFeatures = document.querySelector('.container-features');
        const indexMain = document.querySelector('.index-main');
        const loadingAnim = document.querySelector('.lds-hive');

        const tl = new TimelineMax();

        tl.fromTo(indexMain, 1, { opacity: 0 }, { opacity: 1 })
            .fromTo(loadingAnim, 1, { opacity: 1 }, { opacity: 0 }, "-=1")
            .fromTo(carousel, 3, { x: '-10%', opacity: 0 }, { x: '0%', opacity: 1 })
            .fromTo(containerFeatures, 3, { opacity: 0 }, { opacity: 1}, "-=2");
    };
});

