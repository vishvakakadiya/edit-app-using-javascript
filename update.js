//code for getting id
let url=window.location.href;
let id1=url.split("=");
let id=id1[1];	

//code for getting data through id
let u_name,u_address,u_number,u_image; 
let data=JSON.parse(localStorage.getItem('user'));
console.log(data);

for (var i = 0; i < data.length; i++) {
	if (data[i].id==id) {
		
		u_name = data[i].name;
		console.log(u_name);
		u_number = data[i].number;
		u_address = data[i].address;
		u_image = data[i].image;
	}
}


//set data to page
const image=document.getElementById('u_image');
const file=document.getElementById('u_file');
const name_label=document.getElementById('u_name');
const name_input=document.getElementById('u_name_input');
const name_div=document.getElementById('u_name_div');
const address_lebel=document.getElementById('u_address');
const address_input=document.getElementById('u_address_input');
const address_div=document.getElementById('u_address_div');
const number_lebel=document.getElementById('u_number');
const number_input=document.getElementById('u_number_input');
const number_div=document.getElementById('u_number_div');
const u_delete=document.getElementById('u_delete');
const u_back=document.getElementById('u_back');
console.log(u_name);
let dataURL;

image.src = u_image;
console.log(u_image);
name_label.innerHTML = u_name;
name_input.value = u_name;

address_lebel.innerHTML = u_address;
address_input.value = u_address;

number_lebel.innerHTML = u_number;
number_input.value = u_number;

file.onchange=function(event){

	 input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      dataURL = reader.result;
      image.src = dataURL;
      u_image = dataURL;
    };
   reader.readAsDataURL(input.files[0]);
}




name_div.ondblclick=function(){
	name_label.style.display = "none";
	name_input.style.display = "block";
}

name_input.onblur=function(){
	 u_name=name_input.value;
	 name_input.style.display="none";
	 name_label.innerHTML=name_input.value;
	 name_label.style.display="block";
	 console.log(u_name);

}

number_div.ondblclick=function(){
	number_lebel.style.display = "none";
	number_input.style.display = "block";
}

number_input.onblur=function(){
	 u_number=number_input.value;
	 number_input.style.display="none";
	 number_lebel.innerHTML=number_input.value;
	 number_lebel.style.display="block";
	 console.log(u_number);

}

address_div.ondblclick=function(){
	address_lebel.style.display = "none";
	address_input.style.display = "block";
}

address_input.onblur=function(){
	 u_address=address_input.value;
	 address_input.style.display="none";
	 address_input.innerHTML=address_input.value;
	 address_lebel.style.display="block";
	 console.log(u_address);

}

u_back.onclick=function(){

for (var i = 0; i < data.length; i++) {
	if (data[i].id==id) {
		
		data[i].name=u_name;
		data[i].number=u_number;
		data[i].address=u_address;
		data[i].image=u_image;
		data[i].id=id;
	}
}

if (localStorage.getItem('user')) {

	localStorage.clear();
	localStorage.setItem('user',JSON.stringify(data));
	location.href="index.html"
}
else{

	localStorage.setItem('user',JSON.stringify(data));
	location.href="index.html"

}

}


u_delete.onclick=function(){

for (var i = 0; i < data.length; i++) {
	if (data[i].id==id) {
		
		data.splice(i,1);
	}
}

if (localStorage.getItem('user')) {

	localStorage.clear();
	localStorage.setItem('user',JSON.stringify(data));
	location.href="index.html"
}
else{

	localStorage.setItem('user',JSON.stringify(data));
	location.href="index.html"

}

}









