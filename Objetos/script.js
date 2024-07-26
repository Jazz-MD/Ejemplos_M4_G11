let autos = []

document.getElementById("nuevoVehiculo").addEventListener("click", () => {
  let auto = {}
  // Solicitud de datos al vendedor
  let nombreMarca = prompt("Ingrese nombre marca")
  let origen = prompt("Ingrese origen marca")
  let modelo = prompt("Ingrese modelo")
  let patente = prompt("Ingrese patente")
  let color = prompt("Ingrese color")
  let kms = prompt("Ingrese kms")

  // Asignamos valora a propiedades del vehículo
  auto.marca = { origen: origen, nombre: nombreMarca } //marca
  auto.modelo = modelo
  auto.patente = patente
  auto.color = color
  auto.kms = kms
  auto.encender = () => { console.log("Brrruuummm") }

  autos.push(auto) // agregamos al listado de autos, el nuevo vehículo
  pintarFilas(autos)
})

// "pintar las filas"
function pintarFilas(autos) {
  // Acumulador para filas de tabla HTML
  let filasTabla = ''

  for(let auto of autos) { // "Para cada auto, del arreglo de autos"
    filasTabla += `
    <tr>
      <td>${auto.marca.nombre}</td>
      <td>${auto.marca.origen}</td>
      <td>${auto.modelo}</td>
      <td>${auto.patente}</td>
      <td>${auto.color}</td>
      <td>${auto.kms}</td>
      <td>${auto.encender}</td>
    </tr>
    `
  }

  let resultado = document.getElementById("resultado")
  resultado.innerHTML = filasTabla
}
