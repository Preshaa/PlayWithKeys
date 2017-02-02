$(document).ready(function(){ 
	$("#pop").hide();
	$(".Popup").hide();
  var count=4;                                              //countdown block
  var countdown = setInterval(function(){
		count--;
		$("div#count").text("");
		if (count==0) {
			$("div#count").append("START");   
			Start();
			clearInterval(countdown);
		}
		else
		  $("div#count").append(count);    
	},1000);  
});    

function Timeout(text){                                        //after timeout
 	setTimeout(function() {
 		$("#pop").hide();
 		$(".Popup p").text("");
 		$("#inputtext").blur();
 		console.log(text);
    console.log($("#inputtext").val()+"-----------------");
    if (text === $("#inputtext").val()){
  	  $(".Popup p").text("Success");
  	  $(".Popup p").css("font-size","150%");
		  $(".Popup").popup();
		  $("#retryButton").hide();
		  $("#inputtext").val("");
	  }
	  else{
		 	text="";
		  $(".Popup p").text("Failed! Try Again");
		  $("#retryButton").click( function() {
		  $(".Popup").hide();
      location.reload();
      });
		  $(".Popup").popup();
		  $("#inputtext").val("");
	  }
  }, 3000);
};

function Start(){                                                // game start
	setTimeout(function(){
    $("div#count").hide();
		$("#inputtext").focus();
		var text="";	
		var counter = 10, i = 0;
		var min=0; ;
		if (counter>60) {
			min=Math.floor(counter/60);
			counter=counter%60;
			if (counter==0) {
				counter=60;
			}
		}		
		var interval = setInterval(function(){     
		  counter--;
		  var t = Math.round(Math.random() * 85);
		  var l = Math.round(Math.random() * 85);                            //random position from top and left
		  var possible = "abcdefghijklmnopqrstuvwxyz";
		  var c = possible.charAt(Math.floor(Math.random() * possible.length));     //random selection of alphabet from possible characters
		  console.log(t + " " + l + " " + c); 
			$("#pop").css({"left":l+"%","top":t+"%"});
			$("#key").text(c);
			$("#pop").show();
			text += c;
			console.log(text);				
			if (counter <10) {
				counter="0"+counter;
			}			
			if (counter==0 && min!=0) {
				counter=60;
		    min=min-1;
			}
			if (min<10)
				$("span#timer").text("0"+min+":"+counter);
			else
			  $("span#timer").text(min+":"+counter);
		 	if (counter == 0 && min==0) {
			  clearInterval(interval);
				Timeout(text);
			}
		},1000);
  },2000);
};
