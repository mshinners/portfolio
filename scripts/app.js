'use strict';

var projects = [];

//function to put projects in a 3x1 table
function Portfolio(image, title, ghPagesUrl) {
  this.img = img;
  this.title = title;
  this.ghPagesUrl = ghPagesUrl;
  projects.push(this);
}

Portfolio.prototype.toHtml = function() {
  var $newPortfolio = $('div.template').clone();
};
$('.main h1').hide().fadeIn(3000);

//function to loop through job titles
var titleArray = ['UX/UI Designer & Developer', 'Software Developer', 'Web Designer & Developer', 'Software Engineer', 'Dev'];
var currentTitleIndex = 0;
  for (var i = 0; i < titleArray.length; i++) {
var titleInterval = setInterval(function(){
  ++currentTitleIndex;
  if (currentTitleIndex >= titleArray.length) {
    currentTitleIndex = 0;
  }
});
$('.jobName').text(titleArray[i]).fadeIn(4000).fadeOut(2000);
}
// }, 1000);
$('#aboutButton').click(function(){
  $("#bio").fadeIn(2000);
  $("#linkedIn").fadeOut(1000);
  $("#github").fadeOut(1000);
  $("#projectsDiv").fadeOut(1000);
});
$('#projectsButton').click(function(){
  $("#projectsDiv").fadeIn(2000);
  $("#bio").fadeOut(1000);
  $("#linkedIn").fadeOut(1000);
  $("#github").fadeOut(1000);
});
$('#contactButton').click(function(){
  $("#linkedIn").fadeIn(2000);
  $("#github").fadeIn(2000);
  $("#bio").fadeOut(1000);
  $("#projectsDiv").fadeOut(1000);
});



// .toHtml()
