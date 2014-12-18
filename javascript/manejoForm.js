function borrarForm(){
	var checks = $("input:checked");
	checks.each(function(index){
		$(this).parent().parent().fadeOut(500);
	});
}

function restaurar(){
	borrarForm();
}

function borrarFacturas(){
	var checks = $("input:checked");
	checks.each(function(index){
		$(this).parent().parent().fadeOut(500);
	});
}

function restaurarFacturas(){
	borrarFacturas();
}