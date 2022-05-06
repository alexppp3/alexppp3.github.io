function messageSent() {
	var error = 0;
	if(!document.getElementById("yourname").value) {
		document.getElementById("yourname").classList.add('error');
		error = 1;
	} else {
		document.getElementById("yourname").classList.remove('error');
	}
	if(!document.getElementById("phone").value || /^[\+\d]{9,13}$/g.test(document.getElementById("phone").value)==false) {
		document.getElementById("phone").classList.add('error');
		error = 1;
	} else {
		document.getElementById("phone").classList.remove('error');
	}
	if(!document.getElementById("question").value) {
		document.getElementById("question").classList.add('error');
		error = 1;
	} else {
		document.getElementById("question").classList.remove('error');
	}
	if(error==1) {
		return;
	} else {
		//send request
		document.getElementById("form").innerHTML = '<p class="card-desc">Дякуємо за звернення!</p><p class="card-desc">Ми зв\'яжемося з вами найближчим часом.</p>';
	}
}
$(document).ready(function(){
		  // Add smooth scrolling to all links
		  $(".slow").on('click', function(event) {

			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
			  // Prevent default anchor click behavior
			  event.preventDefault();

			  // Store hash
			  var hash = this.hash;

			  // Using jQuery's animate() method to add smooth page scroll
			  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			  $('html, body').animate({
				scrollTop: $(hash).offset().top
			  }, 800, function(){

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			  });
			} // End if
		  });
		});
		
		$(document).ready(function(){
		  // Add smooth scrolling to all links
		  $(".slowslide").on('click', function(event) {

			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
			  // Prevent default anchor click behavior
			  event.preventDefault();

			  // Store hash
			  var hash = this.hash;

			  // Using jQuery's animate() method to add smooth page scroll
			  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			  $('html, body').animate({
				scrollTop: $(hash).offset().top
			  }, 250, function(){

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			  });
			} // End if
		  });
		});