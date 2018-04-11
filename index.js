var stora = [];
function addContact(myName){
  if(!emptys()){ 
    myName =   document.getElementById("name").value;
    var myAddress =   document.getElementById("address").value;
    var myEmail = document.getElementById("email").value;
    var myPhone = document.getElementById("phone").value;
  
    var thePosi = document.getElementById("contactList");
    var newElement = document.createElement('li');
    newElement.setAttribute('id','newEle');
    var newText = document.createTextNode(myName);
    newElement.appendChild(newText);
    thePosi.appendChild(newElement);
    // clear all fields
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  
    var contactObject = {name:myName, address:myAddress, email:myEmail, phone:myPhone}
    stora.push(contactObject);
  
    var lisLink = document.querySelector('ul');
    lisLink.addEventListener("click", function(e){
     var x = event.target;
      for(var i = 0; i <stora.length; i++){
        if(e.target.tagName == "LI" && e.target.innerHTML == stora[i].name){
          document.getElementById("showtext").value = 'Address: ' + stora[i].address + '\n' + 'Email: ' + stora[i].email + '\n' + 'Phone: ' + stora[i].phone;
        }
      }
   
 var deleter = document.getElementById('clicker');
  deleter.addEventListener('click',function(){
    document.getElementById("showtext").value = "";
   // x.innerHTML="";

// var x = document.getElementById("newEle");
x.parentNode.removeChild(x);

//     var g = document.getElementById('contactList');
// for (var i = 0, len = g.children.length; i < len; i++)
// {

//     (function(index){
        
//               alert(index)  ;    
//     })(i);

// }


  },false);
  var editer =document.getElementById('edite');
  editer.addEventListener('click',function(){
     document.getElementById("showtext").value = "";
    x.parentNode.removeChild(x);
    document.getElementById("name").value =contactObject.name; 
    document.getElementById("address").value =contactObject.address; 
    document.getElementById("email").value =contactObject.email;
    document.getElementById("phone").value = contactObject.phone; 
 


  },false);


    }, false);
  }
}

function emptys(){
	var isEmpty = false,
		myname = document.getElementById("name").value,
		myaddress = document.getElementById("address").value,
		myemail = document.getElementById("email").value;
		myphone = document.getElementById("phone").value;
	if(myname === "" || myaddress === "" || myemail === "" || myphone === ""){
		alert("operation is not allowed!");
		isEmpty = true;
	}

	return isEmpty;
}

// function deletes() {
//   document.getElementById("showtext").value = "";
//   document.getElementById("showtext").value = ""; 

// }
function clearTextarea() {
  document.getElementById("showtext").value = "";
}