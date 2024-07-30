// Agrega funcionalidades a la librería

jQuery.fn.parpadea = function() {
  // this -> jQuery

  // this.each -> scope (Elementos HTML)
  this.each(function() {
    // acá this es un elemento HTML
    let elem = $(this);
    elem.fadeOut(250, function() {
      $(this).fadeIn(250);
    });
  });

  return this;
}