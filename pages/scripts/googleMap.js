

function setupQueryMap(){
	var doQuery=document.getElementById("askMap").addEventListener("click",queryMap);
	var mapFrame=document.getElementById("mapFrame");
	function queryMap(){
		var question=document.getElementById("question").value;
		var q="&q="+encodeURI(question);
		console.log(q);
		mapFrame.setAttribute("src","https://www.google.com/maps/embed/v1/place?key=AIzaSyDLFEZ4-GlMqvcZI7Wy2_RIko3_rGMGLkg"+q);
	}
	
}