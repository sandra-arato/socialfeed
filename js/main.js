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

					feed = (function () {
						FB.api(
							"/v2.0/me/feed/",
							function (response) {
								if (response && !response.error) {
									feed = response.data;
									var html = new EJS({url: 'js/fb.ejs'}).render(feed);
									$(html).appendTo($("div.container"));
									return response.data;
								}
							});
					})();
				
			}, {scope: "read_stream"});
			
		};

		if (feed) {
			
		}
		else {
			console.log("Try again");
		}
	};

	
})(jQuery);