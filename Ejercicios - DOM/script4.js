let form = document.getElementById("formulario")

form.addEventListener("submit", (event) => {
  // Prevenimos comportamiento por defecto
  event.preventDefault()

  const email = document.getElementById("email")
  const password = document.getElementById("password")

  console.log(email.value)
  console.log(password.value)
  if (password.value.length <= 5) {
    alert("Contraseña débil")
  } else {
    alert(`Bienvenido ${email.value}`)
  }
})