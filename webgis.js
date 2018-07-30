var oilCanvas = document.getElementById("myChartq");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var oilData = {
    labels: [
        "Irigasi",
        "Pemandian",
        "Irigasi&Pemandian",
        "Air Baku",
        "Kebutuhan Rumah Tangga"
    ],
    datasets: [
        {
            data: [24,15,3,20,38],
            backgroundColor: [
                'rgba(79, 129, 189, 1)',
                'rgba(192, 80, 77 , 1)',
                'rgba(155, 187, 89, 1)',
                'rgba(125, 98, 159, 1)',
                'rgba(75, 172, 198, 1)'
           	]
        }]
};

var pieChart = new Chart(oilCanvas, {
  type: 'pie',
  data: oilData
});