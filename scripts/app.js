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
};
$( "#about" ).onClick();
$( "#portfolio" ).onClick();
$( "#contact" ).onClick();

$('#title').show()
$('#bio').show()
$('#projectHeader').show()

$('#linkedIn').onClick()
$('#github').onClick()

// .toHtml() 
