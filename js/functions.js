$(document).ready(function() { 
    $('select').material_select();

        
  
	/* this is the code I wrote to animate labels without frameworks: 

	var myInputs =  $(".estiloInput");

	myInputs.each(function() {
		var input = $(this).children('input')[0];
		var label = $(this).children('label')[0];
		$(input).on("focus", function()
			{ 
				focus(input, label)
			});
		$(input).on("focusout", function(){ 
			focusOut(input, label)
		});
	});*/
}); 

/* this are the functions invoked above for the label animation. In my first commit you can see this, working. 

function focus (input, label) {
	if (!label.classList.contains('active') && input.value == '') {
        $(label).addClass('active');  
    }
    else if (input.value == '') { 
        $(label).removeClass('active');
    };
}

function focusOut (input, label) {
	if (input.value == '') { 
        $(label).removeClass('active');
    };

} */

/*function validarNombre () {
	if ($('#name').val() == '') {
		$('#nombre').append('<p>Ingrese un nombre<p>'); 
		$('#nombre').show();
	}
}*/

 