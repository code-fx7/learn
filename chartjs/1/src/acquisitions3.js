import Chart from 'chart.js/auto';

(async function() {

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      data: {
          datasets: [{
            label: 'Test label',
            data: [20, 10],
          }],
        labels: ['a', 'b']
      }
    }
  );
})();