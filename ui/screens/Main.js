
var _winW = window.innerWidth;
var _winH = window.innerHeight;

var touchStartX = 0;
var touchNewX = 0;

var touchStartY = 0;
var touchNewY = 0;


///**************************************************///
// INITIALIZE

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function(e) {
    FastClick.attach(document.body);
  });
  false;
}

$(function() {

// DIALOGUE

  $('.screen-1 button').on('click',function(){
    $('.app').addClass('is-screen2')
  })
  function resizeHandler (e) {
    _winW = $(window).width();
    _winH = $(window).height();
  }
})