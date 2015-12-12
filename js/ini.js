$(document).ready(init);

function init(){
	$(".divCard").click(function(ev){
		var url = $(this).children("a").attr("href");
		//location.href=url;

		ev.preventDefault();
		$("#site_content").fadeOut();
		$("#dvHead").hide();
		$("#site_content2").load(url);
		$("#site_content2").show();
	
		window.scroll(0,0);
	
	});


	$("#lava_menu li").click(function(){
		$("#lava_menu .current").removeClass("current");		
	
	});

	$("#btn_project").click(function(){
		$("#site_content2").hide();
		$("#dvHead").show();
		$("#site_content").show();
	


	});

}

