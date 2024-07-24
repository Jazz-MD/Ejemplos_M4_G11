const boton = document.getElementById("ingreso")

let usuarios = [] // este arreglo se llenará con datos

boton.addEventListener("click", () => {
  // Pediremos datos de un usuario
  let usuario = []

  const nombre = prompt("Ingrese su nombre")
  const apellido = prompt("Ingrese su apellido")
  const nacimiento = prompt("Ingrese su año nacimiento")

  usuario[0] = nombre
  usuario[1] = apellido
  usuario[2] = nacimiento

  usuarios.push(usuario)

  pintarTabla(usuarios)
})

function pintarTabla(usuarios) {
  let filaTabla = ''
  for(let usuario of usuarios) {
    filaTabla += `<tr>
      <td>${usuario[0]}</td>
      <td>${usuario[1]}</td>
      <td>${usuario[2]}</td>
    </tr>`
  }

  let cuerpoTabla = document.getElementById("resultados")
  cuerpoTabla.innerHTML = filaTabla
}