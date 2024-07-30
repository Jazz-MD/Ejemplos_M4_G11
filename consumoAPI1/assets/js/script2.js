const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://midor.cl/api",
  "method": "GET",
  "dataType": "json",
  "headers": {
    "Accept": "*/*"
  }
};

$.ajax(settings)
.done(function (response) {
  console.log(response);

  document.write(JSON.stringify(response))
})
.fail(function(response) {
  console.log(response)
  alert("Error")
});
