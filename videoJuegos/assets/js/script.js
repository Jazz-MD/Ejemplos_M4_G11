// data-bs-toggle="collapse"
$(document).ready(function() {
  const botonCollapse = $("[data-bs-toggle='collapse']")

  botonCollapse.on("click", function() {
    console.log("Hiciste click en el 'colapsable'")
  })
})