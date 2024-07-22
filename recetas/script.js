/**
 * ingredientes en base a unidad de medida y cantidad
 *
 * @param {*} ingrediente
 * @param {*} unidadMedida
 * @param {*} cantidad
 * @returns {string}
 */
const ingredientes = function(ingrediente, unidadMedida, cantidad) {
  variableGlobal = 'variable global 5'
  console.log("Log dentro de la función ingredientes" + ingrediente)
  return `${cantidad} ${unidadMedida} de ${ingrediente}`
}
ingredientes("Mani", "Planta", 1)
console.log(variableGlobal)

const hacerArroz = function(porciones) {
  let ingredientesArroz = ingredientes("Arroz", "Tazas", porciones) // taza por porción
  ingredientesArroz += "<br>" + ingredientes("Ajo", "Diente", porciones);
  ingredientesArroz += "<br>" + ingredientes("Agua", "Taza", porciones * 2);

  // Imprime en el documento
  document.write(ingredientesArroz);
  document.write(`<h2>Instrucciones Arroz</h2>
    <p>Cocinar</p>`)
}

const hacerPorotos = function(porciones) {
  let ingredientesPorotos = ingredientes("Porotos", "Ollas", porciones);
  ingredientesPorotos += "<br>" + ingredientes("Zapallo", "Fruto", porciones);
  ingredientesPorotos += "<br>" + ingredientes("Fideos", "Sobre", porciones);
  ingredientesPorotos += "<br>" + ingredientes("Agua", "Balde 3 litros", porciones);
  ingredientesPorotos += "<br>" + ingredientes("Sofrito", "Wok", porciones);

  document.write(ingredientesPorotos);
  document.write(`<h2>Instrucciones porotos</h2>
    <p>Cocinar y disfrutar</p>`)
}
