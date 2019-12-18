// global variables
let answerOneHeight;
let answerTwoHeight;
let answerThreeHeight;
let questionOneCounter = false;
let questionTwoCounter = false;
let questionThreeCounter = false;

// add relax for parallax scrolling
var rellax = new Rellax('.rellax');

// request button hover function
document.getElementById('request-info-button').onmouseover = function() {
  TweenMax.to('#request-info-button', 0.3, {backgroundColor: '#FBFBFB', color: '#5E7989'});

  this.onmouseleave = function() {
    TweenMax.to('#request-info-button', 0.3, {backgroundColor: '#5E7989', color: '#B1CAE5'});
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

// set height of dropdown answers on page load & resize
function setAnswerContentHeight(a1h, a2h, a3h) {
  if (questionOneCounter === true) {
    TweenMax.set('#question-1-content', {height: a1h});
  }
  if (questionTwoCounter === true) {
    TweenMax.set('#question-2-content', {height: a2h});
  }
  if (questionThreeCounter === true) {
    TweenMax.set('#question-3-content', {height: a3h});
  }
}
window.onload = function() {
  //setAnswerContentHeight();
  answerOneHeight = document.getElementById('question-1-content-ghost').clientHeight;
  answerTwoHeight = document.getElementById('question-2-content-ghost').clientHeight;
  answerThreeHeight = document.getElementById('question-3-content-ghost').clientHeight;
  document.getElementById('question-1-content').style.height = 0;
  document.getElementById('question-2-content').style.height = 0;
  document.getElementById('question-3-content').style.height = 0;
}
window.onresize = function() {
  answerOneHeight = document.getElementById('question-1-content-ghost').clientHeight;
  answerTwoHeight = document.getElementById('question-2-content-ghost').clientHeight;
  answerThreeHeight = document.getElementById('question-3-content-ghost').clientHeight;
  setAnswerContentHeight(answerOneHeight, answerTwoHeight, answerThreeHeight);
}

// question one expand functions
document.getElementById('question-1').onclick = function() {
  if (questionOneCounter === false) {
    document.getElementById('question-1-content').style.position = "relative";
    TweenMax.to('#question-1-content', 0.5, {visibility: 'visible', height: answerOneHeight, ease: Power2.easeInOut});
    TweenMax.to('#question-1 > img', 0.5, {rotationZ: 180, ease: Power2.easeInOut});
    questionOneCounter = true;
  } else {
    TweenMax.to('#question-1-content', 0.5, {height: '0', ease: Power2.easeInOut});
    TweenMax.to('#question-1 > img', 0.5, {rotationZ: 0, ease: Power2.easeInOut});
    questionOneCounter = false;
  }
}
// question two expand functions
document.getElementById('question-2').onclick = function() {
  if (questionTwoCounter === false) {
    document.getElementById('question-2-content').style.position = 'relative';
    TweenMax.to('#question-2-content', 0.5, {visibility: 'visible', height: answerTwoHeight, ease: Power2.easeInOut});
    TweenMax.to('#question-2 > img', 0.5, {rotationZ: 180, ease: Power2.easeInOut});
    questionTwoCounter = true;
  } else {
    TweenMax.to('#question-2-content', 0.5, {height: '0', ease: Power2.easeInOut});
    TweenMax.to('#question-2 > img', 0.5, {rotationZ: 0, ease: Power2.easeInOut});
    questionTwoCounter = false;
  }
}
// question three expand functions
document.getElementById('question-3').onclick = function() {
  if (questionThreeCounter === false) {
    document.getElementById('question-3-content').style.position = 'relative';
    TweenMax.to('#question-3-content', 0.5, {visibility: 'visible', height: answerThreeHeight, ease: Power2.easeInOut});
    TweenMax.to('#question-3 > img', 0.5, {rotationZ: 180, ease: Power2.easeInOut});
    questionThreeCounter = true;
  } else {
    TweenMax.to('#question-3-content', 0.5, {height: '0', ease: Power2.easeInOut});
    TweenMax.to('#question-3 > img', 0.5, {rotationZ: 0, ease: Power2.easeInOut});
    questionThreeCounter = false;
  }
}


// scrollmagic & tweens
let controller = new ScrollMagic.Controller();

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