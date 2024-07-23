// estar atentos al click
// luego obtener el texto de busqueda
// mostrar busqueda en p.resultado

const boton = document.getElementById("boton")

// Agregamos escucha evento al botón
boton.addEventListener('click', function() {
  // En el cuerpo, definimos las acciones al click
  // traemos contenido del input
  const input = document.querySelector(".input-a-buscar")
  let valorInput = input.value

  // mostramos valor buscado en el resultado
  const resultado = document.querySelector(".resultado")
  // const resultado = document.getElementsByClassName("resultado")
  // console.log(resultado)
  resultado.innerText = valorInput
})