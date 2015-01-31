// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .
var a = function() {
  
  // Fade out alerts
  setTimeout(function () {
    $('.alert').fadeOut('slow');
  }, 1000);

  $("#phone_number_tooltip").hide();
  $("#name_tooltip").hide();

  $("#user_phone").mouseover(function() {
    $("#phone_number_tooltip").show();
  }).mouseleave(function() {
    $("#phone_number_tooltip").hide();
  });

  $("#user_name").mouseover(function() {
    $("#name_tooltip").show();
  }).mouseleave(function() {
    $("#name_tooltip").hide();
  });


}
$(document).ready(a);
$(document).on('page:load', a);