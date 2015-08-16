	// Create Video Fields
	//-------------------------------//
	$('.close').click(function() {
		$('#videowrapper').removeClass('activate');
		$('.fp-close').addClass('scaleIn');

		// delay removal of iframe so it's more smooth
		setTimeout(function() {
			$('#videowrapper iframe').remove();
	    	return false;  
		}, 650, this);
		
	});

	$('.activate-video').click(function() {
		
		// stop iframe from resetting if another video is activated
        if ( $('#videowrapper').hasClass('activate') ) {
			return false;
			event.preventDefault();
		}

		$('#videowrapper iframe').remove();
		$('#videowrapper').addClass('activate');
		$('.close').removeClass('scaleIn');
		

		
		// get iframe ID
		var videoID = $(this).data("videoid");

	    // create iframe
	    var ifrm = document.createElement("IFRAME"); 
	       ifrm.setAttribute("src", "https://www.youtube.com/embed/"+videoID+"?enablejsapi=1&wmode=opaque&rel=0&vq=hd1080&showinfo=1&autoplay=1"); 
	       ifrm.style.width = "100%"; 
	       ifrm.style.height = "100%"; 
	       // add rest of your values
	       ifrm.frameborder = 0;
		
		// append iframe to container
		setTimeout(function() {
			$('#videowrapper').append(ifrm);
	    	return false;  
		}, 650, this);
	});
