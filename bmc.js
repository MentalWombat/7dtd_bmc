$(function() {
	$("form").submit(function() {
		var day = $("#day").val();
		if (day == "") {
			$("#answer").text("Try again and don't forget to enter day number.");
			return false;
		}
		else {
			switch (day % 7) {
				case 0:
					$("#answer").text("It is Blood Moon.").css({"color":"rgb(207,29,22)"});
					return false;
					break;
				case 1:
					$("#answer").text("It's the 1st day of the week.").css({"color":"rgb(213,204,167)"});
					return false;
					break;
				case 2:
					$("#answer").text("It's the 2nd day of the week.").css({"color":"rgb(213,204,167)"});
					return false;
					break;
				case 3:
					$("#answer").text("It's the 3rd day of the week.").css({"color":"rgb(213,204,167)"});
					return false;
					break;
				case 4:
					$("#answer").text("It's the 4th day of the week.").css({"color":"rgb(213,204,167)"});
					return false;
					break;
				case 5:
					$("#answer").text("It's the 5th day of the week.").css({"color":"rgb(213,204,167)"});
					return false;
					break;
				case 6:
					$("#answer").text("It's the 6th day of the week.").css({"color":"rgb(213,204,167)"});
					return false;
			}
		}
	});
	$("#day").keydown(function(){
		$("#answer").html("&nbsp;");
	});
});