$(document).ready(function() {
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://dummyjson.com/users",
      "method": "GET",
      "dataType": "json",
      "headers": {
        "Accept": "*/*",
      }
    };
    
  
    $.ajax(settings).done(function (response) {
      let usuarios = response.users.map(function (usuario){
        return `
        <div class="col-3">
          <div class="card" style="width: 18rem;">
            <img src="${usuario.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${usuario.firstName}</h5>
              <p class="card-text">${usuario.email}</p>
              <a href="#" class="btn btn-primary">Ver Más</a>
            </div>
          </div>
        </div>
        `
      })
      $("#usuarios").html(usuarios.join(""))
    });
  
})