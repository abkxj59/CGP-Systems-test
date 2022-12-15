const priceChartWrapper = document.querySelector('#price-chart').getContext('2d');

const gradientStroke = priceChartWrapper.createLinearGradient(0, 0, 0, 150);
gradientStroke.addColorStop(0, 'rgba(21, 227, 181, 0.1)');
gradientStroke.addColorStop(1, 'rgba(21, 227, 181, 0)');

const data = [
  {year: 2021, month: 'feb', date: 1, bar: 17.2, count: 19.0},
  {year: 2021, month: 'feb', date: 2, bar: 17.4, count: 19.7},
  {year: 2021, month: 'feb', date: 3, bar: 17.6, count: 20.4},
  {year: 2021, month: 'feb', date: 4, bar: 17.5, count: 21.1},
  {year: 2021, month: 'feb', date: 5, bar: 17.8, count: 21.8},
  {year: 2021, month: 'feb', date: 6, bar: 18.0, count: 21.3},
  {year: 2021, month: 'feb', date: 7, bar: 18.2, count: 20.8},
  {year: 2021, month: 'feb', date: 8, bar: 18.4, count: 20.3},
  {year: 2021, month: 'feb', date: 9, bar: 18.6, count: 20.4},
  {year: 2021, month: 'feb', date: 10, bar: 18.8, count: 20.5},
  {year: 2021, month: 'feb', date: 11, bar: 17.2, count: 20.6},
  {year: 2021, month: 'feb', date: 12, bar: 17.5, count: 21.9},
  {year: 2021, month: 'feb', date: 13, bar: 17.8, count: 21.6},
  {year: 2021, month: 'feb', date: 14, bar: 18.5, count: 22.5},
  {year: 2021, month: 'feb', date: 15, bar: 18.8, count: 22.5},
  {year: 2021, month: 'feb', date: 16, bar: 17.2, count: 22.5},
  {year: 2021, month: 'feb', date: 17, bar: 17.3, count: 21.0},
  {year: 2021, month: 'feb', date: 18, bar: 17.4, count: 24.0},
  {year: 2021, month: 'feb', date: 19, bar: 17.5, count: 29.0},
  {year: 2021, month: 'feb', date: 20, bar: 17.6, count: 28.7},
  {year: 2021, month: 'feb', date: 21, bar: 17.7, count: 28.4},
  {year: 2021, month: 'feb', date: 22, bar: 17.8, count: 27.1},
  {year: 2021, month: 'feb', date: 23, bar: 17.9, count: 25.8},
  {year: 2021, month: 'feb', date: 24, bar: 18.0, count: 22.0},
  {year: 2021, month: 'feb', date: 25, bar: 18.1, count: 22.5},
  {year: 2021, month: 'feb', date: 26, bar: 1, count: 23.0},
  {year: 2021, month: 'feb', date: 27, bar: 17.5, count: 23.5},
  {year: 2021, month: 'feb', date: 28, bar: 17.5, count: 28.0},
  {year: 2021, month: 'mar', date: 1, bar: 17.5, count: 28.0},
  {year: 2021, month: 'mar', date: 2, bar: 17.5, count: 28.0},
  {year: 2021, month: 'mar', date: 3, bar: 17.5, count: 28.0}
];

const initPriceChart = () => {
  if (priceChartWrapper) {
    const priceChart = new Chart(priceChartWrapper, {
      data: {
        labels: data.map((row) => `${row.date} ${row.month}`),
        datasets: [
          {
            type: 'line',
            data: data.map((row) => row.count),
            fill: true,
            backgroundColor: gradientStroke,
          },
          {
            type: 'bar',
            data: data.map((row) => row.bar),
          }
        ],
      },
      options: {
        devicePixelRatio: 4,
        pointHitRadius: 5,
        elements: {
          point: {
            radius: 0,
          },
          line: {
            borderWidth: 1,
            borderColor: '#15E3B5',
            cubicInterpolationMode: 'monotone',
          },
          bar: {
            backgroundColor: 'rgba(196, 196, 196, 0.15)',
            borderRadius: 1,
          },
        },
        scales: {
          x: {
            offset: false,
            grid: {
              display: false,
            },
            border: {
              color: '#323438',
            },
            ticks: {
              font: {
                size: 10,
                weight: 600,
              },
              align: 'start',
              crossAlign: 'far',
              maxRotation: 0,
              maxTicksLimit: 4,
            },
          },
          y: {
            position: 'right',
            min: 17,
            max: 31,
            ticks: {
              padding: 0,
              font: {
                size: 10,
                weight: 600,
              },
              includeBounds: false,
            },
            grid: {
              display: false,
            },
            border: {
              color: '#323438',
            },
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

export {initPriceChart};
