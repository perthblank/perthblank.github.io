$(document).ready(init);

function init(){
	$(".divCard").click(function(){
		var url = $(this).children("a").attr("href");
		location.href=url;
			
			});
}

