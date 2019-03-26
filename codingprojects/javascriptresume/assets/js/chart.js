window.onload = function() {

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "polarArea",
  data: {
    labels: ["SWIFT", "JQUERY", "JAVASCRIPT", "PYTHON", "REACT", "NODEJS&EXPRESS", "APIs"],
    datasets: [{
      backgroundColor: [
        "#adddcf",
        "#3498db",
        "#e8e7e5",
        "#bfb1d5",
        "#f0e0a2",
        "#fed1be",
        "#777777"
      ],
      data: [79, 67, 80, 73, 81, 58, 65],
    }]
  }
});
}
