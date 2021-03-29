function chart(){
    var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2", //"light1", "dark1", "dark2"
    title:{
      text: "Number of Processors = " + user.length             
    },
    axisY:{
      interval: 10,
      suffix: "%"
    },
    toolTip:{
      shared: true
    },
    data:[{
      type: "stackedBar100",
      toolTipContent: "{label}<br><b>{name}:</b> {y} (#percent%)",
      showInLegend: true, 
      name: "User",
      dataPoints: user
      },
      {
        type: "stackedBar100",
        toolTipContent: "<b>{name}:</b> {y} (#percent%)",
        showInLegend: true, 
        name: "Idle",
        dataPoints: idle
      }, 
      {
        type: "stackedBar100",
        toolTipContent: "<b>{name}:</b> {y} (#percent%)",
        showInLegend: true, 
        name: "Kernel",
        dataPoints: kernel
    }]
  });
  chart.render();
  
  
  }
window.onload = chart;
setInterval(function () {
  chart();
  
}, 30000);