/***** Stars rating *****/

const starsPan = document.querySelectorAll('.stars'); // select all stars panels

function addStarClass(currentIndex, array) {
  //add 'full' class to star
  for (let i = 0; i <= currentIndex; i++) {
    array[i].classList.add('full');
  }
}

function removeStarClass(currentIndex, array) {
  //remove 'full' class from star
  for (let i = currentIndex + 1; i < array.length; i++) {
    array[i].classList.remove('full');
  }
}

for (let panel of starsPan) {
  panel.addEventListener('click', e => {
    e.preventDefault(); // prevent target acting like a link
    if (e.target.tagName === 'A') {
      let allStars = panel.querySelectorAll('a'); // select all stars in panel
      let allStarsArr = [...allStars]; // make array from allStars
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
      let allStars = panel.querySelectorAll('a');
      let allStarsArr = [...allStars];
      const starIndex = allStarsArr.indexOf(e.target);
      addStarClass(starIndex, allStarsArr);
      removeStarClass(starIndex, allStarsArr);
    }
  });

  panel.addEventListener('mouseleave', e => {
    let allStars = panel.querySelectorAll('a');
    let allStarsArr = [...allStars];
    const starIndex = allStarsArr.indexOf(e.target);
    removeStarClass(starIndex, allStarsArr);
  });
}

import './slider.js';

console.log('hello');
