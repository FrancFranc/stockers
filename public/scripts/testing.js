'use strict';



function getNews() {
  let params = {
    key: '46e69aa3fe86b4dcb5545d76148ce18f',
    sources: 'AP,IF',
    symbols: 'AMZN'
  };

  $.ajax({ url: '/news', data: params, method: 'GET' })
  .then(data => console.log(data))
}

function searchCompany() {
  let params = {
    apikey: '46e69aa3fe86b4dcb5545d76148ce18f',
    keyword: 'face'
  };

  $.ajax({ url: '/search', data: params, method: 'GET' })
  .then(data => console.log(data))
}
