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

		// $("form").hide();
		$("#firstP").hide();
		$("#formOne").hide();
		$("#buttonOne").hide();
		$(".thankyou").hide();
		$("#formTwo").hide();
		$("#last").show();
		$("#buttonThree").show();
		e.preventDefault();
	});

	$("#buttonThree").click(function(e){
		$("#buttonThree").hide();
		$("#last").hide();
		$(".video").show();
		$("#close").show();
		e.preventDefault();
	})
	$("#close").click(function(e){
		
		$(".video").hide();
		$("#last").hide();
		$("#firstP").show();
		$("#formOne").show();
		$("#buttonOne").show();
		$("#close").hide();
		e.preventDefault();
	})
})