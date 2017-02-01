$(document).ready(function(){ 
	$("#pop").hide();
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
 		$(".Popup").text("");
 		console.log(text);
    console.log($("#inputtext").val()+"-----------------");
    if (text === $("#inputtext").val()){
  	  $(".Popup").append("Success");
		  $(".Popup").popup();
		  $("#inputtext").val("");
	  }
	  else{
		 	text="";
		  $(".Popup").append("Failed! Try Again");
		  $(".Popup").append("<button id='retryButton'  style='position: absolute;margin:5px;background-color:black;color: white;width: 22%;height: 70%;font-size: 90%;border-radius: 10px; border:1px;cursor= pointer'>Retry</button>");
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
		  var t = Math.round(Math.random() * 90);
		  var l = Math.round(Math.random() * 90);                            //random position from top and left
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
