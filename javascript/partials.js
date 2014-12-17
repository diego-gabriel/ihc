$(document).ready(function(){
	renderHeader();
	insertUserMenu();
	initMainMenu();
	renderFooter();
});

function renderHeader () {
	$('div.header').append("<div class = 'header-content'></div>");
	$('div.header-content').append('<img src="images/logo.gif">');
	$('div.header-content').append('<h1>IHC Formularios<sup class = "registered">&reg;</sup></h1>');
}

function insertUserMenu () {
	header = $('div.header-content');
	header.append("<div class = 'user-menu'> Bienvenido @Usuario!</div>");
	$(".user-menu").append("<ul></ul>");
	menu = $('.user-menu');
	menu.append('<li>opcion1</li>');
	menu.append('<li>opcion2</li>');
	menu.append('<li>opcion3</li>');
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