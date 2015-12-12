$(document).ready(init);

function init(){
	$(".divCard").click(function(ev){
		var url = $(this).children("a").attr("href");
		//location.href=url;

		ev.preventDefault();
		$("#site_content").fadeOut();
		$("#dvHead").hide();
		$("#site_content2").load(url)
			
			});
}

