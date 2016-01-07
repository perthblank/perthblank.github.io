$(document).ready(init);

var strSeeCBlog = "The code is been migrating, check it on my Chinese blog (Just Ignore the Chinese Words:)) "

/*
var footerstr = '<footer><div class="inner_copyright">perthblank</div><p>Protect yourself</p><p>perthblank.in &copy; 2015, theme by <a href="http://www.css3templates.co.uk/"> my_portfolio </a></p><p><!-- GoStats JavaScript Based Code -->'+
		'<!--'+
		'<script type="text/javascript" src="http://gostats.cn/js/counter.js"></script>'+
		'<script type="text/javascript">_gos="monster.gostats.cn";_goa=477032;'+
	'	_got=6;_goi=6;_gol="博客计数器";_GoStatsRun();</script>'+
	'	<noscript><a target="_blank" title="博客计数器" '+
	'	href="http://gostats.cn"><img alt="博客计数器" '+
	'	src="http://monster.gostats.cn/bin/count/a_477032/t_6/i_6/counter.png" '+
	'	style="border-width:0" /></a></noscript>'+
	'	-->'+
	'	<!-- End GoStats JavaScript Based Code -->'+
	'	</p></footer>';
*/

function loadContent(url){

	$("#site_content").fadeOut();
	$("#dvHead").hide();
	$("#site_content2_in").load(url);
	$("#site_content2").show();
	
	window.scroll(0,0);	
}

function init(){

	$("#site_content2").hide();
	$(".divCard").click(function(ev){
		ev.preventDefault();
		var link = $(this).children("a");
		var url = link.attr("href");

		if(link.hasClass("inPageLink")){
			location.href="post.html?targ="+url;
		}

		else{
			location.href=url;
		}
	
	});

	$(".inPageLinkCont").click(function(ev){
		ev.preventDefault();
		var link = $(this).children("a");
		var url = link.attr("href");
		loadContent(url);
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

