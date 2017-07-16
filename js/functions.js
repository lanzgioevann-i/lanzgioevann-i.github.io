var loaded;

/*PRE LOADER*/
$(window).load(function() {
	//alert('loaded!');
	
	setTimeout(function() {
		$('#typed-loading').addClass("content-hide"); //remove type loading as display: none
		//alert('hide type loading');
		setTimeout(function() {
			$('#typed-loading').addClass("content-hide2");
			//alert('hshow type loaded');
			$('#typed-loaded').addClass("content-show");
			
			new TypeWriter($("#typed-loaded"), {
				"data": ["I>>>>>ts loaded!|||"]
			})
			
			setTimeout(function() {
				/****************HIDE PRE LOADER****************/
				$('#content').addClass("content-show"); //load content
				$('#content').removeClass("content-hide"); 
				
				setTimeout(function(){
					$('.preloader-background').delay(0).fadeOut('slow');
					
					loaded = true;
										
					//setTimeout(function() { $(window).scrollTop($(window).scrollTop() - 1); }, 500);
					
				}, 10); //remove preloader background
				/*******************************************/
			}, 2500); //hide preloader
			
		}, 500); //show type loaded
			
	}, 10); //hide type loading
	
	/*
	
	*/
});

/* NAV BAR */
function navshow(){
	//nav show
	var window_top = $(window).scrollTop();
	var div_top = $('#nav-line').offset().top;
	/*
	*/
	if(window_top > (div_top + 200) && loaded){ 
		$('#navbar').addClass('shownav');
		$('#navbar').removeClass('hidenav');
		
		$('.fixed-action-btn').addClass('content-show');
		$('.fixed-action-btn').removeClass('content-hide');
	}
	else{
		$('#navbar').removeClass('shownav');
		$('#navbar').addClass('hidenav');
		
		$('.fixed-action-btn').addClass('content-hide');
		$('.fixed-action-btn').removeClass('content-show');
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
	
	if(window_top > (spdr_top -300) && loaded){
		$('#work-spdr').addClass('active');
	}
	else{
		$('#work-spdr').removeClass('active');
	}
}

function activenav(){
	//active nav
	var window_top = $(window).scrollTop();
	
	var home_top = $('#ss-first').offset().top - 100;
	var about_top = $('#ss-second').offset().top - 100;
	var skills_top = $('#ss-fourth').offset().top - 100;
	var works_top = $('#ss-fifth').offset().top - 100;
	var contact_top = $('#ss-sixth').offset().top - 100;
	/**/
	if(window_top > home_top && window_top < about_top){
		$('#nav-link-home').addClass('active');
		
		$('#nav-link-about').removeClass('active');
		$('#nav-link-skills').removeClass('active');
		$('#nav-link-works').removeClass('active');
		$('#nav-link-contact').removeClass('active');
	}
	else if(window_top > about_top && window_top < skills_top){
		$('#nav-link-about').addClass('active');
		
		$('#nav-link-home').removeClass('active');
		$('#nav-link-skills').removeClass('active');
		$('#nav-link-works').removeClass('active');
		$('#nav-link-contact').removeClass('active');
	}
	else if(window_top > skills_top && window_top < works_top){
		$('#nav-link-skills').addClass('active');
		
		$('#nav-link-home').removeClass('active');
		$('#nav-link-about').removeClass('active');
		$('#nav-link-works').removeClass('active');
		$('#nav-link-contact').removeClass('active');
	}
	else if(window_top > works_top && window_top < contact_top){
		$('#nav-link-works').addClass('active');
		
		$('#nav-link-home').removeClass('active');
		$('#nav-link-about').removeClass('active');
		$('#nav-link-skills').removeClass('active');
		$('#nav-link-contact').removeClass('active');
	}
	else if(window_top > contact_top){
		$('#nav-link-contact').addClass('active');
		//alert('yay');
		$('#nav-link-home').removeClass('active');
		$('#nav-link-about').removeClass('active');
		$('#nav-link-skills').removeClass('active');
		$('#nav-link-works').removeClass('active');
	}
	
}

$(function() { 
  $(window).scroll(navshow);
  $(window).scroll(skillshow);
  $(window).scroll(workshow);
  $(window).scroll(activenav);
});

/* PARALLAX */
$(document).ready(function(){
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();
  $(".button-collapse").sideNav();
  $('.materialboxed').materialbox();
  $(".dropdown-button").dropdown();
});

/* HEADER */
jQuery(document).ready(function($){
 // Defining a function to set size for #hero 
	function fullscreen(){
		jQuery('#header-container').css({
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


