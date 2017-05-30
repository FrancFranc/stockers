'use strict';

const express = require('express');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('./public'));

function proxyBarChart(request, response) {
  console.log('Routing api call - Bar Chart');
  console.log(request.params[0]);
  (requestProxy({
    url: `http://ondemand.websol.barchart.com/getNews.json${request.params[0]}`
  }))(request, response);
}

app.get('/barChart/*', proxyBarChart);

app.get('*', (request, response) => response.sendFile('index.html', { root: './public' }));

app.listen(PORT, () => console.log(`Server started on localhost:${PORT}`));
