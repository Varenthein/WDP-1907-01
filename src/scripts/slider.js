import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

/* Feedback-slider */

tns({
  container: '.feedback-slider',
  items: 1,
  slideBy: 'page',
  speed: 1000,
  controls: false,
  autoplay: false,
  autoplayButtonOutput: false,
  preventScrollOnTouch: 'auto',
  gutter: 5,
  mouseDrag: true,
  navContainer: '.feedback-dots'
});
