// photo on hover functions
$('.grid-image').mouseenter(function() {
  TweenMax.to($(this), 0.3, {width: '105%', ease: Power2.easeInOut});

  $(this).mouseleave(function() {
    TweenMax.to($(this), 0.3, {width: '101%', ease: Power2.easeInOut});
  });
});
$('#glacier-wide').mouseenter(function() {
  TweenMax.to($(this), 0.3, {width: '110%', ease: Power2.easeInOut});

  $(this).mouseleave(function() {
    TweenMax.to($(this), 0.3, {width: '105%', ease: Power2.easeInOut});
  });
});
$('#denali-panorama').mouseenter(function() {
  TweenMax.to($(this), 0.3, {width: '115%', ease: Power2.easeInOut});

  $(this).mouseleave(function() {
    TweenMax.to($(this), 0.3, {width: '110%', ease: Power2.easeInOut});
  });
});

// photo viewer variables
let photosArray = ['#a', '#b', '#c', '#d', '#e', '#f', '#g', '#h', '#i', '#j', '#k', '#l', '#m', '#n', '#o', '#p', '#q', '#r', '#s'];
let arrayIndex = 0;
let zoomTracker = 0;

// photo click functions
$('#a, #b, #c, #d, #e, #f, #g, #h, #i, #j, #k, #l, #m, #n, #o, #p, #q, #r, #s').click(function() {
  let photoId = '#' + $(this).attr('id');
  arrayIndex = photosArray.indexOf(photoId);
  let image = $(this).attr('image');

  document.getElementById('full-view-image').style.backgroundImage = `url(${image})`;
  TweenMax.set('#full-view-container', {visibility: 'visible'});
  TweenMax.to('#full-view-container', 0.5, {opacity: 1, width: '100vw', ease: Power2.easeInOut});

  setTimeout(() => {
    document.getElementById('images-grid-container').setAttribute('style', 'filter: blur(8px);');
  }, 500);

  $('#close-view-button').click(function() {
    document.getElementById('images-grid-container').setAttribute('style', 'filter: none;');
    TweenMax.to('#full-view-container', 0.5, {opacity: 0, width: '50vw', ease: Power2.easeInOut});
    TweenMax.set('#full-view-container', {visibility: 'hidden', delay: 0.5});
    TweenMax.set('#full-view-image', {width: '100%', height: '100%', delay: 0.5});
    zoomTracker = 0;
  });
});

// photo zoom functions
document.getElementById('zoom-in-button').onclick = function() {
  if (zoomTracker === 0) {
    TweenMax.to('#full-view-image', 0.5, {width: '125%', height: '125%', ease: Power2.easeInOut});
    zoomTracker++;
  } else if (zoomTracker === 1) {
    TweenMax.to('#full-view-image', 0.5, {width: '150%', height: '150%', ease: Power2.easeInOut});
    zoomTracker++;
  } else if (zoomTracker === 2) {
    TweenMax.to('#full-view-image', 0.5, {width: '175%', height: '175%', ease: Power2.easeInOut});
    zoomTracker++;
  }
}
document.getElementById('zoom-out-button').onclick = function() {
  if (zoomTracker === 3) {
    TweenMax.to('#full-view-image', 0.5, {width: '150%', height: '150%', ease: Power2.easeInOut});
    zoomTracker--;
  } else if (zoomTracker === 2) {
    TweenMax.to('#full-view-image', 0.5, {width: '125%', height: '125%', ease: Power2.easeInOut});
    zoomTracker--;
  } else if (zoomTracker === 1) {
    TweenMax.to('#full-view-image', 0.5, {width: '100%', height: '100%', ease: Power2.easeInOut});
    zoomTracker--;
  }
}

// photo slide functions
document.getElementById('next-image-button').onclick = function() {
  if (arrayIndex < 18) {
    arrayIndex++;
  } else {
    arrayIndex = 0;
  }

  let displayImage = $(photosArray[arrayIndex]).attr('image');

  let changeImageLeft = new TimelineMax({repeat: 0});
  changeImageLeft.to('#full-view-image', 0.3, {left: '0%', opacity: 0, ease: Power2.easeIn});
  changeImageLeft.to('#full-view-image', 0, {left: '100%'});
  changeImageLeft.add(function() {
    TweenMax.set('#full-view-image', {width: '100%', height: '100%'});
    zoomTracker = 0;
    document.getElementById('full-view-image').style.backgroundImage = `url(${displayImage})`;
  });
  changeImageLeft.to('#full-view-image', 0.3, {left: '50%', opacity: 1, ease: Power2.easeOut});
}
document.getElementById('previous-image-button').onclick = function() {
  if (arrayIndex > 0) {
    arrayIndex--;
  } else {
    arrayIndex = 18;
  }

  let displayImage = $(photosArray[arrayIndex]).attr('image');

  let changeImageRight = new TimelineMax({repeat: 0});
  changeImageRight.to('#full-view-image', 0.3, {left: '100%', opacity: 0, ease: Power2.easeIn});
  changeImageRight.to('#full-view-image', 0, {left: '0%'});
  changeImageRight.add(function() {
    TweenMax.set('#full-view-image', {width: '100%', height: '100%'});
    zoomTracker = 0;
    document.getElementById('full-view-image').style.backgroundImage = `url(${displayImage})`;
  });
  changeImageRight.to('#full-view-image', 0.3, {left: '50%', opacity: 1, ease: Power2.easeOut});
}