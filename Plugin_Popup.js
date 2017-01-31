jQuery.fn.popup= function() {
  $(".Popup").css({"border": "3px solid black", "background-color": "white","content":" ", "color": "black", "top": "300px", "right": "300px", "font-size":"50px","left": "200px", "opacity": "0.7", "position": "absolute"});
  $(".Popup").append("<button class='close' id='closeButton'  style='position: absolute;background-color:black;color: white;top: 0px; right: 0px; border:0px;cursor= pointer'>&times;</button>");
  $(".Popup").hide();
  $(".close").click( function() {
    $(".Popup").Close();
  });
  this.show();
  $("button.initiate").prop('disabled',true);
};

jQuery.fn.Close=function(){
  this.hide();
  $(".Popup").text("");
  $("button#start").prop('disabled',false);
};

