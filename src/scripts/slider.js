import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

/* NEW FURNITURE - slider */

tns({
  container: '.bed-slider',
  items: 1,
  slideBy: 'page',
  speed: 600,
  controls: false,
  autoplay: false,
  autoplayButtonOutput: false,
  preventScrollOnTouch: 'auto',
  gutter: 4,
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
});

tns({
  container: '.chair-slider',
  items: 1,
  slideBy: 'page',
  speed: 600,
  controls: false,
  autoplay: false,
  autoplayButtonOutput: false,
  preventScrollOnTouch: 'auto',
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
});

tns({
  container: '.sofa-slider',
  items: 1,
  slideBy: 'page',
  speed: 600,
  controls: false,
  autoplay: false,
  autoplayButtonOutput: false,
  preventScrollOnTouch: 'auto',
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
});

tns({
  container: '.table-slider',
  items: 1,
  slideBy: 'page',
  speed: 600,
  controls: false,
  autoplay: false,
  autoplayButtonOutput: false,
  preventScrollOnTouch: 'auto',
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
});

tns({
  container: '.dining-slider',
  items: 1,
  slideBy: 'page',
  speed: 600,
  controls: false,
  autoplay: false,
  autoplayButtonOutput: false,
  preventScrollOnTouch: 'auto',
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
});
