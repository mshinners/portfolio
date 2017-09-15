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
var currentTitleIndex = -1;

var titleInterval = setInterval(function(){
++currentTitleIndex;
if (currentTitleIndex >= titleArray.length) {
    currentTitleIndex = 0;
}
$('.jobName').fadeIn(4000).fadeOut(2000);
}, 1000);




//Future work
// $( "#about" ).onClick();
// $( "#portfolio" ).onClick();
// $( "#contact" ).onClick();
//
// $('#title').show()
// $('#bio').show()
// $('#projectHeader').show()
//
// $('#linkedIn').onClick()
// $('#github').onClick()

// .toHtml()
