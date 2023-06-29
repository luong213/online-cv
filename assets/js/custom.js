// Header Banner Dynamic Height
$('#banner').css({'height': $(window).height()});

// Navigation
var mainNav = jQuery('.main-navigation');

// Get background image from data attr 
$( '.transparent-section' ).each(function() {
	var  sectionImage = $(this).data('image');
	var  sectionColor = $(this).data('color');
	var  sectionTransparency = $(this).data('transparency');
	var  transparency = sectionColor + ', ' + sectionTransparency;

	// Set background Image
	$(this).css({
		'background-image':'url(' + sectionImage + ')'
	});

	// Set background color
	$(this).css({
		'background-color':'rgb(' + sectionColor + ')'
	});

	// Set background size
	$(this).css({
		'background-size':'cover'
	});
	// Set background color transparency
	$(this).find('.transparent-content').css({
		'background-color':'rgba(' + transparency + ')',
		'width':'100%',
		'height':'100%',
	});
});

// Parallax  Init
jQuery("#banner").parallax("50%", 0.5);