/*Funciones. Son bloques de código con instrucciones que se pueden
reutilizar las veces que sean necesarias.
Algunas funciones reciben parametrso y otras no reciben parametros 
Nota: Las funciones normales se llaman funciones x declaración 
*/

//Función que permite saudar
function saludar(){
    console.log('Hola desde una función');
}
//Ejecutar la función con el nombre de la función y los parametros
saludar();

//Hosting. Caracteristica de una función que nos permite involucra desde antes de su inicializacion, es decir, se puede invocar antes del bloque de código o despues.

//Se involucra en la linea 11 y en la linea 10
function saludar() {
    console.log('Holaa invocando la función con hoisting');
}
saludar();


//Funciones que retornan algo. Para que una funcion retorne algo (un String, una operacion, una variable, etc.), necesitamos indicarle al código de la función que vamos a retornar mediante la palabra return
function greeting(){
    return "Hola una funcion que retoorna";
}
console.log(greeting());

//Funcion que retorna y recibe parametros
function sumar(x, y){
    return x + y;
}
let resultado = sumar(255, 245);
console.log('El resultado de sumar x + y es ${resultado}');

//calcular el cuadrado de un número
function calcCuadrado (numero) {
    return numero * numero;
}
let resultCuadrado = calcCuadrado(5);
console.log(resultCuadrado);

//-- Funciones flecha (Arrow function)-. Es una manera de declarar una función, sintetizando código y haciendolo más legible.
//Función flecha para calcular el cubo de un número
const calcCubo = (number) => {
    return number * number * number;
}
let resultCubo = calcCubo(3);
console.log(resultCubo);

//Funciones anónimas. Son un tipo de funciones que se declara sin nombre de función y se alojan en el interior de una variable. Se hace referencia a ellas cada vez que la utilicemos

const mensaje = function (){
  return "Este es un msj desde una función anónima";
}
console.log(mensaje());

//Callbacks. Es pasar una función B por parámetro a una función A, de modo que la función A pueda ejecutar esa función de forma genérica desde su código.
const functionB = function () {
  console.log("Ejecutando función B");
} 
//Función A que mandará a llamar la función B
const functionA = function (callback) {
  callback();
}
functionA(functionB);
 