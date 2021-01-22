$(document).ready(function() {
	
	//everytime the window is scrolled
	$(window).scroll(function() {

	    //check the location of the element
		$('.visibility').each(function(i) {
			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

             //if the object is completely visible in the window, fade it it 
			if (bottom_of_window > bottom_of_object) {
				$(this).animate({'opacity':'1'}, 1000);
			}
	    });
	 });
});