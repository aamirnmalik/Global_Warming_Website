$(document).ready(function(){

	$("#buttonOne").click(function(e){
		$("#formOne").hide();
		$("#formTwo").show();
		e.preventDefault();
	});
})