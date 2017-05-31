'use strict';

var app = app || {};

//Event Listener for "Search" button on homepage

$(document).ready(function(){
  $('#result #about-us').hide();

  $('#graph-start-date').on('change', app.graph.changeStartDate);

  $('#submit-search').on('click',function(event){
    event.preventDefault();
    page.show('/stockData');
    $('#favorites').hide(1000);
    $('#result').show(1000);
  });
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
$('#').on('click',function(event){

  localStorage.removeItem('');
});
