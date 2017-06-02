'use strict';

var app = app || {};


(function (module){
  const graph = {};
  graph.closePrice = [];
  graph.labels = [];

  graph.createGraph = () => {
    $('#stock-graph').replaceWith('<canvas id="stock-graph"></canvas>'); // this will replace the current graph with the new one coming in
    let ctx = $('#stock-graph')[0].getContext('2d');
    graph.closePrice = []; // reset data arrays when changing date
    graph.labels = [];
    app.stock.stockData.results.forEach((dataPoint) => {
      graph.labels.push(dataPoint.tradingDay);
      graph.closePrice.push(dataPoint.close);
    });

    let min = graph.closePrice.reduce((cur, next) => {
      return Math.min(cur, next);
    });
    let max = graph.closePrice.reduce((cur, next) => {
      return Math.max(cur, next);
    });

    ctx.canvas.width = 550;
    ctx.canvas.height = 300;

    Chart.scaleService.updateScaleDefaults('linear', {
      ticks: { // graph range will be 10% below min to 10% above max
        min: Math.ceil((min - (min * 0.1)) / 10) * 10, // these 2 get rounded to the nearest 10
        max: Math.ceil((max + (max * 0.1)) / 10) * 10
      }
    });
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: graph.labels,
        datasets: [{
          label: 'Last Price ($)',
          data: graph.closePrice,
          pointBackgroundColor: 'black',
          fill: 'Disabled'
        }],
      },
      options: {
        responsive: false,
        maintainAspectRatio: true
      }
    });
  };

  graph.changeStartDate = () => {
    app.stock.getStockInfo(app.stock.ticker, $('#graph-start-date').val(), app.stockView.index);
  };

  module.graph = graph;

})(app);
