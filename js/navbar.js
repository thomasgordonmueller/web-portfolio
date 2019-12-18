/* -------------- Mobile Expand --------------- */
let mobileExpandBoolean = 'collapsed'
document.getElementById('mobile-expand-button').onclick = function() {
  if (mobileExpandBoolean === 'collapsed') {
    TweenMax.to('#expand-bar-1', 0.5, {rotationZ: 315, y: 11, ease: Power2.easeInOut});
    TweenMax.to('#expand-bar-2', 0.5, {rotationZ: 360, opacity: 0, ease: Power2.easeInOut});
    TweenMax.to('#expand-bar-3', 0.5, {rotationZ: 405, y: -11, ease: Power2.easeInOut, onComplete: changeBoolean('collapsed')});
    TweenMax.to('.mobile-expand-container', 0.5, {y: '0%'});
  } else if (mobileExpandBoolean === 'expanded') {
    TweenMax.to('#expand-bar-1', 0.5, {rotationZ: 0, y: 0, ease: Power2.easeInOut});
    TweenMax.to('#expand-bar-2', 0.5, {rotationZ: 0, opacity: 1, ease: Power2.easeInOut});
    TweenMax.to('#expand-bar-3', 0.5, {rotationZ: 0, y: 0, ease: Power2.easeInOut, onComplete: changeBoolean('expanded')});
    TweenMax.to('.mobile-expand-container', 0.5, {y: '-100%'});
  }

  function changeBoolean(state) {
    if (state === 'collapsed') {
      mobileExpandBoolean = 'expanded';
    } else if (state === 'expanded') {
      mobileExpandBoolean = 'collapsed';
    }
  }
}
/* \\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\// */