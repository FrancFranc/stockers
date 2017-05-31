'use strict';

var app = app || {};

//Event Listener for "Search" button on homepage

$(document).ready(function(){
  $('#result, #about-us').hide();

  $('#company').on('input', app.searchController.index);
  $('#graph-start-date').val('2017-01-01');
  $('#graph-start-date').on('change', app.graph.changeStartDate);
  $('#searchResults').on('click', 'p', app.searchView.selectCompany);

  $('#submit-search').on('click', app.stockController.index);
});


// Handlebars for the data shown in table




// Hide section "Favourite Stocks" and show section "Stock Search Result"




// Event Listener for "Add to Favorites" button, so when user click on it, the selected stock will show on the table on front page.

var favorites = [];

function SaveDataToLocalStorage(event) {
  event.preventDefault();
  if(localStorage.getItem('favorites')) {
    favorites = JSON.parse(localStorage.getItem('favorites'));
  }
  favorites.push(app.stockController.ticker);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  renderFavorites(favorites);
}

$('#add-fav').on('click', SaveDataToLocalStorage);


// "Remove" button for removing the favorites.
// $('#').on('click',function(event){
//
//   localStorage.removeItem('');
// });

// "Insert Comments" textbox.   When user types in his comment about this particular stock, this comment will show in the div above (#show-comments).

function addComment(event) {
  event.preventDefault();
  var comment = document.getElementById('comment-textarea').value
  localStorage.setItem('comment', comment);
  renderComment();
}

$('#add-comment').on('click', addComment);


// Button to remove the user's comment.

$('#remove-comment').on('click',function(event){

  localStorage.removeItem('');
});
