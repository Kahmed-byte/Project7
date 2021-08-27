const trafficCanvas = document.getElementById("traffic-Chart");

let hourlyL = document.getElementById('hourlyLink');
let dailyL = document.querySelector('#dailyLink a');
let weeklyL = document.getElementById('weeklyLink');
let monthlyL = document.getElementById('monthlyLink');

let trafficData = {
    labels: ["12-1", "1-2", "3-4", "5-6", "7-8", "9-10", "11-12"], 
    datasets: [
      { 
        data: [750, 1450, 1500, 2200, 1800, 950, 1350],
          borderWidth: 2,
          borderColor: 'rgb(153 156 224)',
          lineTension: 0.3,
          fill: {
            target: 'origin',
            above: 'rgb(116 119 190 / 53%)',
          }
        }
      ]
    };

    let trafficOptions = { 
        aspectRatio: 2.5, 
        animation: {
        duration: 0
      },
   scales: { 
       y: {
          beginAtZero: true
        }
   }, 
   plugins: {
        legend: {
          display: false
        }
   } 
};

let trafficChart = new Chart(trafficCanvas, { 
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

hourlyL.addEventListener('click', function(event)  {
    event.preventDefault();
    dailyL.classList.remove('active');
    hourlyL.classList.add('active');
    weeklyL.classList.remove('active');
    monthlyL.classList.remove('active');
    trafficChart.data.datasets[0].data = [750, 1450, 1500, 2200, 1800, 950, 1350];
    trafficChart.data.labels = ["12-1", "1-2", "3-4", "5-6", "7-8", "9-10", "11-12"];
    trafficChart.update();
  });
  
  dailyL.addEventListener('click', function(event)  {
    event.preventDefault();
    dailyL.classList.add('active');
    hourlyL.classList.remove('active');
    weeklyL.classList.remove('active');
    monthlyL.classList.remove('active');
    trafficChart.data.datasets[0].data = [1500, 1250, 1354, 1339, 1830, 1452, 1820];
    trafficChart.data.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    trafficChart.update();
  });
  weeklyL.addEventListener('click', function(event)  {
    event.preventDefault();
    dailyL.classList.remove('active');
    hourlyL.classList.remove('active');
    weeklyL.classList.add('active');
    monthlyL.classList.remove('active');
    trafficChart.data.datasets[0].data = [820, 1850, 1654, 1439, 2130, 2052, 1820];
    trafficChart.data.labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'];
    trafficChart.update();
  });
  monthlyL.addEventListener('click', function(event)  {
    event.preventDefault();
    dailyL.classList.remove('active');
    hourlyL.classList.remove('active');
    weeklyL.classList.remove('active');
    monthlyL.classList.add('active');
    trafficChart.data.datasets[0].data = [820, 1250, 1554, 1439, 1530, 1650, 1820, 1620, 1200, 975, 1049, 1120];
    trafficChart.data.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    trafficChart.update();
  });

///// Daily Chart
  const dailyCanvas = document.getElementById("daily-chart");

  let dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"], 
    datasets: [{
        label: '# of Hits', 
        data: [75, 145, 150, 220, 180, 100, 135],
        backgroundColor: '#7477BF',
        borderWidth: 1
      }]
    };

    let dailyOptions = { 
     scales: { 
       y: {
          beginAtZero: true
        }
   }, 
   plugins: {
        legend: {
          display: false
        }
   },
   maintainAspectRatio: false 
};

let dailyChart = new Chart(dailyCanvas, { 
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

//// Mobile Canvas

const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
     labels: ["Desktop", "Tablet", "Phones"],
     datasets: [{
      label: '# of Users',
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: [
        '#7477BF',
        '#78CF82',
        '#51B6C8'
      ]
   }]
  };

  const mobileOptions = {

    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 20,
          fontStyle: 'bold'
        }
      }
    },
   maintainAspectRatio: false 
  };

  let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
  });
