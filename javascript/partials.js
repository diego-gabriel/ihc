$(document).ready(function(){
	renderHeader();

	url = document.URL;
	if (url.search("index.html") == -1 && url.search("registrar.html") == -1)
		insertUserMenu();

	initMainMenu();
	renderFooter();
	initStrippedTable();
});

function renderHeader () {
	$('div.header').append("<div class = 'header-content'></div>");
	$('div.header-content').append('<img src="images/logo.gif">');
	$('div.header-content').append('<h1>IHC Formularios<sup class = "registered">&reg;</sup></h1>');
}

function insertUserMenu () {
	header = $('div.header-content');
	header.append("<div class = 'user-menu'> Bienvenido "+ localStorage.getItem("username") +"!</div>");
	header.append("<div class = 'user-data'></div>");
	userData = $('div.user-data');
	userData.append('<p class = "no-margin"> NIT: ' + localStorage.getItem('nit') + '</p>');
	userData.append('<p class = "no-margin"> C.I.: ' + localStorage.getItem('ci') + '</p>');
	$(".user-menu").append("<ul id = 'user-menu'></ul>");
	menu = $('#user-menu');
	menu.append('<li> <a href="editarCuenta.html" class = "no-style">Editar Cuenta</a></li>	');
	menu.append('<li onclick = "cerrarSesion()"> <a href="index.html" class = "no-style">Cerrar Sesion</a></li>	');
	menu.hide();
	$('div.user-menu').hover(toggleMenu, toggleMenu);
}

function toggleMenu(){
	$('#user-menu').stop().slideToggle(500);
}

function renderFooter () {
	body = $('#body');
	body.append('<footer><div id = "footerline"></div></footer>');
	footer = $('footer');
	footer.append("<p>Sitio dise&ntilde;ado por: Alison Fern&aacute;ndez Blanco &#149; Diego Gabriel N&uacute;&ntilde;ez Dur&aacute;n </p>");
	footer.append("<i>Universidad Mayor de San Sim&oacute;n &#149; Interacci&oacute;n Humano Computadora</i>")
}
function initMainMenu(){

	$('ul.menu li:even').addClass("darker");
	$('ul.menu li:gt(0)').addClass("left-b");
	$('ul.menu li:first').addClass("first");
	$('ul.menu li:last').addClass("last");
}


function cerrarSesion() {
	localStorage.clear();
}

function initStrippedTable () {
	table = $('table.stripped tbody');
	var rows = table.children();
	rows.each(function(index){
		$(this).attr("id", "f-"+index);
		$(this).find('td:last-child').html("formulario" + index);
		if (index % 2 == 0){
			$(this).addClass("stripped");
		}
	});
}

function addFormRow () {
	$('table.formularios tbody').append("<tr class = 'last'></tr>");
	row = $('table.formularios tr.last');
	var number = $('table.formularios tbody').children().length-1;
	for (var i = 0; i < 7; i++){
		if (number % 2 == 0)
			row.append("<td><input class = 'no-style box stripped' type = 'text'></td>");
		else
			row.append("<td><input class = 'no-style box' type = 'text'></td>");
		if (i == 0){
			row.find(":first-child").html(number).append("<input type = 'checkbox' class = 'checkbox'>");
		}
		if (i == 1){
			row.find(":last-child").focus();
		}	
	}
	row.removeClass("last");
	if (number % 2 == 0)
		row.addClass('stripped');
}

function saveForm(){
	var title = $("input[name='nombreFormulario']").val();
	alert("Formulario: " + title + "guardado");
}
