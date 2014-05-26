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
									alert response.data[1];
									return response.data[1];
								}
							});
					})();
					
					console.log(feed);

					var html = new EJS({url: 'js/fb.ejs'}).render(feed);
					$(html).appendTo($("div.container"));

				
			}, {scope: "read_stream"});
			
		};

		if (feed) {
			
		}
		else {
			console.log("Try again");
		}
	};

	
})(jQuery);