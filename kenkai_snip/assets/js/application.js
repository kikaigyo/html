// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {

  $(function(){

    var $window = $(window)


    // side bar
    setTimeout(function () {
      $('.bs-docs-sidenav').affix({
        offset: {
          top: function () { return $window.width() <= 800 ? 190 : 90 }
        , bottom: 270
        }
      })
    }, 100)


 $("a[href*='#']").easingScroll({
	  easing: "easeOutQuart" ,
	  duration: 400
  });


 })


}(window.jQuery)
