
	document.getElementById('wrapper').addEventListener('contextmenu',function(){
		
		return false;
	})


	var Employe={"name":"Rudra","Surname":"pandit"};





function getItem(){

	//alert("I am function");
}

getItem();

function setTime(){




	var date =new Date();
	var h=date.getHours();
	var m=date.getMinutes();

	var s=date.getSeconds();
     var curTime=h+' : '+m+' : '+s;
	document.getElementById('currentTime').textContent=curTime

}
setInterval(setTime,1000);
     
setTime();

///////////validating home enquiry form 
var enquiries=[];

function validateForm(){
	
       
	var form=document.forms['quickForm'];
	var name=form['name'].value;
	var address=form['address'].value;
	var email=form['email'].value;
	var phone=form['phone'].value;
	var message=form['message'].value;
	
	if((name && address && email && phone && message)!='')
	{
       var data={
         'Name':name,
         'Address':address,
         'Email':email,
         'Phone':phone,
         'Message':message,

       }

       enquiries.push(data);
     
var displayContent="";
for(i=0;i<enquiries.length;i++){
  var index=i+1;
var tempRow='<tr><td>'+index+'</td><td>'+enquiries[i].Name+'</td><td>'+enquiries[i].Address+'</td><td>'+enquiries[i].Email+'</td><td>'+enquiries[i].Phone+'</td><td>'+enquiries[i].Message+'</td><td><button onclick="alert(\'i am clicked\')">Delete<button></td></tr>';
displayContent+=tempRow;
}
document.getElementById('userInfoTableHome').innerHTML=displayContent;

	}
	else{
		alert('Blank submission is not alllowed');
	}
}

