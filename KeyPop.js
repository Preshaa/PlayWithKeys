$(document).ready(function(){
	                   var text="";
						$("#start").click(function(){
						
							var counter=10,i=0;
							
			        var interval = setInterval(function(){
			        	counter--;
								var t = Math.round((Math.random() * 500));
				        var l = Math.round((Math.random() * 500));
				        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	              var c = possible.charAt(Math.floor(Math.random() * possible.length));
				        console.log(t+" "+l+" "+c); 
					      $("#pop").css({"left":l,"top":t});
					      $("#key").text(c);
					      text+=c;
					      console.log(text);
					      $("#key").css({"text-align":"center","margin":"auto"});
					      $("span#text").text(counter);
	 			        if (counter==0) {
					      	$("span#text").text("Timeout");
					        clearInterval(interval);
	              }
	            },1000);
          });
						$("#submit").click(function(){
                             console.log(text);
                             console.log($("textarea").val());
					        if (text===$("textarea").val()) {
	              $("span#result").text("success");
	       	    }
	       	    else
	       		    $("span#result").text("failed!try again");
						});
	        });  