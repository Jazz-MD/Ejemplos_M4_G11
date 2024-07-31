const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://mindicador.cl/api/euro",
  "method": "GET",
  "dataType": "json",
  "headers": {
    "Accept": "*/*",
  }
};

window.onload = function () {
  let valorActual;

  $.ajax(settings).done(function (response) {
    // console.log(response.serie)
    let datos = response.serie
    valorActual = datos.map(euro => {
      return { x: new Date(euro.fecha), y: euro.valor }
    });

    console.log(valorActual)

    $("#EuroChart").CanvasJSChart({
      title: {
        text: "Euro a peso"
      },
      axisX: {
        title: "Fecha"
      },
      axisY: {
        title: "CLP",
        valueFormatString: "$#,###.##" // eje Y
      },
      data: [{
        type: "line",
        xValueFormatString: "DD/MM/YYYY",
        yValueFormatString: "$###.##", // Hover
        dataPoints: valorActual
      }]
    })
  });

  console.log(valorActual)
  

}