/**
 * Convertir código a JS
 * 
 * let button = document.getElementById('button');
 * button.addEventListener('click', function(){
 * alert('click sobre el botón');
 * });
 */
let button = $('#button');
button.on("click", function () {
  document.write('click sobre el texto');
})


