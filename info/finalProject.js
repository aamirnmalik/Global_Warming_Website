$(document).ready(function() {
  $('#play-video').on('click', function(ev) {
 
    $("#video")[0].src += "&autoplay=1";
    ev.preventDefault();
  });
  $("#buttonOne").click(function(e){
		$(".iform").hide();
		$(".thankyou ").show();
		$("#buttonOne").hide();
		$("#video").show();
		$("#buttonTwo").show();
		e.preventDefault();
	});
  $("#buttonTwo").click(function(e){
		$(".thankyou ").hide();
		$("#buttonOne").hide();
		$("#video").hide();
		$(".iform").show();
		$("#buttonTwo").hide();
		$("#buttonOne").show();
		e.preventDefault();
	});
});