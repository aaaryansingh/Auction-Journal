//this is only for demonstration of different fly-in directions
var changeClass = function(name){
  $('#search, #nav ul').removeAttr('class').addClass(name);
}


// Trigger CSS animations on scroll.
// Detailed explanation can be found at http://www.bram.us/2013/11/20/scroll-animations/

// Looking for a version that also reverses the animation when
// elements scroll below the fold again?
// --> Check https://codepen.io/bramus/pen/vKpjNP

jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	};
  
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("faqactive");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


/*##################### OWL CAROUSEL ############################*/

 jQuery(document).ready(function() {

   jQuery("#cri_owl").owlCarousel({
    autoplay: false,
    loop:true,
    center: false,  
    navText:  false,
    dots: false,       
    nav : true,
    mouseDrag:true,
    lazyLoad : false,
    smartSpeed: 1400,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        768:{
            items:1
        },
        1000:{
            items:1
        }
    }
      }); 
                  
 });   


/*##################### End OWL CAROUSEL ############################*/

/*##################### OWL CAROUSEL ############################*/

 jQuery(document).ready(function() {

   jQuery("#team_owl").owlCarousel({
    autoplay: false,
    loop:true,
    center: false,  
    navText:  false,
    dots: false,       
    nav : true,
    mouseDrag:true,
    lazyLoad : false,
    smartSpeed: 1400,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        768:{
            items:1
        },
        1000:{
            items:1
        }
    }
      }); 
                  
 });   


/*##################### End OWL CAROUSEL ############################*/


$(document).ready(function() {
    $('.percentage-bar').each(function(){
        $(this).find('.bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });
});

var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-7243260-2']);
  _gaq.push(['_trackPageview']);
  (function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


new TiltSlider( document.getElementById( 'slideshow' ) );