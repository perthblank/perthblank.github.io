$(document).ready(function(){


	initListener();
	
	});

function goToMain()
{
	$("#metacontent").fadeOut();
	initPage();
	$("#mainCount").fadeIn();
}
	

var blankNumber;
var selectedBlankId = -1;
var chosedStatus = 0;
/**
0 did not make valid choise
1 choosed on the selected
*/		
var answerObj;
var submitted = false;
/**
false did not submit
true submitted
*/

var optionRefnum;

function splitId(id)
{
	var arr = id.split("_");
	
	return arr[1];
}

function initListener()
{
	$(".goBtn").click(function(){
			goToMain();
		});
		
		
	
	$("#highlightBtn").click(function(){
			highlightText();
		});	
	
	$("#submitBtn").click(function(){
			showResult();
		});
		
	
	$(document).on("click",".closureBlank",function(){
			selectedBlank(splitId(this.id));
		});	
		
	$(document).on("mousedown",".closureBlank",function(e){
			e.preventDefault();
			$(this).blur();
			return false;
		});	
		
	$(document).on("mouseover",".closureBlank",function(){
			hoverBlank(this.id);
		});	
		
	$(document).on("mouseout",".closureBlank",function(){
			$(this).removeClass("closureBlank-hover");
		});	
	
		
	$(document).on("click",".closureOption",function(){
			chooseOption(this.id);
		});		
		
	$(document).on("mouseover",".closureOption",function(){
			hoverOption(this.id);
		});		
	
	
	$(document).on("mouseout",".closureOption",function(){
			eraseOption(this.id);
		});	
	
	$(document).on("click",".numberBtn",function(){
			selectedBlank(splitId(this.id));
			location.href="#blank_"+splitId(this.id);
		});	

/*		
	$(document).on("mouseover",".numberBtn",function(){
			hoverBlank(splitId(this.id));
		});	
		*/
}


function eraseOption()
{
	if(selectedBlankId == -1 || chosedStatus == 1){
		return;
	}
	
	$("#"+selectedBlankId).val(" ");
}

function chooseOption(optId)
{
	if(selectedBlankId == -1 ){
		return;
	}
	
	chosedStatus = 1;
	
	var originOptId = $("#"+selectedBlankId).attr("chosedOptId");
	if( originOptId){	 
		//alert($("#"+selectedBlankId).attr("chosedOptId"));
		var idNum = splitId(originOptId);
		optionRefnum[idNum] --;
		if(optionRefnum[idNum] == 0)
		{
			$("#"+originOptId).removeClass("del");
		}
	}
	
	var text = $("#"+optId).html();
	$("#"+selectedBlankId).val(text);
	$("#"+selectedBlankId).attr("chosedOptId", optId);
	optionRefnum[splitId(optId)] ++;
	$("#"+optId).addClass("del");
}
		
		
function hoverOption(optId)
{

	if(selectedBlankId == -1 || chosedStatus == 1){
		return;
	}
	
	var text = $("#"+optId).html();
	$("#"+selectedBlankId).val(text);

}
		
function selectedBlank(id)
{

	if(selectedBlankId != -1)
	{
		var lastId = splitId(selectedBlankId);
		$("#numBtnOuter_"+lastId).removeClass("numberBtnSelected");
	}
	
	$("#numBtnOuter_"+id).addClass("numberBtnSelected");

	var blankId = "blank_"+id;
	var numBtnId = "numBtn_"+id;
	if(!submitted ){
	  	chosedStatus = 0;
		if(selectedBlankId != -1)
		{
			$("#"+selectedBlankId).removeClass("closureBlankSelected");
		}
	
		$("#"+blankId).addClass("closureBlankSelected");
	
		
	}
	else
	{
	
		if(selectedBlankId != -1)
		{
			var lastId = splitId(selectedBlankId);
			$(".highlight_"+lastId).removeClass("highlight");
		}
		showAnswerExp(id);
		$(".highlight_"+id).addClass("highlight");
	}
	
	selectedBlankId = blankId;
	
}	

function hoverBlank(blankId)
{
	if(submitted)
	{
		return;
	}
	$("#"+blankId).addClass("closureBlank-hover");
	
}	



var lastarticleCountHeight;
var lastHandleTop;
function resizeCount(ui)
{
	var dif = ui.position.top -lastHandleTop ;

	$("#articleCount").height(lastarticleCountHeight+dif);

}

		
function initPage() 
{

    // resize handle
	$("#resizeHandle").draggable({
		axis: "y",
		start: function( event, ui ) {
			lastarticleCountHeight = $("#articleCount").height();
			lastHandleTop = ui.position.top;
		},
	
	  	drag: function( event, ui ) {
			ui.position.top=Math.min( 670, ui.position.top );
			ui.position.top=Math.max( 200, ui.position.top );
			resizeCount(ui);
	
		  },
		 refreshPositions: true
	});

	// the article
	var artContent = $("#artContent").val();
	var arr = artContent.split("_____");
	$("#articleCountInner").append(arr[0]);
	
	blankNumber = arr.length-1;
	
	for(var i = 0; i<blankNumber; i++){
	
	
		$('<input/>', {
			id: "blank_"+i,
			name: "blank_"+i,
			class: "closureBlank",
			type:"text",
		
		
		}).appendTo('#articleCountInner');
		
		$("#articleCountInner").append(arr[i+1]);
		
		
		var newLi = $('<li/>', {
			id: "numBtnOuter_"+i,
			class:"numberBtnOuter"
		});
		$("#numberList").append(newLi);
		
		

		$('<span/>', {
			id: "numBtn_"+i,
			class: "numberBtn",
			text: i+1
		}).appendTo(newLi);
		

	}
	

	
	
	var artOptions = $("#artOptions").val();
	var options = artOptions.split(",");
	// do some shuffle
	var numOfShuffle = 8;
	for(var i = 0; i<numOfShuffle; i++){
		var ind1 = Math.floor((Math.random()*options.length));
		var ind2 = Math.floor((Math.random()*options.length));		
		var tmp = options[ind1];
		options[ind1] = options[ind2];
		options[ind2] = tmp;
	}
	
	
	//global
	optionRefnum = new Array(options.length);
	
	var currentRow;
	
	for(var i = 0; i<options.length; i++)
	{
		optionRefnum[i] = 0;
		if(i%3 ==0)
		{
			currentRow = $('<tr/>', {});
			$("#optionTable").append(currentRow);
		}
		
		var newId = "opti_"+i;
		var newCell = $('<td/>', {
			text: options[i],
			class: "closureOption",
			id:newId
		});

		newCell.appendTo(currentRow);
		
	}
	
	answerObj = JSON.parse($("#artAnswer").val());

}

function setBlankCorrect(id)
{

	$("#numBtn_"+id).addClass("rightResultBtn");
}

function setBlankWrong(id)
{
	$("#blank_"+id).addClass("del");
	$("#blank_"+id).addClass("wrongResult");
	$("#numBtn_"+id).addClass("wrongResultBtn");
	var hint = $('<span/>', {
		text: answerObj.answers[id].content,
		class: "closureBlankSelected hint"
	});
	$("#blank_"+id).after(hint);
}
	
	
function showResult()
{

	if(selectedBlankId != -1)
	{
		$("#"+selectedBlankId).removeClass("closureBlankSelected");
	}
	
	submitted = true;
	$("#optionTableCount").hide();
	$("#answerExpCount").show();

	$("#answerResultTable").empty();
	var currentRow;
	var correctCounter = 0;
	for(var i = 0; i<blankNumber; i++)
	{
	
		var chosedAnswer = $("#blank_"+i).val();
		//alert(chosedAnswer);
	
	
		var classStr;
		
		if(chosedAnswer=="")
		{
			 $("#blank_"+i).val("-");
		}
		
		if(chosedAnswer==answerObj.answers[i].content)
		{
			correctCounter ++;
			classStr = "rightResult";
			setBlankCorrect(i);
		}
		else
		{
			classStr = "wrongResult";
			setBlankWrong(i);
		}
	
		if(i%5 ==0)
		{
			currentRow = $('<tr/>', {});
			$("#answerResultTable").append(currentRow);
		}
		

		var newCell = $('<td/>', {
			text: i+1,
			class: classStr
		});

		newCell.appendTo(currentRow);
	}
	
	if(correctCounter ==0 ){
		$("#correctPercent").html("0%")
		}
	else{
		$("#correctPercent").html(correctCounter+"0%")
		}

	selectedBlank(0);
}	

function showAnswerExp(id)
{
	$("#answerExpCountInner").html(answerObj.answers[id].explain);
}


function highlightText() {
 
  var textComponent = document.getElementById('artContent');

  var selectedText;
  // IE version, TODO
  if (document.selection != undefined)
  {
    textComponent.focus();
    var sel = document.selection.createRange();
    selectedText = sel.text;
    
    var blankId = prompt("要高亮 "+selectedText+" 给第几个空？");
    if(!blankId)
    {
    	return;
    }
    blankId = blankId-1;
    sel.text = 	'<span class="highlighted highlight_'+blankId+'">'
    	+selectedText
    	+'</span>';
  }
  // Mozilla version
  else if (textComponent.selectionStart != undefined)
  {
    var startPos = textComponent.selectionStart;
    var endPos = textComponent.selectionEnd;
    selectedText = textComponent.value.substring(startPos, endPos);
    var blankId = prompt("要高亮 "+selectedText+" 给第几个空？");
    if(!blankId)
    {
    	return;
    }
    blankId = blankId-1;
    textComponent.value = textComponent.value.substring(0, startPos)
    	+'<span class="highlighted highlight_'+blankId+'">'
    	+selectedText
    	+'</span>'
    	+textComponent.value.substring(endPos, textComponent.value.length);
    	
  }
   
   
}
		
