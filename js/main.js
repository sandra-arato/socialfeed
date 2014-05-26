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
						var feed = response;
						console.log(feed);
						var html = new EJS({url: 'js/fb.ejs'}).render(feed);
						$(html).appendTo($("div.container"));
					}
				});
			}, {scope: "read_stream"});
			
		};
	};

	
})(jQuery);