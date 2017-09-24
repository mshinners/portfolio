'use strict';

//function to put projects in a grid
var projects = [];

var projectTemplateHTML = $('#projectTemplate').html();
// console.log(projectTemplateHTML);
var templateFunction = Handlebars.compile(projectTemplateHTML);
// console.log(templateFunction);
function Portfolio(projectData) {
  Object.assign(this, projectData);
  projects.push(this);
  console.log(this);
};
// console.log(projectData);
Portfolio.prototype.toHtml = function() {
  var templateParts = templateFunction(this);
  $('#projectsDiv').append(templateParts);

  console.log(templateParts);
}
projectData.forEach(function(projObj) {
  new Portfolio(projObj);
});
projects.forEach(function(projObj) {
  projObj.toHtml();
});





$('.main h1').hide().fadeIn(3000);

//function to loop through job titles
var titleArray = ['Software Developer', 'Web Designer & Developer', 'Software Engineer', 'Data Scientist', 'UX/UI  Developer'];
var currentTitleIndex = 0;
var titleInterval = setInterval(function(){
  // for (var i = 0; i < titleArray.length; i++) {
  currentTitleIndex++;
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
$('#projectsButton').on('click', function(){
  $("#projectsDiv").fadeIn(2000);
  console.log($('#projectsDiv')[0]);
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





var possibles = [];
function isAllPossibilities(x){
console.log(x);
  for (var i = 0; i < x.length; i++) {
    possibles.push(i)
  }
    x.sort(function(a,b) {
    return(b-a);
  });
    if (x.length === 0){
    return false;
  }
    else {
    return x.toString().includes(possibles.toString());
  }
}
