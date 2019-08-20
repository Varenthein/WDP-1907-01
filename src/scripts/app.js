/** *** Stars rating *****/

const starsPan = document.querySelectorAll('.stars'); // select all stars panels

for (let panel of starsPan) {
  panel.addEventListener('click', e => {
    e.preventDefault(); // prevent target acting like a link
    console.log('click');
    if (e.target.tagName === 'A') {
      // console.log(e.target);
      var allStars = panel.querySelectorAll('a'); // select all stars in panel
      // console.log(allStars);
      var allStarsArr = [...allStars]; // make array from allStars
      // console.log(allStarsArr);
      const starIndex = allStarsArr.indexOf(e.target); // selected star
      // console.log(starIndex);

      for (let i = 0; i <= starIndex; i++) {
        // console.log(i);
        allStarsArr[i].classList.add('clicked');
      }

      for (let i = starIndex + 1; i < allStarsArr.length; i++) {
        // console.log(i);
        allStarsArr[i].classList.remove('clicked');
      }
    }
  });

  panel.addEventListener('mouseover', e => {
    // e.preventDefault();
    if (e.target.tagName === 'A') {
      console.log('mouseover');
      // console.log(e.target);
      var allStars = panel.querySelectorAll('a');
      // console.log(allStars);
      var allStarsArr = [...allStars];
      // console.log(allStarsArr);
      const starIndex = allStarsArr.indexOf(e.target);
      // console.log(starIndex);

      for (let i = 0; i <= starIndex; i++) {
        // console.log(i);
        allStarsArr[i].classList.add('full');
      }

      for (let i = starIndex + 1; i < allStarsArr.length; i++) {
        // console.log(i);
        allStarsArr[i].classList.remove('full');
      }
    }
  });

  panel.addEventListener('mouseleave', e => {
    console.log('mouseleave');
    // console.log(e.target);
    var allStars = panel.querySelectorAll('a');
    console.log(allStars);
    var allStarsArr = [...allStars];
    console.log(allStarsArr);
    const starIndex = allStarsArr.indexOf(e.target);
    console.log(starIndex);

    for (let i = 0; i < allStarsArr.length; i++) {
      // console.log(i);
      allStarsArr[i].classList.remove('full');
    }
  });
}
