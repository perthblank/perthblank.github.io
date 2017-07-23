$(document).ready(init);

var strSeeCBlog = "The code is been migrating, check it on my Chinese blog (Just Ignore the Chinese Words:)) "

function loadContent(url){

  $("#site_content").fadeOut();
  $("#dvHead").hide();
  $("#site_content2_in").load(url);
  $("#site_content2").show();
  
  window.scroll(0,0);  
}

function init(){

  $("#site_content2").hide();
  $(".divCard").on("click", function(ev){
    ev.preventDefault();
    var link = $(this).children("a");
    var url = $(this).attr("targ");

    if($(this).hasClass("inPageLink")){
      location.href="post.html?targ="+url;
    }

    else{
      location.href=url;
    }
  
  });

  $(".inPageLinkCont").on("click", function(ev){
    ev.preventDefault();
    var link = $(this).children("a");
    var url = link.attr("href");
    loadContent(url);
  });

}

