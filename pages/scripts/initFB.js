

function initFb(){
	window.fbAsyncInit = function() {
    FB.init({
      appId            : '1423593324331860',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.10',
	  channelUrl: "localhost"
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
	
}