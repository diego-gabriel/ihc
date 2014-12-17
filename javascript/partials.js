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
	menu.append('<li> <a href="index.html" class = "no-style">Cerrar Sesion</a></li>	');
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

function initStrippedTable () {
	table = $('table.stripped tbody');
	var rows = table.children();
	rows.each(function(index){
		$(this).find('input').attr("id", "f-"+index);
		$(this).find('td:last-child').html("formulario" + index);
	});
}