"use strict";
/**
 * Count down at start.
 */
$(document).ready(function() { 
  $("#pop").hide();
  $(".Popup").hide();
  var count = 4;
  var countdown = setInterval(function() {
    count--;
    $("div#count").text("");
    if (count == 0) {
      $("div#count").append("START");   
      Start();
      clearInterval(countdown);
    }
    else
      $("div#count").append(count);
  },1000);  
});    

/**
 * Timeout (display result)
 */
function Timeout(text) {
  setTimeout(function() {
    $("#pop").hide();
    $(".Popup p").text("");
    $("#inputtext").blur();
    if (text === $("#inputtext").val()) {
      $(".Popup p").text("Success");
      $(".Popup").popup();
      $("#inputtext").val("");
    }
    else{
      text = "";
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

/**
 * After countdown. Start function.
 */
function Start() {
  setTimeout(function() {
    $("div#count").hide();
    $("#inputtext").focus();
    var text = "";  
    var counter = 10, i = 0;
    var min = 0; 
    if (counter > 60) {
      min=Math.floor(counter / 60);
      counter = counter % 60;
      if (counter == 0) {
        counter = 60;
      }
    }   
    var interval = setInterval(function() {     
      counter--;
      // Random position from top and left.
      var t = Math.round(Math.random() * 85);
      var l = Math.round(Math.random() * 85);    
      // Random alphabet generation                        
      var possible = "abcdefghijklmnopqrstuvwxyz";
      var c = possible.charAt(Math.floor(Math.random() * possible.length));     
      $("#pop").css({"left":l+"%","top":t+"%"});
      $("#key").text(c);
      $("#pop").show();
      text += c;
      if (counter < 10) {
        counter = "0" + counter;
      }     
      if (counter == 0 && min != 0) {
        counter = 60;
        min = min - 1;
      }
      if (min < 10)
        $("span#timer").text("0" + min + ":" + counter);
      else
        $("span#timer").text(min + ":" + counter);
      if (counter == 0 && min == 0) {
        clearInterval(interval);
        Timeout(text);
      }
    },1000);
  },2000);
};
