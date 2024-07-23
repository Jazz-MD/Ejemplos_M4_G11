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

  if (!regCorreo.test(email)) {
    document.querySelector(".errorEmail").innerText = 'Correo Inválido'
  }

  if (!regNom.test(nombre)) {
    document.querySelector(".errorNombre").innerText = 'Nombre Inválido'
  }

  if (!regTel.test(telefono)) {
    document.querySelector(".errorTelefono").innerText = 'Teléfono inválido'
  }

  return regNom.test(nombre) && regCorreo.test(email) && regTel.test(telefono)
}

function limpiarError() {
  let errNom = document.querySelector(".errorNombre")
  let errEmail = document.querySelector(".errorEmail")
  let errTelefono = document.querySelector(".errorTelefono")

  errNom.innerText = ''
  errEmail.innerText = ''
  errTelefono.innerText = ''
}

