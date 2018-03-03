

FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

<script>
							var finished_rendering = function() {
							  console.log("finished rendering plugins");
							  var spinner = document.getElementById("spinner");
							  spinner.removeAttribute("style");
							  spinner.removeChild(spinner.childNodes[0]);
							}
							FB.Event.subscribe('xfbml.render', finished_rendering);
							</script>

{
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
    }
}

<fb:login-button 
  scope="public_profile,email"
  onlogin="checkLoginState();">
</fb:login-button>


function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  