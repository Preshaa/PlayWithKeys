"use strict";
/**
 * To display popup.
 */
jQuery.fn.popup = function() {
  $(".close").click( function() {
    $(".Popup").Close();
  });
  $(".Popup").show();  
};

/**
 * To hide popup.
 */
jQuery.fn.Close = function() {
  this.hide();
  $(".Popup").text("");
};

