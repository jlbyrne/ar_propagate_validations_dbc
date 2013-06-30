$(document).ready(function () {

  // send an HTTP DELETE request for the sign-out link
  $('a#sign-out').on("click", function (e) {
    e.preventDefault();
    var request = $.ajax({ url: $(this).attr('href'), type: 'delete' });
    request.done(function () { window.location = "/"; });
  });

  $('form#create_event').on('submit', function(e){
  	e.preventDefault();
	  $.ajax({
  		url: '/events/create',
  		type: 'post',
  		data: $(this).serialize()
  	}).done(function(response){
  		$('#event_confirmation').html(response);
  	});
  });

});
