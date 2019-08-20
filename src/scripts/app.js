/***** Stars rating *****/

const starsPan = document.querySelectorAll('.stars'); // select all stars panels

for (let panel of starsPan) {
  panel.addEventListener('click', e => {
    e.preventDefault(); // prevent target acting like a link
    console.log('click');
    if (e.target.tagName === 'A') {
      var allStars = panel.querySelectorAll('a'); // select all stars in panel
      var allStarsArr = [...allStars]; // make array from allStars
      const starIndex = allStarsArr.indexOf(e.target); // selected star

      for (let i = 0; i <= starIndex; i++) {
        allStarsArr[i].classList.add('clicked');
      }

      for (let i = starIndex + 1; i < allStarsArr.length; i++) {
        allStarsArr[i].classList.remove('clicked');
      }
    }
  });

  panel.addEventListener('mouseover', e => {
    if (e.target.tagName === 'A') {
      var allStars = panel.querySelectorAll('a');
      var allStarsArr = [...allStars];
      const starIndex = allStarsArr.indexOf(e.target);
  
      for (let i = 0; i <= starIndex; i++) {
        allStarsArr[i].classList.add('full');
      }

      for (let i = starIndex + 1; i < allStarsArr.length; i++) {
        allStarsArr[i].classList.remove('full');
      }
    }
  });

  panel.addEventListener('mouseleave', e => {
    var allStars = panel.querySelectorAll('a');
    console.log(allStars);
    var allStarsArr = [...allStars];
    console.log(allStarsArr);
    const starIndex = allStarsArr.indexOf(e.target);
    console.log(starIndex);

    for (let i = 0; i < allStarsArr.length; i++) {
      allStarsArr[i].classList.remove('full');
    }
  });
}

import './slider.js';
