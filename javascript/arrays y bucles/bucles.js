/* 
*===== BUCLES =====
* Iteración. Proceso de repetir una secuencia de instrucciones o acciones en un programa. Es decir, ejecutar un bloque de código muchas veces, basado en una condición o una colección de elementos.

* -- Operadores de incremento (++) y operadores de decremento (--)
*${} se utiliza en el contexto de plantillas de cadena (template literals). Las plantillas de cadena son una forma más conveniente y legible de concatenar cadenas y expresiones en comparación con las cadenas tradicionales con el operador +.
* Los operadores ++ y -- son conocidos como operadores de incremento y decremento respectivamente. 
*- El operador ++ se utiliza para aumentar el valor de una variable en uno.
*- El operador -- se utiliza para disminuir el valor de una variable en uno.
* (i)  : comúnmente utilizada como variable en bucles, es simplemente una convención de nomenclatura y puede ser cualquier nombre válido de variable que elijas. La "i" a menudo se utiliza como abreviatura de "índice" en el contexto de bucles, especialmente en situaciones donde se está iterando sobre índices de arrays o en situaciones similares.
*/

/* ->> Ciclo for 
Un ciclo for se repite hasta que la condicion se evalue como false
 Crea 3 expresionales opcionales
-> Sintaxis
    -for (expresion inicial; expresion condicional
        expresion actualizacion){
            ->Codigo a ejecutar en cada iteracion del bucle
        }
    1. Inicializacion: se debe inicializar con una variable que sera
    evaluada en la expresion a comparar
    2. Condicion: es una espresion que debe cumplirla variable inicial (true)
    si no se cumple (false) el bucle termina
    3. Pasos a realizar: son los intervalos que cambiaran la 
    variable inicial mientras esta sea true
 */

    //*Crear un programam para saber cuantos boletos vendemos para una rifa

    for (let boletos = 1; boletos <= 15; boletos++){
        console.log('Boleto # ${boeto}');
    }
    //para vender bolos con una variable global
    let bolos = 1;
    for (bolos; bolos <= 20; bolos++){
        console.log('Vendi ${bolos}');
    }

    //Cuenta resgresiva
    let cuentaRegresiva = 15;
    for (cuentaRegresiva; cuentaRegresiva >= 0; cuentaRegresiva--){
        console.log('Quedan ${cuentaRegresiva} paletas');
    }
    /* Recorrer arrays con el ciclo for
    Debemos usar indices del arreglo para poder usar el bucle en indices desde el 0 hasta n y usaremos la propiedad length
    */

    const ch35 =["Rodrigo", "Diego", "Ania", "Rey", "Arturo", "Eunice"];

    for (let i = 0; i < ch35.length; i++) {
        console.log(ch35[i]);
    } 
/**** Variaciones del ciclo for
-- for...of nos permite recorrer el objeto (array) y devuelve el valor
-- for...in nos permite recorrer el objeto (array) y devuelve su posición (indices)
*/

/*let frutas = ("Manzana", "Naranja", "Peras", "Mandarinas", "uuvas verdes");
for (let frutas of frutas){
    console.log(frutas + "grupo de frutas");
}*/
const fruits = ["Apple", "Banana", "Orange"];
let fruta;
for (fruta of fruits) {
  console.log(fruta);
}

//Sumar numeros del 1 al 20
let suma = 0;
for(let i = 1; i <= 20; i++){
    suma += i;
} 
console.log(suma);

//tabla 5 en 5
const tabla = 5;
for (let i = 1; i <= 10; i++) {
    let resultado  = tabla ; 
    console.log('${tabla} x $(i) = ${resultado}');
}

/* ->>ciclo while
    -Recorrer un bloque de codigo siempre que una condicon especifica sea verdadera

    -Sirev para realizar una tarea repetitiva mienttras una condicion sea verdadera
*/

let productos = 5;
while (productos > 0){
    console.log(productos + "productos vendidos");
    productos--;
}
// Imprimir numeros
let num1 = 0;
    while(num1 < 10) {
        num1++
        console.log("el numero es " + num1);
    }
/*
*Ejercicios
*Ejercicio de Arrays:
Descripción:
Supongamos que tienes una lista de temperaturas diarias en grados Celsius para una semana. Tienes que convertir estas temperaturas a grados Fahrenheit y mostrar los resultados.
* Temperaturas diarias en grados Celsius para una semana
const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
*Instrucciones:

Crea una función llamada celsiusToFahrenheit que tome una temperatura en grados Celsius y la convierta a grados Fahrenheit usando la fórmula: F = C * (9/5) + 32.
Utiliza un bucle para recorrer el array temperaturasCelsius, llama a la función celsiusToFahrenheit para cada temperatura y almacena los resultados en un nuevo array llamado temperaturasFahrenheit.
Muestra ambos arrays (temperaturasCelsius y temperaturasFahrenheit) en la consola.
*/


/*
*Ejercicios de Bucles:
*Descripción:
Escribe un programa que sume los primeros 10 números naturales (1 al 10) e imprima el resultado.

*Instrucciones:

Utiliza un bucle (for o while) para sumar los números del 1 al 10.
Imprime el resultado de la suma en la consola.
Sugerencia:
Puedes usar una variable llamada suma para acumular la suma mientras recorres los números.
*/

let numero1 = 0;
    while(numero1 < 10) {
        num1++
        console.log("el numero es " + numero1);
    }
/*
*Ejercicio : Números Primos
Escribe un programa que determine si un número ingresado por el usuario es primo o no. Un número primo es aquel que solo es divisible por 1 y por sí mismo. Puedes utilizar un bucle for para verificar si el número tiene algún divisor además de 1 y él mismo.*/

/*
*Ejercicio : Secuencia de Fibonacci
Escribe un programa que genere los primeros 10 términos de la secuencia de Fibonacci. La secuencia de Fibonacci comienza con 0 y 1, y cada término subsiguiente es la suma de los dos anteriores (0, 1, 1, 2, 3, 5, 8, 13, 21, ...).

Estos ejercicios implican un poco más de lógica y son ideales para practicar conceptos más avanzados. ¡Espero que disfrutes resolviéndolos!*/