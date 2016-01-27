$(document).ready(function(){

	$("#buttonOne").click(function(e){
		$("#firstP").hide();
		$("#formOne").hide();
		$(".thankyou").show();
		$("#formTwo").show();
		$("#buttonOne").hide();
		e.preventDefault();
	});

	$("#buttonTwo").click(function(e){

		$("form").hide();
		$("#firstP").hide();
		$("#formOne").hide();
		$("#buttonOne").hide();
		$(".thankyou").hide();
		$("#last").show();
		e.preventDefault();
	});
})