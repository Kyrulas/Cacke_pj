$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
  $( "#orderForm" ).submit(function( event ) {
  	validateForm();
	  event.preventDefault();
	  if(validateForm()){
	  $.ajax({
	  	url:"addOrder",
	  	method:"POST",
	  	data: $('#orderForm').serialize(),
	  	statusCode: {
	  		200: function(){
	  			$('#send').text('Замовлення прийнято');
	  			$('#orderForm')[0].reset();
	  			$('.orderInput').removeClass('empty');
	  			$('#sendMessage').text("");
	  			setTimeout(function() { $('#send').text('Відправити') }, 2000);
	  		}
	  	}
	  });
		}
	});
});

	function validateForm(){
		var isValid = true;
		if($('input[name="user"]').val() == ""){
			$('#sendMessage').text('---Заповніть всі поля---');
	 		$('input[name="user"]').addClass('empty');
			isValid = false;
		}else{
			$('input[name="user"]').removeClass('empty');
		}
		if($('input[name="phone"]').val() == ""){
			$('#sendMessage').text('---Заповніть всі поля---');
	 		$('input[name="phone"]').addClass('empty');
			isValid = false;
		}else{
			$('input[name="phone"]').removeClass('empty');
		}
		if($('textarea[name="description"]').val() == ""){
			$('#sendMessage').text('---Заповніть всі поля---');
	 		$('textarea[name="description"]').addClass('empty');
			isValid = false;
		}else{
			$('textarea[name="description"]').removeClass('empty');
		}
		return isValid;
	}