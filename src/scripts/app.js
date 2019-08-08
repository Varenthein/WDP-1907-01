import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

/* NEW FURNITURE - slider */
let furnitureSlider = tns({
  container: '.my-slider',
  items: 1,
  slideBy: 'page',
  loop: true,
  mouseDrag: true,
  speed: 4000,
  navContainer: '.product-dots',
  controls: false,
  controlsText: false,
  swipeAngle: false,
  responsive: {
    576: {
      items: 2
    },
    768: {
      items: 2
    },
    992: {
      items: 4
    }
  }
});

window.addEventListener('resize', function () {
  furnitureSlider.rebuild();
});
