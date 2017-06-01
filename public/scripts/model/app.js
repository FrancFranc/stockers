'use strict';

var app = app || {};

//Event Listener for "Search" button on homepage

$(document).ready(function(){
  $('#result, #about-us, #fav-button').hide();
  $('#company').on('input', app.searchController.index);
  $('#graph-start-date').val('2017-01-01');
  $('#graph-start-date').on('change', app.graph.changeStartDate);
  $('#searchResults').on('click', 'p', app.searchView.selectCompany);
  $('#fav-button').on('click', app.indexController.index);
  $('#add-fav').on('click', saveDataToLocalStorage);
  $('#submit-search').on('click', app.stockController.index);
  $('#show-about').on('click',function(event){
    event.preventDefault();
    $('#result, #favorites, #show-about').hide(1000);
    $('#about-us, #fav-button').show(1000);
  });
  $('#insert-comment').on('submit', addComment);
  renderFavorites();
});

function saveDataToLocalStorage(event) {
  event.preventDefault();
  let favorites = [];
  if(localStorage.getItem('favorites')) {
    favorites = JSON.parse(localStorage.getItem('favorites'));
  }
  favorites.push(app.stock.ticker);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  renderFavorites();
}

function renderFavorites(){
  $('#stock-favorites').html('');
  var parsedFavs= JSON.parse(localStorage['favorites']);
  for (var i=0; i<parsedFavs.length; i++){
    app.favorites.getFavoritesInfo(parsedFavs[i],'20170601', app.favoritesView.index);
  }
}

function addComment(event) {
  event.preventDefault();
  $('#comment-added').html('');
  let commentArray = [];
  let companyName = app.stock.ticker;
  let comment = $('#comment-textarea').val();
  if (localStorage.getItem('comment')) {
    commentArray = JSON.parse(localStorage.getItem('comment'));
  }
  let commentObject = {
    company: companyName,
    comment: comment
  };
  commentArray.push(commentObject);
  localStorage.setItem('comment', JSON.stringify(commentArray));
  $('#comment-textarea').val('');
  renderComment();
}

function renderComment() {
  let commentArray = [];
  if (localStorage.getItem('comment')) {
    commentArray = JSON.parse(localStorage.getItem('comment'));
  }
  for (let i=0; i < commentArray.length; i++) {
    if (commentArray[i].company == app.stock.ticker) {
      $('#comment-added').append(commentArray[i].comment);
    }
  }
}
