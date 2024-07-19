/**
 * Inicio
 *    leer num1  (1)
 *    leer num2 (2)
 *    suma = num1 + num2 (3)
 *    mostrar suma (4)
 * fin
 */
const num1 = Number(prompt("Ingrese el número 1")); // (1)
const num2 = Number(prompt("Ingrese el número 2")); // (2)

let resultadoSuma = num1 + num2; // (3)
let resultadoMultiplicacion = num1 * num2;
let resultadoDivision = num1 / num2;
let resultadoResta = num1 - num2;
let resultadoModulo = num1 % num2;
// '' comilla simple
// `` backtick alt gr + }
// "" comilla doble 
document.write(`El resultado de la suma es ${resultadoSuma} <br>`);
document.write("La resta es: " + resultadoResta + "<br>");
document.write("La multiplicación es: "+ resultadoMultiplicacion + "<br>");
document.write("La división es: "+ resultadoDivision + "<br>");
document.write("La módulo es: "+ resultadoModulo + "<br>");
