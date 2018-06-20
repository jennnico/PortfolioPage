$(document).ready(function() {
  //On load, hide everything but the Home page.
  $('#about').hide();
  $('#portfolio').hide();
  $('#contact').hide();
  
  //Home page
  $("#navHome").on("click", function(){
    $('#home').hide().fadeIn(1000);
    $('#about').hide();
    $('#portfolio').hide();
    $('#contact').hide();
  });
  
  //About page
   $("#navAbout").on("click", function(){
    $('#home').hide();
    $('#about').hide().fadeIn(1000);
    $('#portfolio').hide();
    $('#contact').hide();
  });
  
  //Portfolio page
   $("#navPortfolio").on("click", function(){
    $('#home').hide();
    $('#about').hide();
    $('#portfolio').hide().fadeIn(1000);
    $('#contact').hide();
  });
  
  //Contact page
   $("#navContact").on("click", function(){
    $('#home').hide();
    $('#about').hide();
    $('#portfolio').hide();
    $('#contact').hide().fadeIn(1000);
  });
  
  
  });
