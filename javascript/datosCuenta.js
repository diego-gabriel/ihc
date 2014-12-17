$(document).ready(function(){
	agregarDatos();
});

function agregarDatos(){
	$('#username').text(localStorage.getItem("username"));
	$("input[name='password']").val(localStorage.getItem("password"));
	$('#nit').text(localStorage.getItem("nit"));
	$("input[name='email']").val(localStorage.getItem("email"));
	$('#ci').text(localStorage.getItem("ci"));
}

function actualizarDatos(){
	localStorage.setItem("password", $("input[name='password']").val());
	localStorage.setItem("email", $("input[name='email']").val());
}