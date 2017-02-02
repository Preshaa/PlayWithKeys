jQuery.fn.popup= function() {

  $(".close").click( function() {
    $(".Popup").Close();
  });
  $(".Popup").show();
  
};

jQuery.fn.Close=function(){
  this.hide();
  $(".Popup").text("");

};

