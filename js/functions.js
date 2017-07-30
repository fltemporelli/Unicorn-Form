$(document).ready(function() { 
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
	});
}); 

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

}