

function setupLoginWithFB(){
	$("#loginWithFB").on("click",FBcheck);
	
	function FBcheck(){
		console.log("ds");
		var loggedin;
		FB.getLoginStatus(function(response){
			
			if(response.status=="connected"){
				getUserInfo();
			}else{
				FB.login(onFBLogin);
			}

		});
		
	}

}

function setupGetFBinfo(){
	$("#getFBinfo").on("click",getUserInfo);
	
}


function onFBLogin(response){
	console.log(response);
	getUserInfo();
	

}

function getUserInfo(){
		FB.api("/"+FB.getAuthResponse().userID,function(rsp){
		alert(rsp.name+" 您好\n 於本app的id為"+rsp.id);
	});
	
}