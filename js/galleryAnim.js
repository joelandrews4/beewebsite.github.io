const gallery = document.querySelector('.gallery');
const jumbotron = document.querySelector('.jumbotron-anim-container');
const jumbotronText = document.querySelector('.jumbotron-container');

const tl = new TimelineMax();

tl.fromTo(jumbotron,3, {x: '-10%', opacity: 0}, {x: '0%', opacity: 1})
.fromTo(jumbotronText, 3, {x: '-10%'}, {x: '0%'}, "-=3")
.fromTo(gallery, 3, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut}, "-=2");