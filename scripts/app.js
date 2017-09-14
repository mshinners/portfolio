'use strict';

var projects = [];

function Projects (title, category, author, authorUrl, body) {
  this.title = title;
  this.category = category;
  this.author = author;
  this.authorUrl = authorUrl;
  this.body = body;
}
//function to put projects in a 3x2 table
function Portfolio(image, title, ghPagesUrl) {
  this.img = img;
  this.title = title;
  this.url = url;
  this.id = id;
}

Portfolio.prototype.toHtml = function() {
  var $newPortfolio = $('div.template').clone();
};
};
