/* ---------------- Loader.js ----------------- */

// fade loader on load
window.onload = function() {
  fadeLoader();
}

function fadeLoader() {
  // fade out loader & remove animation classes
  TweenMax.to('#main-loader', 2, {opacity: 0});
  setTimeout(() => {
    document.getElementById('main-loader').setAttribute('style', 'display: none');
    document.getElementById('circle-1').classList.remove('animate-circle-1');
    document.getElementById('circle-2').classList.remove('animate-circle-2');
    document.getElementById('circle-3').classList.remove('animate-circle-3');
    document.getElementById('circle-4').classList.remove('animate-circle-4');
    
  }, 2000);
}
/* \\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\// */









