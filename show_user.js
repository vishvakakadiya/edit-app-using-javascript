const div = document.getElementById('cards');
const data=JSON.parse(localStorage.getItem('user'));

if (data!=null) {
for (var i = 0; i < data.length; i++) {

	createDiv(data[i]);
	console.log(data[i].id);
}
}


/*function to create div*/

function createDiv(data){
	let divdata = data;
	const mainDiv= document.createElement('div');
	mainDiv.className = "card";
	div.appendChild(mainDiv);	
	createLink(mainDiv,divdata);
	createImg(mainDiv,divdata);
	createName(mainDiv,divdata);
	createAddress(mainDiv,divdata);
	createNumber(mainDiv,divdata);
}

function createLink(mainDiv,divdata){
	let linkdata=divdata.id;
	console.log(linkdata);
	const a= document.createElement('a');
	a.className="pull-right";
	a.textContent="Edit";
	mainDiv.appendChild(a);
	a.onclick=function(){
		a.href = "update.html?id="+linkdata;
	}
}


function createImg(mainDiv,data){
	const imgDiv= document.createElement('div');
	imgDiv.className="pull-left";
	const img= document.createElement('img');
	img.className="profile-image";
	img.src=data.image;
	imgDiv.appendChild(img);
	mainDiv.appendChild(imgDiv);
}

function createName(mainDiv,data){
	const name= document.createElement('h3');
	name.textContent=data.name;
	mainDiv.appendChild(name);
	const br = document.createElement('br');
	mainDiv.appendChild(br);
}

function createAddress(mainDiv,data){
	const address_icon= document.createElement('span');
	address_icon.className="glyphicon glyphicon-map-marker";
	const address = document.createElement('em');
	address.textContent=data.address;
	address_icon.appendChild(address);
	mainDiv.appendChild(address_icon);
	const br = document.createElement('br');
	mainDiv.appendChild(br);
}

function createNumber(mainDiv,data){
	const number_icon= document.createElement('span');
	number_icon.className="glyphicon glyphicon-phone";
	const number = document.createElement('em');
	number.textContent=data.number;
	number_icon.appendChild(number);
	mainDiv.appendChild(number_icon);
}

