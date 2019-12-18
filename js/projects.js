var rellax = new Rellax('.rellax');
let photographer = document.getElementById('photographer-project');
let samplePack = document.getElementById('sample-pack-project');
let rubiks = document.getElementById('rubiks-project');
let tgmaudio = document.getElementById('tgmaudio-project');

window.onload = function() {
  fadeLoader();
}

// change image opacity functions
photographer.onmouseenter = function() {
  TweenMax.to('#photographer', 0.3, {opacity: 1});

  this.onmouseleave = function() {
    TweenMax.to('#photographer', 0.3, {opacity: 0.5});
  }
}
samplePack.onmouseenter = function() {
  TweenMax.to('#sample-pack', 0.3, {opacity: 1});

  this.onmouseleave = function() {
    TweenMax.to('#sample-pack', 0.3, {opacity: 0.5});
  }
}
rubiks.onmouseenter = function() {
  TweenMax.to('#rubiks', 0.3, {opacity: 1});

  this.onmouseleave = function() {
    TweenMax.to('#rubiks', 0.3, {opacity: 0.5});
  }
}
tgmaudio.onmouseenter = function() {
  TweenMax.to('#tgmaudio', 0.3, {opacity: 1});

  this.onmouseleave = function() {
    TweenMax.to('#tgmaudio', 0.3, {opacity: 0.5});
  }
}

// project click functions
photographer.onclick = function() {
  window.open('/nature-photographer/photography.html');
}
samplePack.onclick = function() {
  window.open('http://tgmaudio.com/sample-pack.html');
}
rubiks.onclick = function() {
  window.open('./rubiks.html');
}
tgmaudio.onclick = function() {
  window.open('http://tgmaudio.com/');
}
