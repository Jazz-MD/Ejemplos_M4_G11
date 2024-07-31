$(document).ready(function () {
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://mindicador.cl/api/dolar",
    "method": "GET",
    "headers": {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }
  };
  
  $.ajax(settings).done(function (response) {
  //Aqui van los datos
  let puntosGrafico = response.serie
  let dataPoints = puntosGrafico.map(valorHist => {
  return {x: new Date(valorHist.fecha), y: valorHist.valor}
  })
  
  $("#USDChart").CanvasJSChart({
    title: {
      text: "Dólar Histórico"
    },
    axisX: {
      valueFormatString: "DD MMM YYYY",
    },
    axisY: {
      title: "Valor Dólar CLP"
    },
    data: [{
      type: "spline",
      dataPoints: dataPoints
    }]
  })
  
  });

})