function borrarForm(){
	borrarFormulario(true);
}

function borrarFormulario(confirm_required){
	if (!confirm_required || confirm("esta seguro?")){	
		var checks = $("input:checked");
		checks.each(function(index){
			$(this).parent().parent().fadeOut(500);
		});
	}
}

function restaurar(){
	borrarFormulario(false);
}