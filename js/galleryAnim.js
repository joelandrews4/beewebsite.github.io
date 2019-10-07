document.addEventListener("DOMContentLoaded", function (event) {
    window.onload = function () {
        const gallery = document.querySelector('.gallery');
        const jumbotron = document.querySelector('.jumbotron-anim-container');
        const jumbotronText = document.querySelector('.jumbotron-container');
        const galleryContainer = document.querySelector('.gallery-container');
        const loadingAnim = document.querySelector('.lds-hive');

        const tl = new TimelineMax();

        tl.fromTo(galleryContainer, 1, { opacity: 0 }, { opacity: 1 })
            .fromTo(loadingAnim, 1, { opacity: 1 }, { opacity: 0 }, "-=1")
            .fromTo(jumbotron, 2, { x: '-10%', opacity: 0 }, { x: '0%', opacity: 1 })
            .fromTo(jumbotronText, 2, { x: '-10%' }, { x: '0%' }, "-=2")
            .fromTo(gallery, 2, { opacity: 0 }, { opacity: 1 , ease: Power2.easeInOut});
    };
});