jQuery.fn.valorUF = function() {
  const settings = {
    "url": "https://mindicador.cl/api",
    "method": "GET",
    "dataType": "json"
  };

  let element = this

  $.ajax(settings)
  .done(function (response) {
    element.text(response.uf.valor) // forma jQuery
    // element[0].innerText = response.uf.valor // forma Vanilla JS
    console.log(response.uf.valor);
  })
  .fail(function (response) {
    console.log(response);
  });

  return this;
}