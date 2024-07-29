let productos = {
  "nombre": "Martillo",
  "precio": 10000,
  "tags": ["Carpintería", "Hobbies", "Clavos", "Madera"]
}

console.log(productos)

/**
 * Convierte producto "JSON" a HTML
 *
 * @param {JSON} producto
 */
function formatearProducto (producto) {
  const productoBox = `<div>
  <h3>${producto.nombre}</h3>
  <p>${producto.precio}</p>
  <ul>
    ${formatearLista(producto.tags)}
  </ul>
  </div>`

  return productoBox
}

// pie forzado -> todos los productos tienen 4 tags
function formatearLista (listaTags) {
  let liTags = ''

  for (let i = 0; i < 4; i++) {
    liTags += `<li class="red">${listaTags[i]}</li>`
  }
  return liTags
}

document.write(formatearProducto(productos))