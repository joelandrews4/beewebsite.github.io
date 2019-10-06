const carousel = document.querySelector('.top-carousel');
const containerFeatures = document.querySelector('.container-features');
const Logo = document.querySelectorAll('#Logo path')

const tl = new TimelineMax();

tl.fromTo(carousel, 3, {x: '-10%', opacity: 0}, {x: '0%', opacity: 1, ease: Power2.easeInOut})
.fromTo(containerFeatures, 3, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut}, "-=2");


for(let i = 0; i<Logo.length;i++){
    console.log(`Letter ${i} is ${Logo[i].getTotalLength()}`);
}