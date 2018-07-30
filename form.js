const name = document.getElementById('name');
const number = document.getElementById('number');
const address = document.getElementById('address');
const file = document.getElementById('file');
const submit = document.getElementById('submit');
const back = document.getElementById('back');
 var image = document.getElementById('image');
let users={};
let itemsArray=[];
let imgurl;


 var openFile = function(event) {
    input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      dataURL = reader.result;

      image.src = dataURL;

    };
   reader.readAsDataURL(input.files[0]);
   };

   

submit.addEventListener('click',function(e){
	var inputs = document.querySelector("form").elements;
	var users = {};
	itemsArray = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];


for (i = 0; i < inputs.length-1; i++) {
  users[inputs[i].name] = inputs[i].value;
}
users["image"] = dataURL;
users["id"] = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
 
console.log(users);
console.log(JSON.stringify(users));
itemsArray.push(users);

localStorage.setItem('user',JSON.stringify(itemsArray));

for (i = 0; i < inputs.length; i++) {
  inputs[i].value="";
}

location.href="index.html"
});

back.onclick=function(){

  location.href="index.html";
}


