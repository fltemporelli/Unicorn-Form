$(document).ready(function() { 
    $('select').material_select();


    reset (); 

    dropDown(); 

    closeDropdown(); 


	$('input[type="range"]').on("input change", function () {
	    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
	    var val2 = val*228; 

	    $('.line').css('width', val2); 
	});


	var checkbox = $('input[type="checkbox"]'); 

			$(checkbox).on("click", function () { 

			checkbox.attr("value", "off"); 

	}); 
   /* $('input[type="range"]::-webkit-slider-runnable-track').change(function () {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    
    $(this).css('background-image',
                'linear-gradient(to right'
                + ', #94A14E' + val*100 + '), '
                + ', #C5C5C5' + val*100 + ')'
                );
	});*/
  
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

/* this are the functions invoked above for the label animation. You can see this in the first 
commit. 

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

		

function formValidation () {
		
		var gender = document.getElementById('gender').value;  
		/*I had to use "getElementById" because it didn't seem to work with Jquery selector*/
		var furColor = document.getElementById('color').value; 
		var unicornName = document.getElementById('unicornName').value; 

		console.log(unicornName); 
		console.log(gender); 

		if(gender == '') {
			$('div.show p').show();
		}

		if(furColor == '') {
			$('div.error3 p').show();
		} 

		if(unicornName == '') {
			$('div.errors p').show(); 
		}

}

function reset () {
		$('#unicornName').on('focus', function() {
			$('div.errors p').slideUp(); 
		}); 
}

function dropDown() {

		$('#nav').on('click', function () {
				$('#menu-dropdown').toggle(500); 
		}); 

}

function closeDropdown() {
		$('#nav').on('focusout', function () {
				$('#menu-dropdown').hide(500); 
		}); 

}