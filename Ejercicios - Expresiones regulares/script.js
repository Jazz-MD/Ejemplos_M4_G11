// definir expresion regular

let regExp = /(perro)|(gato)/i;

function validarAnimal (dato) {
  if (regExp.test(dato)) {
    alert("Puedes buscar")
  } else {
    alert("Animal no reconocido")
  }
}

// event Listener para botón submit
let boton = document.getElementById("buscar")
boton.addEventListener("click", () => {
  let animal = document.getElementById("animal").value //valor ingresado por usuario
  
  validarAnimal(animal)
})