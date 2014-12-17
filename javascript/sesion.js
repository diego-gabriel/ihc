function iniciarSesion(){
	if(typeof(Storage) !== "undefined") {
		guardarUP(username, password);
	}
}

function registrar(){
	if(typeof(Storage) !== "undefined") {
		guardarUP();
		localStorage.setItem("email", $("#email").val());
		localStorage.setItem("nit", $("#nit").val());
		localStorage.setItem("ci", $("#ci").val());
	}
}

function guardarUP(){
	localStorage.setItem("username", $("#username").val());
	localStorage.setItem("password", $("#password").val());
}


