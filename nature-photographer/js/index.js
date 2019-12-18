// animates photo slideshow
let photoslidel = setInterval(() => {
  slidePhotos();
}, 8000);

let slideCounter = 1;
function slidePhotos() {
  if (slideCounter === 1) {
    TweenMax.set('#photo-1, #photo-4', {left: 0});
    TweenMax.to('#photo-1, #photo-2, #photo-3, #photo-4', 0.7, {left: '-=100%', ease: Power2.easeInOut});
    slideCounter++;
  } else if (slideCounter === 2) {
    TweenMax.set('#photo-1', {left: '300%'});
    TweenMax.to('#photo-1, #photo-2, #photo-3, #photo-4', 0.7, {left: '-=100%', ease: Power2.easeInOut});
    slideCounter++;
  } else if (slideCounter === 3) {
    TweenMax.set('#photo-2', {left: '200%'});
    TweenMax.to('#photo-1, #photo-2, #photo-3, #photo-4', 0.7, {left: '-=100%', ease: Power2.easeInOut});
    slideCounter++;
  } else if (slideCounter === 4) {
    TweenMax.set('#photo-3', {left: '100%'});
    TweenMax.to('#photo-1, #photo-2, #photo-3, #photo-4', 0.7, {left: '-=100%', ease: Power2.easeInOut});
    slideCounter = 1;
  } 
}

// mobile expand functions
let expandButton = document.getElementById('mobile-button');
let closeButton = document.getElementById('close-button');

expandButton.onclick = function() {
  TweenMax.to('.mobile-expand-button', 0.3, {x: -100, ease: Power2.easeIn});
  TweenMax.to('.mobile-links-container', 1, {y: 0, ease: Power2.easeInOut, delay: 0.3});
}
closeButton.onclick = function() {
  TweenMax.to('.mobile-links-container', 1, {y: -500, ease: Power2.easeInOut});
  TweenMax.to('.mobile-expand-button', 0.3, {x: 0, ease: Power2.easeOut, delay: 1});
}

// kill slideshow on page unload
window.onbeforeunload = function() {
  clearInterval(photoslidel);
}

// scrollmagic & tweens
let controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
  triggerElement: '#home-about-container',
  offset: -100,
  reverse: false
})
.setTween('#home-about-container > h2', 0.5, {opacity: 1, y: 0})
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#home-about-container',
  offset: 50,
  reverse: false
})
.setTween('.unique-skill', 0.5, {opacity: 1, y: 0})
.addTo(controller);

let enjoyBarTween = new TimelineMax({repeat: 0});
enjoyBarTween.to('#enjoy-naps', 0.5, {width: '50%', ease: Power2.easeInOut});
enjoyBarTween.to('#enjoy-traveling', 0.5, {width: '75%', ease: Power2.easeInOut, delay: 0.1}, 0);
enjoyBarTween.to('#enjoy-pizza', 0.5, {width: '100%', ease: Power2.easeInOut, delay: 0.2}, 0);

new ScrollMagic.Scene({
  triggerElement: '#enjoy-container',
  reverse: false
})
.setTween(enjoyBarTween)
.addTo(controller);

let awardsTween = new TimelineMax({repeat: 0});
awardsTween.to('#mpa-logo', 0.5, {opacity: 1, y: 0});
awardsTween.to('#siena-logo', 0.5, {opacity: 1, y: 0, delay: 0.2}, 0);
awardsTween.to('#swpa-logo', 0.5, {opacity: 1, y: 0, delay: 0.4}, 0);

new ScrollMagic.Scene({
  triggerElement: '#about-awards-container',
  reverse: false,
  offset: -150
})
.setTween(awardsTween)
.addTo(controller);