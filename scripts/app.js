'use strict';

//function to put projects in a grid
var projects = [];

var projectTemplateHTML = $('#projectTemplate').html();
var templateFunction = Handlebars.compile(projectTemplateHTML);

function Portfolio(projectData) {
  Object.assign(this, projectData);
  projects.push(this);
};

Portfolio.prototype.toHtml = function() {
  var templateParts = templateFunction(this);
  $('#myProjects').append(templateParts);
  var $newPortfolio = $('div.template').clone();
}

// projectData.forEach(function(oneProject) {
//   var project = new Portfolio(oneProject);
//   project.toHTML();
// });

$('.main h1').hide().fadeIn(3000);

//function to loop through job titles
var titleArray = ['Software Developer', 'Web Designer & Developer', 'Software Engineer', 'Dev', 'UX/UI  Developer'];
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

//Function chain that allows different elements to fade-in/out
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

$('#hamMenu').click()
