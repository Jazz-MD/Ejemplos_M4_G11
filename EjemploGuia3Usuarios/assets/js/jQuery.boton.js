jQuery.fn.boton = function (){
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://jsonplaceholder.typicode.com/users",
    "method": "GET",
    "dataType": "json",
    "headers": {
      "Accept": "*/*",
    }
  };
  
  let element = $(this)

  $.ajax(settings).done(function (response) {
    let usuarios = response.map(function (usuario){
      return `<li>${usuario.name} ${usuario.email}</li>`
    })


    element.html(usuarios.join (""));
    console.log(usuarios)

  });

  return this

}


