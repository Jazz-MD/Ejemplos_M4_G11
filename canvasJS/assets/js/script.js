// [ {Papaya: 30}, {Naranja: 15}, {Platano: 22}, {Mango:30} ]

window.onload = function() {
  $("#chartContainer").CanvasJSChart({
    title: {
      text: "Mis Frutas"
    },
    axisX: {
      title: "Frutas Tropicales"
    },
    axisY: {
      title: "Consumo por paseo a la playa"
    },
    data: [
      {
        type: "column",
        dataPoints: [
          {label: "Kiwi", y: 10},
          {label: "Naranja", y: 15},
          {label: "Papayas", y: 30},
          {label: "Sandia", y: 3},
          {label: "Harina Tostá", y: 1}
        ]
      }
    ]
  })
}

$(document).ready(function() {
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://mindicador.cl/api/dolar",
    "method": "GET",
    "headers": {
      "Accept": "*/*",
    }
  };

  $.ajax(settings).done(function (response) {
    // vienen los datos
    let puntosGrafico = response.serie
    let dataPoints = puntosGrafico.map(valorHist => {
      return { x: new Date(valorHist.fecha), y: valorHist.valor }
    })

    $("#USDChart").CanvasJSChart({
      theme: "light2",
      title: {
        text: "Dolar Histórico"
      },
      axisX: {
        valueFormatString: "DD-MM-YYYY"
      },
      axisY: {
        title: "CLP"
      },
      data: [{
        type: "line",
        dataPoints: dataPoints
      }]
    })
  });
})