// Este maneja el DOM

$(document).ready(function() {
  // $(".parpadear").parpadea();
  $(".parpadear").on("click", function(){
    // $() -> selector
    // $(this) : this representa un HTML seleccionado
    $(this).parpadea();
  })
})
