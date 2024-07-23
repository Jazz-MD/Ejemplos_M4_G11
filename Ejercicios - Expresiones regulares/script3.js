let form = document.getElementById("form")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  limpiarError();

  let nombre = document.getElementById("nombre").value
  let telefono = document.getElementById("telefono").value
  let email = document.getElementById("email").value

  const esValido = validacionDatos(nombre, telefono, email)

  console.log(esValido)
  if (esValido) {
    alert("Formulario enviado con éxito")
  }
})

function validacionDatos(nombre, telefono, email) {
  const regNom = /[a-z]+/i
  const regTel = /\d+/   // \d digitos + uno o mas
  const regCorreo = /^([a-z])([a-z]|[0-9])+(@)([a-z]){3,}.((com)|(cl))/i
  const nombreValido = regNom.test(nombre)
  const telefonoValido = regTel.test(telefono)
  const emailValido = regCorreo.test(email)


  if (!nombreValido) {
    document.querySelector(".errorNombre").innerText = 'Nombre Inválido'
  }
  if (!telefonoValido) {
    document.querySelector(".errorTelefono").innerText = 'Teléfono inválido'
  }
  if (!emailValido) {
    document.querySelector(".errorEmail").innerText = 'Correo Inválido'
  }


  return nombreValido && emailValido && telefonoValido
}

function limpiarError() {
  let errNom = document.querySelector(".errorNombre")
  let errEmail = document.querySelector(".errorEmail")
  let errTelefono = document.querySelector(".errorTelefono")

  errNom.innerText = ''
  errEmail.innerText = ''
  errTelefono.innerText = ''
}

