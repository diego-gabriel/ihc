function borrarForm(){
	borrarSeleccion(true);
}

function borrarSeleccion(confirm_required){
	if (!confirm_required || confirm("esta seguro?")){	
		var checks = $("input:checked");
		checks.each(function(index){
			$(this).parent().parent().fadeOut(500);
		});
	}
}

function restaurar(){
	borrarSeleccion(false);
}

function borrarFacturas(){
	borrarSeleccion(true);
}

function restaurarFacturas(){
	borrarSeleccion(false);
}