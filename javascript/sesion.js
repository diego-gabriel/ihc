function iniciarSesion(){
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	if(typeof(Storage) !== "undefined") {
		guardarUP(username.value, password.value);
	}
}

function guardarUP(username, password){
	localStorage.setItem("username", username);
	localStorage.setItem("password", password);
}

