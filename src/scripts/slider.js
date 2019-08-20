import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

/* NEW FURNITURE - slider */
const slider = {
  items: 1,
  slideBy: 'page',
  speed: 1000,
  controls: false,
  autoplay: false,
  autoplayButtonOutput: false,
  preventScrollOnTouch: 'auto',
  gutter: 5,
  mouseDrag: true,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 4
    }
  }
};
tns({
  container: '.bed-slider',
  ...slider
});

tns({
  container: '.chair-slider',
  ...slider
});

tns({
  container: '.sofa-slider',
  ...slider
});

tns({
  container: '.table-slider',
  ...slider
});

tns({
  container: '.dining-slider',
  ...slider
});
