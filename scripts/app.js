'use strict';

var projects = [];

//function to put projects in a 3x2 table
function Portfolio(image, title, ghPagesUrl) {
  this.img = img;
  this.title = title;
  this.ghPagesUrl = ghPagesUrl;
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

// var aboutUs = document.getElementsByTagName('img');
// for (var i = 0; i < people.length; i++){
//   aboutUs[i].addEventListener('mouseover', createProfile);
//   aboutUs[i].addEventListener('mouseout', removeProfile);
// }
// //get the correct Person object
// function createProfile(event) {
//   var devProfile = document.getElementById(event.target.id);
//   for (var i = 0; i < people.length; i++){
//     if (event.target.id === people[i].dev.toLowerCase()){
//       target = people[i];
//     }
//   }
//   //to populate the Learn more window
//   var paragraph = document.getElementById('learnMoreWindow');
//   paragraph.setAttribute('style', 'visibility: visible');
//   var faveWord = document.createElement('p');
//   faveWord.innerText = 'My Favorite Five-letter Word: ';
//   var favWordWord = document.createElement('span');
//   favWordWord.setAttribute('id', 'favWordWord');
//   favWordWord.innerText = target.faveWord;
//   faveWord.appendChild(favWordWord);
//   faveWord.setAttribute('id', 'faveWord');
//   paragraph.appendChild(faveWord);
//   var blurb = document.createElement('p');
//   blurb.innerText = target.blurb;
//   blurb.setAttribute('id', 'blurb');
//   paragraph.appendChild(blurb);
// }
// //Removes info from Learn more window and hide it
// function removeProfile(event) {
//   var cutProfile = document.getElementById('learnMoreWindow');
//   var faveWord = document.getElementById('faveWord');
//   var blurb = document.getElementById('blurb');
//   cutProfile.setAttribute('style', 'visibility: hidden');
//   cutProfile.removeChild(faveWord);
//   cutProfile.removeChild(blurb);
// }
