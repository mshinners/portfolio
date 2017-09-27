'use strict';
var app = app || {};

  (function (module) {

    var articleView = {};
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
    $('#projectsDiv').append(templateParts);

  }
  projectData.forEach(function(projObj) {
    new Portfolio(projObj);
  });
  projects.forEach(function(projObj) {
    projObj.toHtml();
  });

  $('.main h1').hide().fadeIn(2000);

  //function to loop through job titles
  var titleArray = ['Software Developer', 'Web Designer & Developer', 'Software Engineer', 'Data Scientist', 'UX/UI  Developer'];
  var currentTitleIndex = 0;
  var titleInterval = setInterval(function(){
    for (var i = 0; i < titleArray.length; i++) {
    currentTitleIndex++;
    if (currentTitleIndex >= titleArray.length) {
      currentTitleIndex = 0;
    }
  }
  $('.jobName').text(titleArray[i]).fadeIn(2000).fadeOut(1500);
  });

  $('#hamMenu').click()
  app.articleView = articleView;
})(app);

$.get('/github/user/repos')
let render = Handlebars.compile($('#repo-template').text());
