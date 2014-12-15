$(document).ready(function(){
	header = $('div.header');
	header.append("<div class = 'user-menu'> Bienvenido @Usuario!</div>");
	$(".user-menu").append("<ul></ul>");
	menu = $('.user-menu');
	menu.append('<li>opcion1</li>');
	menu.append('<li>opcion2</li>');
	menu.append('<li>opcion3</li>');
});