'use strict';
//Function chain that allows different elements to fade-in/out
$('#aboutButton').click(function(){
  $("#bio").fadeIn(2000);
  $("#linkedIn").fadeOut(500);
  $("#github").fadeOut(500);
  $("#projectsDiv").fadeOut(500);
});
$('#projectsButton').on('click', function(){
  $("#projectsDiv").fadeIn(2000);
  console.log($('#projectsDiv')[0]);
  $("#bio").fadeOut(500);
  $("#linkedIn").fadeOut(500);
  $("#github").fadeOut(500);
});
$('#contactButton').click(function(){
  $("#linkedIn").fadeIn(2000);
  $("#github").fadeIn(2000);
  $("#bio").fadeOut(500);
  $("#projectsDiv").fadeOut(500);
});
