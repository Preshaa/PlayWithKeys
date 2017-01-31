$(document).ready(function(){
  var text="";
  $("button#submit").prop('disabled',true);
	$("#start").click(function(){		
	   $("button.initiate").prop('disabled',true);				
		var counter = 10, i = 0;
		var interval = setInterval(function(){     
		  counter --;
			var t = Math.round((Math.random() * 100) - 1);
		  var l = Math.round((Math.random() * 100) - 1);                            //random position from top and left
		  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		  var c = possible.charAt(Math.floor(Math.random() * possible.length)); //random selection of alphabet from possible characters
		  console.log(t + " " + l + " " + c); 
			$("#pop").css({"left":l+"%","top":t+"%"});
			$("#key").text(c);
			text += c;
			console.log(text);
			$("#key").css({"text-align":"center","margin":"auto"});
			$("span#text").text(counter);
		 	if (counter == 0) {
			  $("span#text").text("Timeout");
				clearInterval(interval);
				$("button#submit").prop('disabled',false);
				if ( $("textarea").val()== ""){
					text="";
	        $(".Popup").append("failed!!");
	        $(".Popup").popup();
	      }
			}
	  },1000);
  });
	$("#submit").click(function(){
    console.log(text);
    console.log($("textarea").val());
	  if (text === $("textarea").val()){
	  	text="";
	    $(".Popup").append("success");
	    $(".Popup").popup();
	    $("textarea").val("");
	  }
	  else{
	  	text="";
	    $(".Popup").append("failed!try again");
	    $(".Popup").popup();
	    $("textarea").val("");
	  }
	  
	});
});  