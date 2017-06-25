var loaded;

/*PRE LOADER*/
$(window).load(function() {
	$('.preloader-background').delay(2000).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
		
	setTimeout(function(){
		$('#content').addClass("content-show");
		$('#content').removeClass("content-hide");
		
		loaded = true;
		
		setTimeout(function() {
		$(window).scrollTop($(window).scrollTop() - 1);
	}, 500);
		
		
	}, 1200);
});

/* NAV BAR */
function navshow(){
	//nav show
	var window_top = $(window).scrollTop();
	var div_top = $('#nav-line').offset().top;
	/*
	*/
	if(window_top > div_top && loaded){ 
		$('#navbar').addClass('shownav');
		$('#navbar').removeClass('hidenav');
	}
	else{
		$('#navbar').removeClass('shownav');
		$('#navbar').addClass('hidenav');
	}
}

function skillshow(){
	//skill show
	var window_top = $(window).scrollTop();
	var div_top = $('#skill-line').offset().top;
	/*
	*/
	if(window_top > div_top && loaded){
		$('#skill-cs').addClass('skill-cs');
		$('#skill-java').addClass('skill-java');
		$('#skill-sql').addClass('skill-sql');
		$('#skill-ps').addClass('skill-ps');
		$('#skill-vegas').addClass('skill-vegas');
		$('#skill-html').addClass('skill-html');
		$('#skill-css').addClass('skill-css');
		$('#skill-js').addClass('skill-js');	
		
		$('.skill-percent').addClass('sp-visible');
	}
}

function workshow(){
	//skill show
	var window_top = $(window).scrollTop();
	
	var enrapture_top = $('#work-enrapture-line').offset().top;
	
	if(window_top > (enrapture_top - 100) && loaded){
		$('#work-enrapture').addClass('active');
	}
	else{
		$('#work-enrapture').removeClass('active');
	}
	
	var spdr_top = $('#work-spdr-line').offset().top;
	
	if(window_top > (spdr_top - 100) && loaded){
		$('#work-spdr').addClass('active');
	}
	else{
		$('#work-spdr').removeClass('active');
	}
}

$(function() { 
  $(window).scroll(navshow);
  $(window).scroll(skillshow);
  $(window).scroll(workshow);
});

/* PARALLAX */
$(document).ready(function(){
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();
  $(".button-collapse").sideNav();
  $('.materialboxed').materialbox();
});

/* HEADER */
jQuery(document).ready(function($){
 // Defining a function to set size for #hero 
	function fullscreen(){
		jQuery('#hero').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()
        });
	}
  
	fullscreen();

  // Run the function in case of window resize
  jQuery(window).resize(function() {
       fullscreen();         
    });

});

