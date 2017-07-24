
var template;
var holder;



function setupAddButton(){

		holder=document.getElementById("mainContactHolder");
		document.getElementById("addMail").addEventListener("click",addNewContact);
		
		function addNewContact(){
			var newContent=template.clone(true);
			var contactCount=document.getElementsByClassName("nxx_serialNo").length;
			newContent.find(".nxx_serialNo")[0].innerHTML=contactCount;
			newContent.removeAttr("id");
			newContent.css("display","block");
			holder.appendChild(newContent[0]);
		}
		

}

function setupContactInfoModel(){
	template=$("#contactListModel");
	template.find("#saveContactInfo").on("click",saveContactInfo);
	template.find("#saveContactInfo").removeAttr("id");
	
	
	function saveContactInfo(){
		var house=$(this).parent();
		var name=house.find(".nxx_inputName")[0].value;
		var tel=house.find(".nxx_inputTel")[0].value;
		var email=house.find(".nxx_inputEmail")[0].value;
		
		if(name!==""&&tel!==""&&email!==""){
			house.find(".infoInput").hide();
			house.find(".nxx_displayName")[0].innerHTML=name;
			house.find(".nxx_displayTel")[0].innerHTML=tel;
			house.find(".nxx_displayEmail")[0].innerHTML=email;
			house.find(".infoDisplay").show();
			$(this).hide();
			alert("  姓名: "+name+"\n  電話: "+tel+"\n  電郵:"+email);
		}else{
			alert("沒有輸入任何資料或資料不完整，請重新輸入資料");
		}
		

		
		
		
		
	}
	
}