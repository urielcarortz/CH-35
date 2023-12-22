console.log("hola ch 35");

/* 
- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 * - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 * 
 * - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
 * - Facilitar tanto la escritura de codigo como la claridad de este
 * 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista
      
 */

/* Declaración de sentencia if-else 
->> 
*/

let n = 15;

if (n > 10){
    console.log(true);
} else{
    console.log(false);
}

/*
if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso
 */

// if anidados
let edad = 28; 

if (edad < 18) {
    console.log("Eres menor de edad, no puedes pasar");
} else if(edad >= 18 && edad < 65) {
    console.log ("Eres adulto en edad apta");
} else{
  console.log("Eres adulto Mayor");
}


/*Sentencia Switch
->> La sentencia switch es otro tipo de estructura de 
control del flujo, que nuevamente se encuentra en diversos
lenguajes de programacion.
->> Es bastante parecida a la sentencia if-else, pero 
diferente en cuanto a comportamiento ya que no se basa en una 
bifurcacion (particion de caminos) sino que se secciona en 
multiples casos (case) que, dependiendo de la expresión
que cumpla con un caso especifico, sera la secuencia que se
va a ejecutar, dentro de la declaración
->> Declaración:
* se empieza por colocalr la palabra reservada switch, seguido de esto, colocamos parentesis () donde se debe colocar el valor que va indicar que sentencia/caso a ejecutar.
*Falta indicar el bloque de codigo que se limita a esta sentencia, como lo haciamos en la sentencia if o con las funciones.
*Dentro de este bloque de codigo, falta colocar los casos para cada valor que se desee, establecer segun sea el valor indicado dentro de el parentesis ().
*Cada uno de estos casos se separa de la siguiente manera:
* case valor : instrucción a ejecutar si el valor empata con este caso.
*Despues, para indicar que la ejecución de las sentencias debe cortarse cuando se cumpla, se coloca la instruccion 
*break. 
*Cuando terminemos de establecer los casos que necesitemos declara, dentro de nuestra sentencia, debemos colocar un valor por defecto, default.
* Esta ultima sentencia nos permite establecer un valor por defecto, si es que este valor colocaldo no empata con ningun otro dentro de la sentencia o en ninguno de los casos.
* default : mensaje no disponible.    */


let dia = "martes";
switch(dia){
  case "lunes" :
    console.log("Esta bien que de nuevo sea lunes?");
    break;
  case "martes" :
    console.log("Debo de seguir, apenas es martes!");
    break;
  case "miercoles" :
    console.log("Toca presentar proyecto");
    break;
  case "jueves" :
    console.log("Jueves espero seas mejor que el lunes");
    break;
  case "viernes" :
    console.log("Viernes de disfraces");
    break;
  case "Sabado" :
    console.log("Sabado terminas muy rapido");
    break;
  case "Domingo" :
    console.log("Vamos domingo espara un poco mas");
    break;
    default :
    console.log("Dia no conocido");
    break;    
} // Termina el switch

/* ->> Operador ternario
    -> Expresion condicional if-else mas simple y legible 
    principalmente se usa para simplificar condiciones de una 
    -> Tambien puede anidar sentencias if-esle-if sin embargo
    no es recomendable porque esl codigo se puede volver confuso
    y poco legible.
    -Su declaracion es la siguiente:
      ->> Palabra reservada var, let o const:
          Se le asigna un nombre como si, se tratara de una 
          variable operador de asignacion "=". seguido de un
          operador hay que colocar una expresion logica, esta 
          va dentro de un parentesis (), despues hay que colocar
          un caracter ? que indique el camino a seguir, dependiendo
          de si se cumple o no la expresion.
    ->> Para separar el resultado true de false debemos debemos
    agregar un caracter de ; del lado izquierdo se coloca la 
    sentencia a ejecutar.
    -> Si se cumple la condición, del lado derecho se coloca 
    la sentencia a ejecutar      */

    // Ejemplo de opeorador ternario
    let verificacion = n > 5 ? "Si es mayor" : "No es mayor"
    console.log(verificacion);

    /*
    ->> Cuando usar if-else o cuando usar switch?
      ->if-else: cuando necesitemos tomar decisiones bajo
      condiciones mas flexible
      ->switch: cuando tenngamos un conjunto fijo de valores
      para comparar una expresion 
    */
  // Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

Edad = prompt ("Digite su edad: ");

if(Edad >= 18) {
  console.log("Usted Puede Botar.");
} else {
  console.log("No es posible Votar.")
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un 
 * numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, 
 * cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura 
 * if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */
let = num = 56;
if (num%7==0 && num%8==0) {
  console.log("El numero {num} es divicible entre 7 y 8");
}else if (num%7==0){
  console.log("El numero ${num} es divicible entre 7");
}else if (num%8==0){
  console.log("El numero ${num} es divicible entre 8");
}else{
  console.log("El numero $(num) no es divicible entre 7 y 8");
}





/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un 
 * numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero 
 * aleatorio
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura 
 * if-else
 */
let = num = 56;
if (num%4==0 && num%9==0) {
  console.log("El numero ${num} es divicible entre 4 y 9");
}else if (num%4==0){
  console.log("El numero ${num} es divicible entre 4");
}else if (num%9==0){
  console.log("El numero ${num} es divicible entre 9");
}else{
  console.log("El numero $(num) no es divicible entre 4 y 9");
}


/** Ejercicio 4
 * 
 * Realizar un programa que reciba como 
 * parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, 
 * imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura 
 * switch
 */
let peliculas = "categoria";
switch(peliculas){
  case "accion" :
    console.log("La pelicula de recomendada es Jonh wick");
    break;
  case "drama" :
    console.log("La pelicula recomendada es: Forrest gump");
    break;
  case "comedia" :
    console.log("La pelicula recomendada es: Nacho libre");
    break;
  case "romance" :
    console.log("La pelicula recomendada es: 500 dias con ella");
    break;
  case "suspenso" :
    console.log("La pelicula recomendada es: Golpes del destino");
    break;
  case "terror" :
    console.log("La pelicula recomendada es: Asi en la tierra como en el infierno");
    break;
    default :
    console.log("Genero de pelicula no registrado");
    break;    
}

/** Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de 
 * las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir 
 * en pantalla la accion a realizar
 * Utilizar if/else
 */

let opcion=1;
if(opcion = 1){
  console.log("1.-> Retirar dinero");
}else if(opcion = 2){
  console.log("2.-> Transferencia")
}else if(opcion = 3){
  console.log("3 -> Deposito");
}else if(opcion = 4){
  console.log("3. -> Pago de servicios");
}else{
  console.log("Opcion invalida");
}

/** Ejercicio 6
 * 
 * Escribir en codigo un programa conversor 
 * de divisas
 * 
 * Debe recibir como parametro una cantidad 
 * en pesos mexicanos y
 * Segun sea la opcion que se indique, 
 * realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */
let pesosMex = 500;
let moneda = "dolar";

switch(moneda){
    case "dolar":
    conver = pesosMex * 8.41;
    console.log("La cantidad de ${pesosMex} pesos Mex a ${moneda} es ${conver} dolar")
    break;

    case "euro":
      conver = pesosMex * 0.54
      console.log("La cantidad de ${pesosMex} pesos Mex a ${moneda} es ${conver} euro");
      break;
    
    case "libra":
      conver = pesosMex * 0.45
      console.log("La cantidad de ${pesosMex} pesos Mex a ${moneda}  es ${conver} libra");
      break;
    
    case "libra":
      conver = pesoMex * 0.51
      console.log("La cantidad de ${pesosMex} pesos Mex a ${moneda} es ${conver} libra")
      break;
    
    case "franco":
    conver = pesosMx * 0.050
    console.log("La cantidad de ${pesosMex} pesos Mex a ${moneda} es ${convercion} franco");
    break;
  default:
    console.log("No esta dentro de alguna posible convercion");
    break;
}