const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://jsoholder.typicode.com/posts",
  "method": "GET",
  "dataType": "json",
  "success": function (respuesta) {
    console.log(respuesta)
    document.write(JSON.stringify(respuesta))
  },
  "error": function(respuesta) {
    console.error(respuesta)
    document.write("🐈 Error 404")
  }
};

$.ajax(settings)
