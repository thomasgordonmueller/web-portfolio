window.onload = function() {
  fadeLoader();

  setTimeout(() => {
    // animate image
    TweenMax.to('#image-frame', 1.3, {width: '70%', height: '70%', opacity: 1, ease: Elastic.easeOut});

    // animate titles
    animateAboutTitle();
  }, 1500);
}

// animate titles & spacer line function
function animateAboutTitle() {
  let titleArray = ['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E', 'A', 't', ' ',  'L', 'e', 'a', 's', 't', ' ', 'a', ' ', 'l', 'i', 't', 't', 'l', 'e', ' ', 'b', 'i', 't'];
  let titleCounter = 0;

  let letterInterval = setInterval(() => {
    if (titleCounter < 8) {
      addTitle(titleCounter++, 'about-title');
    } else if (titleCounter < 29){
      addTitle(titleCounter++, 'about-subtitle');
    } else {
      clearInterval(letterInterval);

      // animate spacer line & paragraphs
      TweenMax.to('#about-spacer-line', 1, {width: '50%', delay: 0.3, ease: Power2.easeInOut});
      TweenMax.to('.about-paragraph', 1, {opacity: 1, delay: 0.3, ease: Power2.easeInOut});
    }
  }, 40);

  // add letters into the html
  function addTitle(arrayIndex, title) {
    let spanText = document.createElement('span');
    spanText.innerHTML = titleArray[arrayIndex];
    document.getElementById(title).appendChild(spanText);
  }
}

