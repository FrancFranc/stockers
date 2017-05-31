'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

function proxyBarChart(request, response) {
  console.log(`Routing api call to BarChart for ${JSON.stringify(request.query)}`);
  (requestProxy({
    url: 'http://marketdata.websol.barchart.com/getHistory.json',
    query: Object.assign({ key: process.env.BARCHART_TOKEN }, request.query)
  }))(request, response);
}

app.get('/barChart', proxyBarChart);

app.get('*', (request, response) => response.sendFile('index.html', { root: './public' }));

app.listen(PORT, () => console.log(`Server started on localhost:${PORT}`));
