
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
  $.fn.setCursorToTextEnd = function() {
      var $initialVal = this.val();
      this.val($initialVal);
  };

// DIALOGUE

  $('.screen-1 button').on('click',function(){
    $('.app').addClass('is-screen2')
  })

  function resizeHandler (e) {
    _winW = $(window).width();
    _winH = $(window).height();
  }

  $('.event-title').on('touchstart',function(){
    if($(this).html().indexOf('Enter pool title') != -1){
      $(this).html('')
    }
    $('.event-title').focus()
    $('.event-title').addClass('active-editable')
  })

  $('.seed-amount').on('touchstart',function(){
    if($(this).html().indexOf('Seed Amount') != -1){
      $(this).html('<span>$</span>')
    }
    $('.seed-amount').focus()
    $('.seed-amount').addClass('active-editable')
    $('.seed-amount').setCursorToTextEnd();
  })


  $('.goal-amount').on('touchstart',function(){
    if($(this).html().indexOf('Goal Amount') != -1){
      $(this).html('<span>$</span>')
    }
    $('.goal-amount').focus()
    $('.goal-amount').addClass('active-editable')
    $('.goal-amount').setCursorToTextEnd();
  })

  $(document).on('keypress',function(e){
    if($('.event-title').html().indexOf('Enter pool title') == -1){
      $('.share-options').css({
        opacity: 1
      })
      $('.screen-1 button').css({
        opacity: 1
      })
    }
  })
})