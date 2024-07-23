// Manipulación de texto
// let texto = document.getElementById("texto");
let texto = document.querySelector("#texto")

texto.innerText = "Soy un nuevo texto"

// Cambiando value de inputs
let correo = document.getElementById("entradaUno")
correo.value = 'Modificado desde JS'

// Cambiando type de un input
let entradaDatos = document.getElementById("entradaDos")
entradaDatos.type = "button"

// Cambiando atributos de estilo
let saludo = document.getElementById("textoSaludo")
saludo.setAttribute('style', 'color: #00BB77;')