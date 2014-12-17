function iniciarSesion(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if(typeof(Storage) !== "undefined") {
		guardarUP(username, password);
	}
}

function registrar(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var email = document.getElementById("email").value;
	var nit = document.getElementById("nit").value;
	var ci = document.getElementById("ci").value;
	if(typeof(Storage) !== "undefined") {
		guardarUP(username, password);
		localStorage.setItem("email", email);
		localStorage.setItem("nit", nit);
		localStorage.setItem("ci", ci);
	}
}

function guardarUP(username, password){
	localStorage.setItem("username", username);
	localStorage.setItem("password", password);
}


