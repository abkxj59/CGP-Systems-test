const analystsChartWrapper = document.querySelector('#analysts-chart').getContext('2d');

const data = [
  {month: 'Jul', day: '20', sell: 15, hold: 32, buy: 32, strongBuy: 51},
  {month: 'Aug', day: '20', sell: 15, hold: 32, buy: 32, strongBuy: 51},
  {month: 'Sep', day: '20', sell: 15, hold: 32, buy: 32, strongBuy: 51},
  {month: 'Oct', day: '20', strongSell: 10, sell: 9, hold: 28, buy: 41, strongBuy: 23},
  {month: 'Nov', day: '20', strongSell: 6, sell: 9, hold: 32, buy: 32, strongBuy: 23},
  {month: 'Dec', day: '20', hold: 19, buy: 52, strongBuy: 31}
];

const initAnalystsChart = () => {
  if (analystsChartWrapper) {
    const priceChart = new Chart(analystsChartWrapper, {
      data: {
        labels: data.map((row) => `${row.month} ${row.day}`),
        datasets: [
          {
            type: 'bar',
            label: 'Strong Sell',
            data: data.map((row) => row.strongSell),
            backgroundColor: '#F6544C',
            barThickness: 27,
          },
          {
            type: 'bar',
            label: 'Sell',
            data: data.map((row) => row.sell),
            backgroundColor: 'rgba(246, 84, 76, 0.5)',
            barThickness: 27,
          },
          {
            type: 'bar',
            label: 'Hold',
            data: data.map((row) => row.hold),
            backgroundColor: '#323438',
            barThickness: 27,
          },
          {
            type: 'bar',
            label: 'Buy',
            data: data.map((row) => row.buy),
            backgroundColor: 'rgba(21, 227, 181, 0.5)',
            barThickness: 27,
          },
          {
            type: 'bar',
            label: 'Strong Buy',
            data: data.map((row) => row.strongBuy),
            backgroundColor: 'rgba(21, 227, 181, 1)',
            barThickness: 27,
          }
        ],
      },
      options: {
        devicePixelRatio: 4,
        pointHitRadius: 5,
        elements: {
          bar: {
            borderSkipped: 'middle',
            borderRadius: 4,
          },
        },
        scales: {
          x: {
            stacked: true,
            padding: 0,
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
            ticks: {
              font: {
                size: 10,
                weight: 600,
              },
              maxRotation: 0,
            },
          },
          y: {
            beginAtZero: true,
            max: 135,
            stacked: true,
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          filter: {
            propаgate: true,
          },
        },
      },
    });
  }
};

export {initAnalystsChart};
