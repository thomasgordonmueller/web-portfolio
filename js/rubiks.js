/* ------------ Animation Functions ----------- */
function showCubes(cubeNumber) {
  if (cubeNumber != 14) {
    TweenMax.to(`#cube-rotate-${cubeNumber}`, 0, {opacity: 1});
  }
}

// change text on hover for controlbar
document.getElementById('design-mode').onmouseover = function() {
  TweenMax.to('#design-mode', 0.2, {opacity: 0.8});
  document.getElementById('design-mode').onmouseleave = function() {
    TweenMax.killTweensOf('#design-mode');
    TweenMax.to('#design-mode', 0.2, {opacity: 1});
  }
}
document.getElementById('play-mode').onmouseover = function() {
  TweenMax.to('#play-mode', 0.2, {opacity: 0.8});
  document.getElementById('play-mode').onmouseleave = function() {
    TweenMax.killTweensOf('#play-mode');
    TweenMax.to('#play-mode', 0.2, {opacity: 1});
  }
}

let selectDesignTween = new TimelineMax({repeat: 0});
let selectPlayTween = new TimelineMax({repeat: 0});
document.getElementById('design-mode').onclick = function() {
  designScene.setTween(rubiksDesignTween);
  designScene.addTo(controller);

  TweenMax.killTweensOf('#design-mode, #play-mode');
  selectPlayTween.kill();
  selectPlayTween.clear();
  TweenMax.set('#design-mode', {color: '#595959', backgroundColor: '#d9dfdf'});
  TweenMax.set('#play-mode', {color: '#919191', backgroundColor: '#e2ebec'});

  selectDesignTween.to('#rubiks-container > button', 0.3, {opacity: 0, ease: Power2.easeInOut});
  selectDesignTween.set('#rubiks-container > button', {visibility: 'hidden'});
  selectDesignTween.to('#rubiks-cube', 0.3, {rotationY: -215, rotationX: -45, rotationZ: 30, ease: Power2.easeInOut});
  selectDesignTween.to('#design-arrow-down', 0.3, {visibility: 'visible', opacity: 1, ease: Bounce.easeOut, onComplete: allowDesignScroll});
  function allowDesignScroll() {
    document.body.setAttribute('style', 'height: auto');
  }
}
document.getElementById('play-mode').onclick = function() {
  designScene.remove();
  designScene.removeTween(rubiksDesignTween);
  cubeMoveTween.invalidate();

  TweenMax.killTweensOf('#design-mode, #play-mode');
  selectDesignTween.kill();
  selectDesignTween.clear();
  TweenMax.set('#play-mode', {color: '#595959', backgroundColor: '#d9dfdf'});
  TweenMax.set('#design-mode', {color: '#919191', backgroundColor:'#e2ebec'});

  selectPlayTween.to('#design-arrow-down', 0.3, {visibility: 'hidden', opacity: 0, ease: Power2.easeInOut});
  selectPlayTween.to('#rubiks-cube', 0.3, {rotationY: -39.9, rotationX: -33.4, rotationZ: 22.9, ease: Power2.easeInOut});
  selectPlayTween.to('#rubiks-container > button', 0.3, {visibility: 'visible', opacity: 1, ease: Power2.easeInOut});
  document.body.setAttribute('style', 'height: 100vh');
}

let rubiksPage = $('html, body');
document.getElementById('design-arrow-down').onmouseover = function() {
  let downArrowTween = new TimelineMax({repeat: -1});
  downArrowTween.to('#design-arrow-down', 0.4, {y: -10, ease: Power1.easeOut});
  downArrowTween.to('#design-arrow-down', 1, {y: 0, ease: Bounce.easeOut});
  document.getElementById('design-arrow-down').onmouseleave = function() {
    downArrowTween.kill();
    TweenMax.to('#design-arrow-down', 0.5, {y: 0, ease: Power2.easeInOut});
  }
}
document.getElementById('design-arrow-down').onclick = function() {
  rubiksPage.on('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove', function() {
    rubiksPage.stop();
  });

  rubiksPage.animate({ scrollTop: 10000 }, 8000, function() {
    rubiksPage.off('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove');
  });
}
document.getElementById('design-arrow-up').onmouseover = function() {
  let upArrowTween = new TimelineMax({repeat: -1});
  upArrowTween.to('#design-arrow-up', 0.4, {y: 10, ease: Power1.easeOut});
  upArrowTween.to('#design-arrow-up', 1, {y: 0, ease: Bounce.easeOut});
  document.getElementById('design-arrow-up').onmouseleave = function() {
    upArrowTween.kill();
    TweenMax.to('#design-arrow-up', 0.5, {y: 0, ease: Power2.easeInOut});
  }
}
document.getElementById('design-arrow-up').onclick = function() {
  rubiksPage.on('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove', function() {
    rubiksPage.stop();
  });

  rubiksPage.animate({ scrollTop: 0 }, 8000, function() {
    rubiksPage.off('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove');
  });
}
/* \\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\// */



/* -------------- Onload Function ------------- */
// loader animations
let loaderCubeFold = new TimelineMax({repeat: -1, yoyo: true});
loaderCubeFold.to('#loader-top', 0.3, {x: 36, ease: Power2.easeInOut});
loaderCubeFold.to('#loader-top-right', 0.3, {x: 36, ease: Power2.easeInOut});
loaderCubeFold.to('#loader-back', 0.3, {y: -36, ease: Power2.easeInOut});
loaderCubeFold.to('#loader-left', 0.3, {x: -36, ease: Power2.easeInOut});
loaderCubeFold.to('#loader-front', 0.3, {y: 36, ease: Power2.easeInOut});
loaderCubeFold.to('#loader-back', 0.3, {rotationX: -90, ease: Power2.easeInOut});
loaderCubeFold.to('#loader-left', 0.3, {rotationY: 90, ease: Power2.easeInOut});
loaderCubeFold.to('#loader-front', 0.3, {rotationX: 90, ease: Power2.easeInOut});
loaderCubeFold.to('#loader-top-right', 0.3, {rotationY: -90, ease: Power2.easeInOut});
loaderCubeFold.to('#loader-top', 0.3, {rotationY: -90, x: 0, ease: Power2.easeInOut});
loaderCubeFold.to('#loader-top', 0.2, {});

window.onload = function() {
  let i, j, k;

  alert('The challenge of this project was to build a Rubiks cube without the assistance of a graphics library such as open GL. As a result there are many moving parts and lots of animations which can result in choppy performance and poorly rendered graphics on mobile, Edge, and Firefox.');

  getCubeWidth();
  createDynamicTweens();
  designScene.remove();
  designScene.removeTween(rubiksDesignTween);
  TweenMax.set('#rubiks-cube', {rotationY: -39.9, rotationX: -33.4, rotationZ: 22.9});
  document.body.setAttribute('style', 'height: 100vh');

  // remove opacity for all cubes
  for (i=1; i<28; i++) {
    TweenMax.to(`#cube-rotate-${i}`, 0, {opacity: 0});
  }

  // fade out loader
  TweenMax.to('#rubiks-loader', 1, {opacity: 0});

  // once loader is gone
  setTimeout(() => {
    // kill loader tweens & loader background
    loaderCubeFold.kill();

    // animate cubes
    let cubeInterval = 35;
    let arrowInterval = 10;
    let pickCube = [25, 16, 7, 8, 9, 18, 27, 26, 22, 13, 4, 5, 6, 15, 24, 23, 19, 10, 1, 2, 11, 20, 21, 12, 3];

    for (j=0; j<25; j++) {
      timeFunction(pickCube[j]);
      cubeInterval = cubeInterval * 1.18;
      
      function timeFunction(cubeNumber) {
        setTimeout(() => {
          showCubes(cubeNumber);

          // allow access to arrow functions after last cube loads
          if (cubeNumber === 3) {
            document.getElementById('rubiks-loader').setAttribute('style', 'display: none');
            TweenMax.to('#rubiks-container > button', 0.4, {opacity: 1, ease: Power2.easeInOut});

            setTimeout(() => {
              TweenMax.to('#rubiks-title-left, #rubiks-title-right', 0, {y: -200});
              TweenMax.to('#rubiks-controlbar, #gradient-line-spacer', 0, {y: 100});
              TweenMax.to('#rubiks-title-left, #rubiks-title-right', 0.4, {opacity: 1, y: 0, ease: Power2.easeInOut});
              TweenMax.to('#rubiks-controlbar, #gradient-line-spacer', 0.4, {opacity: 1, y: 0, ease: Power2.easeInOut});
            }, 600);
          }
        }, cubeInterval);
      }
    }

    showCubes(14);
    showCubes(17);
  }, 1000);
}

// scroll to top every time page loads
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
/* \\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\// */



/* ------------ Rubiks Cube Index -------------- */

// indexCubes holds location of individual cubes
let indexCubes = {
  '1': 1, '2': 2, '3': 3,
  '4': 4, '5': 5, '6': 6,
  '7': 7, '8': 8, '9': 9,

  '10': 10, '11': 11, '12': 12,
  '13': 13, '14': 14, '15': 15,
  '16': 16, '17': 17, '18': 18,

  '19': 19, '20': 20, '21': 21,
  '22': 22, '23': 23, '24': 24,
  '25': 25, '26': 26, '27': 27
}

//holds the colors of each face
let indexFaces = {
  a1: 'red', a2: 'red', a3: 'red',
  a4: 'red', a5: 'red', a6: 'red',
  a7: 'red', a8: 'red', a9: 'red',

  b1: 'green', b2: 'green', b3: 'green',
  b4: 'green', b5: 'green', b6: 'green',
  b7: 'green', b8: 'green', b9: 'green',

  c1: 'orange', c2: 'orange', c3: 'orange',
  c4: 'orange', c5: 'orange', c6: 'orange',
  c7: 'orange', c8: 'orange', c9: 'orange',

  d1: 'blue', d2: 'blue', d3: 'blue',
  d4: 'blue', d5: 'blue', d6: 'blue',
  d7: 'blue', d8: 'blue', d9: 'blue',

  e1: 'yellow', e2: 'yellow', e3: 'yellow',
  e4: 'yellow', e5: 'yellow', e6: 'yellow',
  e7: 'yellow', e8: 'yellow', e9: 'yellow',

  f1: 'white', f2: 'white', f3: 'white',
  f4: 'white', f5: 'white', f6: 'white',
  f7: 'white', f8: 'white', f9: 'white'
}
/* \\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\// */



/* ------------- Rubiks Cube Create ------------ */
let cubeCounter = 1;
let translateCounter = 1;
let i, j;

// create 27 individual cubes
for (i=1; i<28; i++) {
  let rubiksParent = document.getElementById('rubiks-cube');
  rubiksParent.appendChild(createCube());
  colorCubes('cube-' + i, i);
  cubeCounter++;
}

// assigns individual cube parents id's
function assignParentId() {
  return 'cube-rotate-' + cubeCounter;
}

// assigns initial cubes id's
function assignCubeId() {
  return 'cube-' + cubeCounter;
}

// creates initial cube
function createCube() {
  let parentDiv = document.createElement('div');
    parentDiv.setAttribute('id', assignParentId());
    parentDiv.setAttribute('class', 'preserve-3d');

    let cubeDiv = document.createElement('div');
    cubeDiv.setAttribute('id', assignCubeId());
    cubeDiv.setAttribute('class', translateCube(translateCounter));
    translateCounter++;
    parentDiv.appendChild(cubeDiv);

    function createCubeFaces(faceSide) {
      let face = document.createElement('div');
      face.setAttribute('class', `face-${faceSide} individual-face`);
      cubeDiv.appendChild(face);

      return face;
    }

    createCubeFaces('front');
    createCubeFaces('right');
    createCubeFaces('back');
    createCubeFaces('left');
    createCubeFaces('top');
    createCubeFaces('bottom');

    function createCubeBackground(faceSide) {
      let face = document.createElement('div');
      face.setAttribute('class', `bg-face-${faceSide}`);
      cubeDiv.appendChild(face);
    }
    
    createCubeBackground('br');
    createCubeBackground('bl');
    createCubeBackground('b');
    createCubeBackground('t');
    createCubeBackground('fr');
    createCubeBackground('fl');
    createCubeBackground('1');
    createCubeBackground('2');
    createCubeBackground('3');

  return parentDiv;
}
/* \\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\// */



/* --------- Rubiks Cube Corrections  ---------- */

// returns classes that translate individual cubes into correct positions
function translateCube(cubeNumber) {
  let translateRight, translateLeft, translateUp, translateDown, translateFront, translateBack;

  if (cubeNumber === 3 || cubeNumber === 6 || cubeNumber === 9 || cubeNumber === 12 || cubeNumber === 15 || cubeNumber === 18 || cubeNumber === 21 || cubeNumber === 24 || cubeNumber === 27) {
    translateRight = 't-r';
  } else {
    translateRight = '';
  }

  if (cubeNumber === 1 || cubeNumber === 4 || cubeNumber === 7 || cubeNumber === 10 || cubeNumber === 13 || cubeNumber === 16 || cubeNumber === 19 || cubeNumber === 22 || cubeNumber === 25) {
    translateLeft = ' t-l';
  } else {
    translateLeft = '';
  }

  if (cubeNumber === 1 || cubeNumber === 2 || cubeNumber === 3 || cubeNumber === 10 || cubeNumber === 11 || cubeNumber === 12 || cubeNumber === 19 || cubeNumber === 20 || cubeNumber === 21) {
    translateUp = ' t-u';
  } else {
    translateUp = '';
  }

  if (cubeNumber === 7 || cubeNumber === 8 || cubeNumber === 9 || cubeNumber === 16 || cubeNumber === 17 || cubeNumber === 18 || cubeNumber === 25 || cubeNumber === 26 || cubeNumber === 27) {
    translateDown = ' t-d';
  } else {
    translateDown = '';
  }

  if (cubeNumber === 1 || cubeNumber === 2 || cubeNumber === 3 || cubeNumber === 4 || cubeNumber === 5 || cubeNumber === 6 || cubeNumber === 7 || cubeNumber === 8 || cubeNumber === 9) {
    translateFront = ' t-f';
  } else {
    translateFront = '';
  }

  if (cubeNumber === 19 || cubeNumber === 20 || cubeNumber === 21 || cubeNumber === 22 || cubeNumber === 23 || cubeNumber === 24 || cubeNumber === 25 || cubeNumber === 26 || cubeNumber === 27) {
    translateBack = ' t-b';
  } else {
    translateBack = '';
  }

  return 'individual-cube ' + translateRight + translateLeft + translateUp + translateDown + translateFront + translateBack;
}

// assigns colors to all of the individual cubes faces 
function colorCubes(cubeName, cubeLocation) {
  let cubeChild0 = document.getElementById(cubeName).childNodes[0];
  let cubeChild1 = document.getElementById(cubeName).childNodes[1];
  let cubeChild2 = document.getElementById(cubeName).childNodes[2];
  let cubeChild3 = document.getElementById(cubeName).childNodes[3];
  let cubeChild4 = document.getElementById(cubeName).childNodes[4];
  let cubeChild5 = document.getElementById(cubeName).childNodes[5];

  if (cubeLocation == 1) {
    cubeChild0.setAttribute('style', `background-color: ${indexFaces.a1};`);
    cubeChild1.setAttribute('style', 'background-color: #181818');
    cubeChild2.setAttribute('style', 'background-color: #181818');
    cubeChild3.setAttribute('style', `background-color: ${indexFaces.d3};`);
    cubeChild4.setAttribute('style', `background-color: ${indexFaces.e7};`);
    cubeChild5.setAttribute('style', 'background-color: #181818');
  } else if (cubeLocation == 2) {
    cubeChild0.setAttribute('style', `background-color: ${indexFaces.a2};`);
    cubeChild1.setAttribute('style', 'background-color: #181818');
    cubeChild2.setAttribute('style', 'background-color: #181818');
    cubeChild3.setAttribute('style', 'background-color: #181818');
    cubeChild4.setAttribute('style', `background-color: ${indexFaces.e8};`);
    cubeChild5.setAttribute('style', 'background-color: #181818');
  } else if (cubeLocation == 3) {
    cubeChild0.setAttribute('style', `background-color: ${indexFaces.a3};`);
    cubeChild1.setAttribute('style', `background-color: ${indexFaces.b1};`);
    cubeChild2.setAttribute('style', 'background-color: #181818');
    cubeChild3.setAttribute('style', 'background-color: #181818');
    cubeChild4.setAttribute('style', `background-color: ${indexFaces.e9};`);
    cubeChild5.setAttribute('style', 'background-color: #181818');
  } else if (cubeLocation == 4) {
    cubeChild0.setAttribute('style', `background-color: ${indexFaces.a4};`);
    cubeChild1.setAttribute('style', 'background-color: #181818');
    cubeChild2.setAttribute('style', 'background-color: #181818');
    cubeChild3.setAttribute('style', `background-color: ${indexFaces.d6};`);
    cubeChild4.setAttribute('style', 'background-color: #181818');
    cubeChild5.setAttribute('style', 'background-color: #181818');
  } else if (cubeLocation == 5) {
    cubeChild0.setAttribute('style', `background-color: ${indexFaces.a5};`);
    cubeChild1.setAttribute('style', 'background-color: #181818');
    cubeChild2.setAttribute('style', 'background-color: #181818');
    cubeChild3.setAttribute('style', 'background-color: #181818');
    cubeChild4.setAttribute('style', 'background-color: #181818');
    cubeChild5.setAttribute('style', 'background-color: #181818');
  } else if (cubeLocation == 6) {
    cubeChild0.setAttribute('style', `background-color: ${indexFaces.a6};`);
    cubeChild1.setAttribute('style', `background-color: ${indexFaces.b4};`);
    cubeChild2.setAttribute('style', 'background-color: #181818');
    cubeChild3.setAttribute('style', 'background-color: #181818');
    cubeChild4.setAttribute('style', 'background-color: #181818');
    cubeChild5.setAttribute('style', 'background-color: #181818');
  } else if (cubeLocation == 7) {
    cubeChild0.setAttribute('style', `background-color: ${indexFaces.a7};`);
    cubeChild1.setAttribute('style', 'background-color: #181818');
    cubeChild2.setAttribute('style', 'background-color: #181818');
    cubeChild3.setAttribute('style', `background-color: ${indexFaces.d9};`);
    cubeChild4.setAttribute('style', 'background-color: #181818');
    cubeChild5.setAttribute('style', `background-color: ${indexFaces.f1};`);
  } else if (cubeLocation == 8) {
    cubeChild0.setAttribute('style', `background-color: ${indexFaces.a8};`);
    cubeChild1.setAttribute('style', 'background-color: #181818');
    cubeChild2.setAttribute('style', 'background-color: #181818');
    cubeChild3.setAttribute('style', 'background-color: #181818');
    cubeChild4.setAttribute('style', 'background-color: #181818');
    cubeChild5.setAttribute('style', `background-color: ${indexFaces.f2};`);
  } else if (cubeLocation == 9) {
    cubeChild0.setAttribute('style', `background-color: ${indexFaces.a9};`);
    cubeChild1.setAttribute('style', `background-color: ${indexFaces.b7};`);
    cubeChild2.setAttribute('style', 'background-color: #181818');
    cubeChild3.setAttribute('style', 'background-color: #181818');
    cubeChild4.setAttribute('style', 'background-color: #181818');
    cubeChild5.setAttribute('style', `background-color: ${indexFaces.f3};`);
  } else if (cubeLocation == 10) {
    cubeChild0.setAttribute('style', 'background-color: #181818');
    cubeChild1.setAttribute('style', 'background-color: #181818');
    cubeChild2.setAttribute('style', 'background-color: #181818');
    cubeChild3.setAttribute('style', `background-color: ${indexFaces.d2};`);
    cubeChild4.setAttribute('style', `background-color: ${indexFaces.e4};`);
    cubeChild5.setAttribute('style', 'background-color: #181818');
  } else if (cubeLocation == 11) {
    cubeChild0.setAttribute('style', 'background-color: #181818');
    cubeChild1.setAttribute('style', 'background-color: #181818');
    cubeChild2.setAttribute('style', 'background-color: #181818');
    cubeChild3.setAttribute('style', 'background-color: #181818');
    cubeChild4.setAttribute('style', `background-color: ${indexFaces.e5};`);
    cubeChild5.setAttribute('style', 'background-color: #181818');
  } else if (cubeLocation == 12) {
    cubeChild0.setAttribute('style', 'background-color: #181818');
    cubeChild1.setAttribute('style', `background-color: ${indexFaces.b2};`);
    cubeChild2.setAttribute('style', 'background-color: #181818');
    cubeChild3.setAttribute('style', 'background-color: #181818');
    cubeChild4.setAttribute('style', `background-color: ${indexFaces.e6};`);
    cubeChild5.setAttribute('style', 'background-color: #181818');
  } else if (cubeLocation == 13) {
    cubeChild0.setAttribute('style', 'background-color: #181818');
    cubeChild1.setAttribute('style', 'background-color: #181818');
    cubeChild2.setAttribute('style', 'background-color: #181818');
    cubeChild3.setAttribute('style', `background-color: ${indexFaces.d5};`);
    cubeChild4.setAttribute('style', 'background-color: #181818');
    cubeChild5.setAttribute('style', 'background-color: #181818');
  } else if (cubeLocation == 15) {
    cubeChild0.setAttribute('style', 'background-color: #181818');
    cubeChild1.setAttribute('style', `background-color: ${indexFaces.b5};`);
    cubeChild2.setAttribute('style', 'background-color: #181818');
    cubeChild3.setAttribute('style', 'background-color: #181818');
    cubeChild4.setAttribute('style', 'background-color: #181818');
    cubeChild5.setAttribute('style', 'background-color: #181818');
  } else if (cubeLocation == 16) {
    cubeChild0.setAttribute('style', 'background-color: #181818');
    cubeChild1.setAttribute('style', 'background-color: #181818');
    cubeChild2.setAttribute('style', 'background-color: #181818');
    cubeChild3.setAttribute('style', `background-color: ${indexFaces.d8};`);
    cubeChild4.setAttribute('style', 'background-color: #181818');
    cubeChild5.setAttribute('style', `background-color: ${indexFaces.f4};`);
  } else if (cubeLocation == 17) {
    cubeChild0.setAttribute('style', 'background-color: #181818');
    cubeChild1.setAttribute('style', 'background-color: #181818');
    cubeChild2.setAttribute('style', 'background-color: #181818');
    cubeChild3.setAttribute('style', 'background-color: #181818');
    cubeChild4.setAttribute('style', 'background-color: #181818');
    cubeChild5.setAttribute('style', `background-color: ${indexFaces.f5};`);
  } else if (cubeLocation == 18) {
    cubeChild0.setAttribute('style', 'background-color: #181818');
    cubeChild1.setAttribute('style', `background-color: ${indexFaces.b8};`);
    cubeChild2.setAttribute('style', 'background-color: #181818');
    cubeChild3.setAttribute('style', 'background-color: #181818');
    cubeChild4.setAttribute('style', 'background-color: #181818');
    cubeChild5.setAttribute('style', `background-color: ${indexFaces.f6};`);
  } else if (cubeLocation == 19) {
    cubeChild0.setAttribute('style', 'background-color: #181818');
    cubeChild1.setAttribute('style', 'background-color: #181818');
    cubeChild2.setAttribute('style', `background-color: ${indexFaces.c3};`);
    cubeChild3.setAttribute('style', `background-color: ${indexFaces.d1};`);
    cubeChild4.setAttribute('style', `background-color: ${indexFaces.e1};`);
    cubeChild5.setAttribute('style', 'background-color: #181818');
  } else if (cubeLocation == 20) {
    cubeChild0.setAttribute('style', 'background-color: #181818');
    cubeChild1.setAttribute('style', 'background-color: #181818');
    cubeChild2.setAttribute('style', `background-color: ${indexFaces.c2};`);
    cubeChild3.setAttribute('style', 'background-color: #181818');
    cubeChild4.setAttribute('style', `background-color: ${indexFaces.e2};`);
    cubeChild5.setAttribute('style', 'background-color: #181818');
  } else if (cubeLocation == 21) {
    cubeChild0.setAttribute('style', 'background-color: #181818');
    cubeChild1.setAttribute('style', `background-color: ${indexFaces.b3};`);
    cubeChild2.setAttribute('style', `background-color: ${indexFaces.c1};`);
    cubeChild3.setAttribute('style', 'background-color: #181818');
    cubeChild4.setAttribute('style', `background-color: ${indexFaces.e3};`);
    cubeChild5.setAttribute('style', 'background-color: #181818');
  } else if (cubeLocation == 22) {
    cubeChild0.setAttribute('style', 'background-color: #181818');
    cubeChild1.setAttribute('style', 'background-color: #181818');
    cubeChild2.setAttribute('style', `background-color: ${indexFaces.c6};`);
    cubeChild3.setAttribute('style', `background-color: ${indexFaces.d4};`);
    cubeChild4.setAttribute('style', 'background-color: #181818');
    cubeChild5.setAttribute('style', 'background-color: #181818');
  } else if (cubeLocation == 23) {
    cubeChild0.setAttribute('style', 'background-color: #181818');
    cubeChild1.setAttribute('style', 'background-color: #181818');
    cubeChild2.setAttribute('style', `background-color: ${indexFaces.c5};`);
    cubeChild3.setAttribute('style', 'background-color: #181818');
    cubeChild4.setAttribute('style', 'background-color: #181818');
    cubeChild5.setAttribute('style', 'background-color: #181818');
  } else if (cubeLocation == 24) {
    cubeChild0.setAttribute('style', 'background-color: #181818');
    cubeChild1.setAttribute('style', `background-color: ${indexFaces.b6};`);
    cubeChild2.setAttribute('style', `background-color: ${indexFaces.c4};`);
    cubeChild3.setAttribute('style', 'background-color: #181818');
    cubeChild4.setAttribute('style', 'background-color: #181818');
    cubeChild5.setAttribute('style', 'background-color: #181818');
  } else if (cubeLocation == 25) {
    cubeChild0.setAttribute('style', 'background-color: #181818');
    cubeChild1.setAttribute('style', 'background-color: #181818');
    cubeChild2.setAttribute('style', `background-color: ${indexFaces.c9};`);
    cubeChild3.setAttribute('style', `background-color: ${indexFaces.d7};`);
    cubeChild4.setAttribute('style', 'background-color: #181818');
    cubeChild5.setAttribute('style', `background-color: ${indexFaces.f7};`);
  } else if (cubeLocation == 26) {
    cubeChild0.setAttribute('style', 'background-color: #181818');
    cubeChild1.setAttribute('style', 'background-color: #181818');
    cubeChild2.setAttribute('style', `background-color: ${indexFaces.c8};`);
    cubeChild3.setAttribute('style', 'background-color: #181818');
    cubeChild4.setAttribute('style', 'background-color: #181818');
    cubeChild5.setAttribute('style', `background-color: ${indexFaces.f8};`);
  } else if (cubeLocation == 27) {
    cubeChild0.setAttribute('style', 'background-color: #181818');
    cubeChild1.setAttribute('style', `background-color: ${indexFaces.b9};`);
    cubeChild2.setAttribute('style', `background-color: ${indexFaces.c7};`);
    cubeChild3.setAttribute('style', 'background-color: #181818');
    cubeChild4.setAttribute('style', 'background-color: #181818');
    cubeChild5.setAttribute('style', `background-color: ${indexFaces.f9};`);
  }
}

/* \\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\// */



/* ------ Rubiks Cube Control Functions  ------- */

/* --------- Update Index Functions  ---------- */
let faceColors, currentCubes = [];

function updateFaceColors(item) {
  faceColors.push(indexFaces[item]);
}

function updateCurrentCubes(item) {
  currentCubes.push(indexCubes[item]);
}

/* --------------- Rotate Cube  --------------- */
let spinningTracker = false;
function rotateCube(moveCubes, endCubes, moveFaces, endFaces, rotateDirection, polarity) {
  let k, l, p;

  // add rotation to cubes
  for (k=0; k<9; k++) {
    if (k < 8) {
      if (rotateDirection === 'Y') {
        TweenMax.to(`#cube-rotate-${indexCubes[moveCubes[k]]}`, 0.3, {rotationY: `${polarity}90`, ease: Power3.easeInOut});
      } else if (rotateDirection === 'X') {
        TweenMax.to(`#cube-rotate-${indexCubes[moveCubes[k]]}`, 0.3, {rotationX: `${polarity}90`, ease: Power3.easeInOut});
      } else {
        TweenMax.to(`#cube-rotate-${indexCubes[moveCubes[k]]}`, 0.3, {rotationZ: `${polarity}90`, ease: Power3.easeInOut});
      }
    } else {
      if (rotateDirection === 'Y') {
        TweenMax.to(`#cube-rotate-${indexCubes[moveCubes[k]]}`, 0.3, {rotationY: `${polarity}90`, ease: Power3.easeInOut, onComplete: updateData});
      } else if (rotateDirection === 'X') {
        TweenMax.to(`#cube-rotate-${indexCubes[moveCubes[k]]}`, 0.3, {rotationX: `${polarity}90`, ease: Power3.easeInOut, onComplete: updateData});
      } else {
        TweenMax.to(`#cube-rotate-${indexCubes[moveCubes[k]]}`, 0.3, {rotationZ: `${polarity}90`, ease: Power3.easeInOut, onComplete: updateData});
      }
    }
  }

  function updateData() {
    faceColors = [];
    moveFaces.forEach(updateFaceColors);

    currentCubes = [];
    moveCubes.forEach(updateCurrentCubes);

    // update faceIndex
    for (p=0; p<21; p++) {
      indexFaces[endFaces[p]] = faceColors[p];
    }

    for (l=0; l<9; l++) {
      // update cube index
      indexCubes[endCubes[l]] = currentCubes[l];

      // remove translate classes from cubes
      document.getElementById(`cube-${indexCubes[endCubes[l]]}`).setAttribute('class', '');

      // remove rotation from cubes
      TweenMax.to(`#cube-rotate-${indexCubes[endCubes[l]]}`, 0, {transform: 'rotate(0deg)'});

      // add new translate classes to cubes
      document.getElementById(`cube-${indexCubes[endCubes[l]]}`).setAttribute('class', translateCube(endCubes[l]));

      // update the color on all cube faces
      colorCubes(`cube-${indexCubes[endCubes[l]]}`, endCubes[l]);
      if (l === 8) {
        spinningTracker = false;
      }
    }
  }
}

/* ------------ Control Functions  ------------ */
function topRotateLeft() {
  let moveCubes = [1, 2, 3, 10, 11, 12, 19, 20, 21];
  let endCubes = [3, 12, 21, 2, 11, 20, 1, 10, 19];
  let moveFaces = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3', 'd1', 'd2', 'd3', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9'];
  let endFaces = ['b1', 'b2', 'b3', 'c1', 'c2', 'c3', 'd1', 'd2', 'd3', 'a1', 'a2', 'a3', 'e7', 'e4', 'e1', 'e8', 'e5', 'e2', 'e9', 'e6', 'e3'];

  if (spinningTracker === false) {
    spinningTracker = true;
    rotateCube(moveCubes, endCubes, moveFaces, endFaces, 'Y', '');
  }
} 

function topRotateRight() {
  let moveCubes = [1, 2, 3, 10, 11, 12, 19, 20, 21];
  let endCubes = [19, 10, 1, 20, 11, 2, 21, 12, 3];
  let moveFaces = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3', 'd1', 'd2', 'd3', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9'];
  let endFaces = ['d1', 'd2', 'd3', 'a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3', 'e3', 'e6', 'e9', 'e2', 'e5', 'e8', 'e1', 'e4', 'e7'];

  
  if (spinningTracker === false) {
    spinningTracker = true;
    rotateCube(moveCubes, endCubes, moveFaces, endFaces, 'Y', '-');
  }
} 

function middleRotateLeft() {
  let moveCubes = [4, 5, 6, 13, 14, 15, 22, 23, 24];
  let endCubes = [6, 15, 24, 5, 14, 23, 4, 13, 22];
  let moveFaces = ['a4', 'a5', 'a6', 'b4', 'b5', 'b6', 'c4', 'c5', 'c6', 'd4', 'd5', 'd6'];
  let endFaces = ['b4', 'b5', 'b6', 'c4', 'c5', 'c6', 'd4', 'd5', 'd6', 'a4', 'a5', 'a6'];

  if (spinningTracker === false) {
    spinningTracker = true;
    rotateCube(moveCubes, endCubes, moveFaces, endFaces, 'Y', '');
  }
}

function middleRotateRight() {
  let moveCubes = [4, 5, 6, 13, 14, 15, 22, 23, 24];
  let endCubes = [22, 13, 4, 23, 14, 5, 24, 15, 6];
  let moveFaces = ['a4', 'a5', 'a6', 'b4', 'b5', 'b6', 'c4', 'c5', 'c6', 'd4', 'd5', 'd6'];
  let endFaces = ['d4', 'd5', 'd6', 'a4', 'a5', 'a6', 'b4', 'b5', 'b6', 'c4', 'c5', 'c6'];

  if (spinningTracker === false) {
    spinningTracker = true;
    rotateCube(moveCubes, endCubes, moveFaces, endFaces, 'Y', '-');
  }
}

function bottomRotateLeft() {
  let moveCubes = [7, 8, 9, 16, 17, 18, 25, 26, 27];
  let endCubes = [9, 18, 27, 8, 17, 26, 7, 16, 25];
  let moveFaces = ['a7', 'a8', 'a9', 'b7', 'b8', 'b9', 'c7', 'c8', 'c9', 'd7', 'd8', 'd9', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9'];
  let endFaces = ['b7', 'b8', 'b9', 'c7', 'c8', 'c9', 'd7', 'd8', 'd9', 'a7', 'a8', 'a9', 'f3', 'f6', 'f9', 'f2', 'f5', 'f8', 'f1', 'f4', 'f7'];

  if (spinningTracker === false) {
    spinningTracker = true;
    rotateCube(moveCubes, endCubes, moveFaces, endFaces, 'Y', '');
  }
}

function bottomRotateRight() {
  let moveCubes = [7, 8, 9, 16, 17, 18, 25, 26, 27];
  let endCubes = [25, 16, 7, 26, 17, 8, 27, 18, 9];
  let moveFaces = ['a7', 'a8', 'a9', 'b7', 'b8', 'b9', 'c7', 'c8', 'c9', 'd7', 'd8', 'd9', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9'];
  let endFaces = ['d7', 'd8', 'd9', 'a7', 'a8', 'a9', 'b7', 'b8', 'b9', 'c7', 'c8', 'c9', 'f7', 'f4', 'f1', 'f8', 'f5', 'f2', 'f9', 'f6', 'f3'];

  if (spinningTracker === false) {
    spinningTracker = true;
    rotateCube(moveCubes, endCubes, moveFaces, endFaces, 'Y', '-');
  }
}

function leftRotateDown() {
  let moveCubes = [1, 4, 7, 10, 13, 16, 19, 22, 25];
  let endCubes = [7, 16, 25, 4, 13, 22, 1, 10, 19];
  let moveFaces = ['a1', 'a4', 'a7', 'f1', 'f4', 'f7', 'c3', 'c6', 'c9', 'e1', 'e4', 'e7', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9'];
  let endFaces = ['f1', 'f4', 'f7', 'c9', 'c6', 'c3', 'e7', 'e4', 'e1', 'a1', 'a4', 'a7', 'd3', 'd6', 'd9', 'd2', 'd5', 'd8', 'd1', 'd4', 'd7'];

  if (spinningTracker === false) {
    spinningTracker = true;
    rotateCube(moveCubes, endCubes, moveFaces, endFaces, 'X', '-');
  }
}

function leftRotateUp() {
  let moveCubes = [1, 4, 7, 10, 13, 16, 19, 22, 25];
  let endCubes = [19, 10, 1, 22, 13, 4, 25, 16, 7];
  let moveFaces = ['a1', 'a4', 'a7', 'f1', 'f4', 'f7', 'c3', 'c6', 'c9', 'e1', 'e4', 'e7', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9'];
  let endFaces = ['e1', 'e4', 'e7', 'a1', 'a4', 'a7', 'f7', 'f4', 'f1', 'c9', 'c6', 'c3', 'd7', 'd4', 'd1', 'd8', 'd5', 'd2', 'd9', 'd6', 'd3'];

  if (spinningTracker === false) {
    spinningTracker = true;
    rotateCube(moveCubes, endCubes, moveFaces, endFaces, 'X', '');
  }
}

function centerRotateDown() {
  let moveCubes = [2, 5, 8, 11, 14, 17, 20, 23, 26];
  let endCubes = [8, 17, 26, 5, 14, 23, 2, 11, 20];
  let moveFaces = ['a2', 'a5', 'a8', 'f2', 'f5', 'f8', 'c2', 'c5', 'c8', 'e2', 'e5', 'e8'];
  let endFaces = ['f2', 'f5', 'f8', 'c8', 'c5', 'c2', 'e8', 'e5', 'e2', 'a2', 'a5', 'a8'];

  if (spinningTracker === false) {
    spinningTracker = true;
    rotateCube(moveCubes, endCubes, moveFaces, endFaces, 'X', '-');
  }
}

function centerRotateUp() {
  let moveCubes = [2, 5, 8, 11, 14, 17, 20, 23, 26];
  let endCubes = [20, 11, 2, 23, 14, 5, 26, 17, 8];
  let moveFaces = ['a2', 'a5', 'a8', 'f2', 'f5', 'f8', 'c2', 'c5', 'c8', 'e2', 'e5', 'e8'];
  let endFaces = ['e2', 'e5', 'e8', 'a2', 'a5', 'a8', 'f8', 'f5', 'f2', 'c8', 'c5', 'c2'];

  if (spinningTracker === false) {
    spinningTracker = true;
    rotateCube(moveCubes, endCubes, moveFaces, endFaces, 'X', '');
  }
}

function rightRotateDown() {
  let moveCubes = [3, 12, 21, 6, 15, 24, 9, 18, 27];
  let endCubes = [9, 6, 3, 18, 15, 12, 27, 24, 21];
  let moveFaces = ['a3', 'a6', 'a9', 'f3', 'f6', 'f9', 'c1', 'c4', 'c7', 'e3', 'e6', 'e9', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9'];
  let endFaces = ['f3', 'f6', 'f9', 'c7', 'c4', 'c1', 'e9', 'e6', 'e3', 'a3', 'a6', 'a9', 'b7', 'b4', 'b1', 'b8', 'b5', 'b2', 'b9', 'b6', 'b3'];

  if (spinningTracker === false) {
    spinningTracker = true;
    rotateCube(moveCubes, endCubes, moveFaces, endFaces, 'X', '-');
  }
}

function rightRotateUp() {
  let moveCubes = [3, 12, 21, 6, 15, 24, 9, 18, 27];
  let endCubes = [21, 24, 27, 12, 15, 18, 3, 6, 9];
  let moveFaces = ['a3', 'a6', 'a9', 'f3', 'f6', 'f9', 'c1', 'c4', 'c7', 'e3', 'e6', 'e9', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9'];
  let endFaces = ['e3', 'e6', 'e9', 'a3', 'a6', 'a9', 'f9', 'f6', 'f3', 'c7', 'c4', 'c1', 'b3', 'b6', 'b9', 'b2', 'b5', 'b8', 'b1', 'b4', 'b7'];

  if (spinningTracker === false) {
    spinningTracker = true;
    rotateCube(moveCubes, endCubes, moveFaces, endFaces, 'X', '');
  }
} 

function frontSpinRight() {
  let moveCubes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let endCubes = [3, 6, 9, 2, 5, 8, 1, 4, 7];
  let moveFaces = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'e7', 'e8', 'e9', 'b1', 'b4', 'b7', 'f1', 'f2', 'f3', 'd3', 'd6', 'd9'];
  let endFaces = ['a3', 'a6', 'a9', 'a2', 'a5', 'a8', 'a1', 'a4', 'a7', 'b1', 'b4', 'b7', 'f3', 'f2', 'f1', 'd3', 'd6', 'd9', 'e9', 'e8', 'e7'];

  if (spinningTracker === false) {
    spinningTracker = true;
    rotateCube(moveCubes, endCubes, moveFaces, endFaces, 'Z', '');
  }
}

function frontSpinLeft() {
  let moveCubes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let endCubes = [7, 4, 1, 8, 5, 2, 9, 6, 3];
  let moveFaces = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'e7', 'e8', 'e9', 'b1', 'b4', 'b7', 'f1', 'f2', 'f3', 'd3', 'd6', 'd9'];
  let endFaces = ['a7', 'a4', 'a1', 'a8', 'a5', 'a2', 'a9', 'a6', 'a3', 'd9', 'd6', 'd3', 'e7', 'e8', 'e9', 'b7', 'b4', 'b1', 'f1', 'f2', 'f3'];

  if (spinningTracker === false) {
    spinningTracker = true;
    rotateCube(moveCubes, endCubes, moveFaces, endFaces, 'Z', '-');
  }
}

function middleSpinRight() {
  let moveCubes = [10, 11, 12, 13, 14, 15, 16, 17, 18];
  let endCubes = [12, 15, 18, 11, 14, 17, 10, 13, 16];
  let moveFaces = ['e4', 'e5', 'e6', 'b2', 'b5', 'b8', 'f4', 'f5', 'f6', 'd2', 'd5', 'd8'];
  let endFaces = ['b2', 'b5', 'b8', 'f6', 'f5', 'f4', 'd2', 'd5', 'd8', 'e6', 'e5', 'e4'];

  if (spinningTracker === false) {
    spinningTracker = true;
    rotateCube(moveCubes, endCubes, moveFaces, endFaces, 'Z', '');
  }
}

function middleSpinLeft() {
  let moveCubes = [10, 11, 12, 13, 14, 15, 16, 17, 18];
  let endCubes = [16, 13, 10, 17, 14, 11, 18, 15, 12];
  let moveFaces = ['e4', 'e5', 'e6', 'b2', 'b5', 'b8', 'f4', 'f5', 'f6', 'd2', 'd5', 'd8'];
  let endFaces = ['d8', 'd5', 'd2', 'e4', 'e5', 'e6', 'b8', 'b5', 'b2', 'f4', 'f5', 'f6'];

  if (spinningTracker === false) {
    spinningTracker = true;
    rotateCube(moveCubes, endCubes, moveFaces, endFaces, 'Z', '-');
  }
}

function backSpinRight() {
  let moveCubes = [19, 20, 21, 22, 23, 24, 25, 26, 27];
  let endCubes = [21, 24, 27, 20, 23, 26, 19, 22, 25];
  let moveFaces = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'e1', 'e2', 'e3', 'b3', 'b6', 'b9', 'f7', 'f8', 'f9', 'd1', 'd4', 'd7'];
  let endFaces = ['c7', 'c4', 'c1', 'c8', 'c5', 'c2', 'c9', 'c6', 'c3', 'b3', 'b6', 'b9', 'f9', 'f8', 'f7', 'd1', 'd4', 'd7', 'e3', 'e2', 'e1'];

  if (spinningTracker === false) {
    spinningTracker = true;
    rotateCube(moveCubes, endCubes, moveFaces, endFaces, 'Z', '');
  }
}

function backSpinLeft() {
  let moveCubes = [19, 20, 21, 22, 23, 24, 25, 26, 27];
  let endCubes = [25, 22, 19, 26, 23, 20, 27, 24, 21];
  let moveFaces = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'e1', 'e2', 'e3', 'b3', 'b6', 'b9', 'f7', 'f8', 'f9', 'd1', 'd4', 'd7'];
  let endFaces = ['c3', 'c6', 'c9', 'c2', 'c5', 'c8', 'c1', 'c4', 'c7', 'd7', 'd4', 'd1', 'e1', 'e2', 'e3', 'b9', 'b6', 'b3', 'f7', 'f8', 'f9'];

  if (spinningTracker === false) {
    spinningTracker = true;
    rotateCube(moveCubes, endCubes, moveFaces, endFaces, 'Z', '-');
  }
}
/* \\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\// */



/* ---------- Design Mode Functions  ---------- */
let controller = new ScrollMagic.Controller();

function getCubeWidth() {
  if (window.innerWidth > 1599.99) {
    return '43px';
  } else if (window.innerWidth < 1600 && window.innerWidth > 1023.99) {
    return '39px';
  } else if (window.innerWidth < 1024 && window.innerWidth > 499.99) {
    return '35px';
  } else if (window.innerWidth < 500) {
    return '27px';
  }
}

function createDynamicTweens() {
  bgFacesTween.set('.bg-face-t', {y: `-${getCubeWidth()}`}, 0);
  bgFacesTween.set('.bg-face-b', {y: getCubeWidth()}, 0);
  bgFacesTween.set('.bg-face-fr', {x: getCubeWidth()}, 0);
  bgFacesTween.set('.bg-face-bl', {x: `-${getCubeWidth()}`}, 0);
  bgFacesTween.set('.bg-face-fl', {z: getCubeWidth()}, 0);
  bgFacesTween.set('.bg-face-br', {z: `-${getCubeWidth()}`}, 0);
  bgFacesTween.to('.bg-face-t', 2, {y: -500, ease: Power2.easeInOut}, 0);
  bgFacesTween.to('.bg-face-b', 2, {y: 500, ease: Power2.easeInOut}, 0);
  bgFacesTween.to('.bg-face-fr', 2, {x: 500, ease: Power2.easeInOut}, 0);
  bgFacesTween.to('.bg-face-bl', 2, {x: -500, ease: Power2.easeInOut}, 0);
  bgFacesTween.to('.bg-face-fl', 2, {z: 500, ease: Power2.easeInOut}, 0);
  bgFacesTween.to('.bg-face-br', 2, {z: -500, ease: Power2.easeInOut}, 0);
  bgFacesTween.to('.bg-face-1', 2, {x: 500, y: -500, ease: Power2.easeInOut}, 0);
  bgFacesTween.to('.bg-face-2', 2, {x: -500, y: -500, ease: Power2.easeInOut}, 0);
  bgFacesTween.to('.bg-face-3', 2, {x: 500, y: 500, ease: Power2.easeInOut}, 0);

  finalDesignTween.set('.bg-face-t', {y: `-${getCubeWidth()}`}, 0);
  finalDesignTween.set('.bg-face-b', {y: getCubeWidth()}, 0);
  finalDesignTween.set('.bg-face-fr', {x: getCubeWidth()}, 0);
  finalDesignTween.set('.bg-face-bl', {x: `-${getCubeWidth()}`}, 0);
  finalDesignTween.set('.bg-face-fl', {z: getCubeWidth()}, 0);
  finalDesignTween.set('.bg-face-br', {z: `-${getCubeWidth()}`}, 0);
  finalDesignTween.to('.bg-face-1, .bg-face-2, .bg-face-3', 0, {x: 0, y: 0}, 0);
  finalDesignTween.to('.bg-face-1, .bg-face-2, .bg-face-3', 1, {opacity: 1, ease: Power2.easeInOut}, 0);
  finalDesignTween.to('.bg-face-br, .bg-face-bl, .bg-face-b, .bg-face-t, .bg-face-fr, .bg-face-fl, .bg-face-1, .bg-face-2, .bg-face-3', 1, {opacity: 1, ease: Power2.easeInOut}, 1);
  finalDesignTween.to('.face-top', 1, {backgroundColor: 'yellow', ease: Power2.easeInOut}, 2);
  finalDesignTween.to('.face-right', 1, {backgroundColor: 'green', ease: Power2.easeInOut}, 2);
  finalDesignTween.to('.face-back', 1, {backgroundColor: 'orange', ease: Power2.easeInOut}, 2);
  finalDesignTween.to('.face-left', 1, {backgroundColor: 'blue', ease: Power2.easeInOut}, 2);
  finalDesignTween.to('.face-bottom', 1, {backgroundColor: 'white', ease: Power2.easeInOut}, 2);
  finalDesignTween.to('.face-front', 1, {backgroundColor: 'red', ease: Power2.easeInOut}, 2);
  finalDesignTween.to('#design-arrow-up', 1, {opacity: 1, ease: Power2.easeInOut, autoAlpha: 1, display: 'block'}, 2);
}

// move background planes to correct position
window.onresize = function() {
  window.scrollTo(0, 0);

  bgFacesTween.invalidate();
  bgFacesTween.clear();
  finalDesignTween.invalidate();
  createDynamicTweens();

  TweenMax.set('.bg-face-1, .bg-face-2, .bg-face-3', {x: 0, y: 0});
  TweenMax.set('.bg-face-t', {y: `-${getCubeWidth()}`});
  TweenMax.set('.bg-face-b', {y: getCubeWidth()});
  TweenMax.set('.bg-face-fr', {x: getCubeWidth()});
  TweenMax.set('.bg-face-bl', {x: `-${getCubeWidth()}`});
  TweenMax.set('.bg-face-fl', {z: getCubeWidth()});
  TweenMax.set('.bg-face-br', {z: `-${getCubeWidth()}`});
  TweenMax.set('#design-arrow-up', {opacity: 0, visibility: 'hidden'});
}

let readyCubeTween = new TimelineMax({repeat: 0});
readyCubeTween.to('#rubiks-controlbar, #gradient-line-spacer, #design-arrow-down', 0.2, {opacity: 0, ease: Power3.easeInOut, autoAlpha: 0});
readyCubeTween.to('#rubiks-container', 0.2, {top: '50%', ease: Power3.easeInOut}, 0);

let cubeMoveTween = new TimelineMax({repeat: 0});
cubeMoveTween.to('#rubiks-cube', 1, {z: -1000, ease: Power2.easeInOut});
cubeMoveTween.to('.individual-face', 1, {backgroundColor: 'transparent', ease: Power2.easeInOut}, 0);

let bgFacesTween = new TimelineMax({repeat: 0});

let bgOpacityTween = new TimelineMax({repeat: 0});
bgOpacityTween.to('.bg-face-br, .bg-face-bl, .bg-face-b, .bg-face-t, .bg-face-fr, .bg-face-fl, .bg-face-1, .bg-face-2, .bg-face-3', 3, {opacity: 0, ease: Power2.easeInOut});
bgOpacityTween.to('#rubiks-cube', 3, {rotationY: '+=360', rotationX: '-=360', ease: Power2.easeInOut}, 0);
bgOpacityTween.to('#rubiks-cube', 3, {z: 0, ease: Power2.easeInOut}, 0);

let finalDesignTween = new TimelineMax({repeat: 0});

// master design tween
let rubiksDesignTween = new TimelineMax({repeat: 0});
rubiksDesignTween.add(readyCubeTween);
rubiksDesignTween.to('#rubiks-cube', 3, {rotationY: '+=360', rotationX: '-=360', ease: Power2.easeInOut});
rubiksDesignTween.add(cubeMoveTween);
rubiksDesignTween.add(bgFacesTween);
rubiksDesignTween.add(bgOpacityTween, '+=2');
rubiksDesignTween.add(finalDesignTween);

let designScene = new ScrollMagic.Scene({
  triggerElement: '#rubiks-landing-container',
  triggerHook: 'onLeave',
  duration: 10000
})
.setPin('#rubiks-landing-container', {pushFollwers: false})
.setTween(rubiksDesignTween)
.addTo(controller);
/* \\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\// */