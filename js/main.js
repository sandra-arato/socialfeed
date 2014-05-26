(function($){

	window.fbAsyncInit = function() {
		FB.init({
		appId	: '324540777693543',
		xfbml	: true,
		version	: 'v2.0'
		});

		var syncInitFB = true;

		if (syncInitFB) {
			FB.login(function(response) {
				console.log("fb ready");
				FB.api(
				"/v2.0/me/feed/",
				function (response) {
					if (response && !response.error) {
						/* handle the result */
						console.log(response);
					}
				});
			}, {scope: "read_stream"});
			
		};
	};

	

})(jQuery);