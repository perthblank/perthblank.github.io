$(document).ready(init);

function init(){
	$(".divCard").click(function(ev){
		ev.preventDefault();
		var link = $(this).children("a");
		var url = link.attr("href");

		if(link.hasClass("inPageLink")){
			$("#btn_project").click();
			$("#site_content").fadeOut();
			$("#dvHead").hide();
			$("#site_content2").load(url);
			$("#site_content2").show();
			window.scroll(0,0);
		}

		else{
			location.href=url;
		}
	
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

