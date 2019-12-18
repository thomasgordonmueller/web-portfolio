/* ************************************************************ */
/* ----------------------- Index Js --------------------------- */
/* ____________________________________________________________ */


/* -------------- Background Js --------------- */
let i, j;
let backgroundParent = document.getElementById('landing-background');
let ballSizeArray = [ '35px', '45px', '55px', '65px', '75px'];
let ballColorArray = ['red', 'blue', 'green', '#181818'];
var rellax = new Rellax('.rellax');

// create circles
for (i=0; i<30; i++) {
  let backgroundChild = document.createElement('div');
  backgroundChild.setAttribute('id', `ball-${i}`);
  backgroundParent.appendChild(backgroundChild);

  let ballSize = ballSizeArray[Math.floor(Math.random() * 5)];
  let ballColor = ballColorArray[Math.floor(Math.random() * 4)];
  backgroundChild.setAttribute('style', `width: ${ballSize}; height: ${ballSize}; background-color: ${ballColor}`);

  let left = (Math.random() * 100).toPrecision(2);
  let top = (Math.random() * 100).toPrecision(2);
  TweenMax.to(`#ball-${i}`, 0, {left: `${left}%`});
  TweenMax.to(`#ball-${i}`, 0, {top: `${top}%`});

  if (i < 10) {
    translateBall25(`#ball-${i}`);
  } else if (i < 20 && i > 9) {
    translateBall30(`#ball-${i}`);
  } else {
    translateBall35(`#ball-${i}`);
  }
}

// animate intervals
let animateInterval1 = setInterval(() => {
  for (j=0; j<10; j++) {
    translateBall25(`#ball-${j}`);
  }
}, 25000);
let animateInterval2 = setInterval(() => {
  for (j=10; j<20; j++) {
    translateBall30(`#ball-${j}`);
  }
}, 30000);
let animateInterval3 = setInterval(() => {
  for (j=20; j<30; j++) {
    translateBall35(`#ball-${j}`);
  }
}, 35000);

// clear intervals on page unload
window.onbeforeunload = function() {
  clearInterval(animateInterval1);
  clearInterval(animateInterval2);
  clearInterval(animateInterval3);
}

// assign animations
function translateBall25(ball) {
  let randX = (Math.random() * 100).toPrecision(2);
  let randY = (Math.random() * 100).toPrecision(2);
  TweenMax.to(ball, 25, {left: `${randX}%`, ease: Power1.easeInOut});
  TweenMax.to(ball, 25, {top: `${randY}%`, ease: Power1.easeInOut});
}
function translateBall30(ball) {
  let randX = (Math.random() * 100).toPrecision(2);
  let randY = (Math.random() * 100).toPrecision(2);
  TweenMax.to(ball, 30, {left: `${randX}%`, ease: Power1.easeInOut});
  TweenMax.to(ball, 30, {top: `${randY}%`, ease: Power1.easeInOut});
}
function translateBall35(ball) {
  let randX = (Math.random() * 100).toPrecision(2);
  let randY = (Math.random() * 100).toPrecision(2);
  TweenMax.to(ball, 35, {left: `${randX}%`, ease: Power1.easeInOut});
  TweenMax.to(ball, 35, {top: `${randY}%`, ease: Power1.easeInOut});
}

// animate circles
$('#landing-background > div').mouseenter(function() {
  let id = $(this).attr('id');
  let idNumber = Number(id.substr(5));
  let translateX = Math.floor((Math.random() * 20) + 20);
  let translateY = Math.floor((Math.random() * 20) + 20);

  if (Math.random() > 0.5) {
    TweenMax.to(`#ball-${idNumber}`, 0.8, {x: translateX, ease: Power3.easeOut});
    TweenMax.to(`#ball-${idNumber}`, 0.8, {y: translateY, ease: Power3.easeOut});
  } else {
    TweenMax.to(`#ball-${idNumber}`, 0.8, {x: `-${translateX}`, ease: Power3.easeOut});
    TweenMax.to(`#ball-${idNumber}`, 0.8, {y: `-${translateY}`, ease: Power3.easeOut});
  }
});

// animate buttons
$('#button-cover-view').mouseenter(function() {
  let borderOpacityTween = TweenMax.to('.view-border', 0.3, {opacity: 1, ease: Power2.easeIn});
  let backgroundTween = TweenMax.to($(this), 0.3, {backgroundColor: '#F7FBFB'});
  let buttonTween = TweenMax.to('#view-work-button', 0, {backgroundColor: '#F7FBFB'});
  let textTween = TweenMax.to($(this), 0.3, {color: '#181818'});
  let borderTopTween = TweenMax.to('#view-top', 0.3, {width: '100%', ease: Power2.easeIn});
  let borderRightTween = TweenMax.to('#view-right', 0.3, {height: '100%', ease: Power2.easeIn});
  let borderBottomTween = TweenMax.to('#view-bottom', 0.3, {width: '100%', ease: Power2.easeIn});
  let borderLeftTween = TweenMax.to('#view-left', 0.3, {height: '100%', ease: Power2.easeIn});

  $('#button-cover-view').mouseleave(function() {
    borderOpacityTween.kill();
    backgroundTween.kill();
    buttonTween.kill();
    textTween.kill();
    borderTopTween.kill();
    borderRightTween.kill();
    borderBottomTween.kill();
    borderLeftTween.kill();

    TweenMax.to('.view-border', 0.3, {opacity: 0, ease: Power2.easeIn});
    TweenMax.to($(this), 0.3, {backgroundColor: '#181818'});
    TweenMax.to('#view-work-button', 0.3, {backgroundColor: '#181818'});
    TweenMax.to($(this), 0.3, {color: '#F7FBFB'});
    TweenMax.to('#view-top', 0, {width: '0px', ease: Power2.easeIn});
    TweenMax.to('#view-right', 0, {height: '0px', ease: Power2.easeIn});
    TweenMax.to('#view-bottom', 0, {width: '0px', ease: Power2.easeIn});
    TweenMax.to('#view-left', 0, {height: '0px', ease: Power2.easeIn});
  })
});
$('#button-cover-about').mouseenter(function() {
  let borderOpacityTween = TweenMax.to('.about-border', 0.3, {opacity: 1, ease: Power2.easeIn});
  let backgroundTween = TweenMax.to($(this), 0.3, {backgroundColor: '#F7FBFB'});
  let buttonTween = TweenMax.to('#about-me-button', 0, {backgroundColor: '#F7FBFB'});
  let textTween = TweenMax.to($(this), 0.3, {color: '#181818'});
  let borderTopTween = TweenMax.to('#about-top', 0.3, {width: '100%', ease: Power2.easeIn});
  let borderRightTween = TweenMax.to('#about-right', 0.3, {height: '100%', ease: Power2.easeIn});
  let borderBottomTween = TweenMax.to('#about-bottom', 0.3, {width: '100%', ease: Power2.easeIn});
  let borderLeftTween = TweenMax.to('#about-left', 0.3, {height: '100%', ease: Power2.easeIn});

  $('#button-cover-about').mouseleave(function() {
    borderOpacityTween.kill();
    backgroundTween.kill();
    buttonTween.kill();
    textTween.kill();
    borderTopTween.kill();
    borderRightTween.kill();
    borderBottomTween.kill();
    borderLeftTween.kill();

    TweenMax.to('.about-border', 0.3, {opacity: 0, ease: Power2.easeIn});
    TweenMax.to($(this), 0.3, {backgroundColor: '#181818'});
    TweenMax.to('#about-me-button', 0.3, {backgroundColor: '#181818'});
    TweenMax.to($(this), 0.3, {color: '#F7FBFB'});
    TweenMax.to('#about-top', 0, {width: '0px', ease: Power2.easeIn});
    TweenMax.to('#about-right', 0, {height: '0px', ease: Power2.easeIn});
    TweenMax.to('#about-bottom', 0, {width: '0px', ease: Power2.easeIn});
    TweenMax.to('#about-left', 0, {height: '0px', ease: Power2.easeIn});
  })
});
/* \\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\// */


/* ---------------- Skills Js ----------------- */
// scroll magic controller 
let controller = new ScrollMagic.Controller();

// skill container scenes
new ScrollMagic.Scene({
  triggerElement: '#skills-container',
  reverse: false
})
.setTween('#skills-title-container', 1, {opacity: 1, x: 0, y: 0})
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#bars-container',
  offset: -100,
  reverse: false
})
.setTween('#html-bar > .bar', 1, {paddingRight: '43%', ease: Power3.easeInOut})
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#bars-container',
  offset: -100,
  reverse: false
})
.setTween('#react-bar > .bar', 1, {
    paddingRight: '11%', ease: Power3.easeInOut, delay: 0.1
  })
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#bars-container',
  offset: -100,
  reverse: false
})
.setTween('#css-bar > .bar', 1, {
    paddingRight: '33%', ease: Power3.easeInOut, delay: 0.2
  })
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#bars-container',
  offset: -100,
  reverse: false
})
.setTween('#javascript-bar > .bar', 1, {
    paddingRight: '33%', ease: Power3.easeInOut, delay: 0.3
  })
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#bars-container',
  offset: -100,
  reverse: false
})
.setTween('#sass-bar > .bar', 1, {
    paddingRight: '22%', ease: Power3.easeInOut, delay: 0.4
  })
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#bars-container',
  offset: -100,
  reverse: false
})
.setTween('#photo', 1, {opacity: 1, ease: Power3.easeInOut})
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#bars-container',
  offset: -50,
  reverse: false
})
.setTween('#paint', 1, {opacity: 1, ease: Power3.easeInOut})
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#bars-container',
  reverse: false
})
.setTween('#audio', 1, {opacity: 1, ease: Power3.easeInOut})
.addTo(controller);
/* \\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\// */