//comenatrio de una sola linea
/*comentarios 
multi linea*/


//alert ("Hola Mundoo");

//console.log(Siete de diciembre del 2023)

/*var nombre =prompt("ingresa tu nombre")
alert("Hola, " + nombre, " Bienvenidos ala ch35");*/

/*var numero1 = parseInt(prompt("Ingrse su primer numero:"));
var numero2 = parseInt(prompt("Ingrse se segundo numero:"));

console.log("suma:" + (numero1 + numero2));
console.log("resta:" + (numero1 - numero2));
console.log("multiplicacion:" + (numero1 * numero2));
console.log("division:" + (numero1 / numero2));*/

/*var edad= prompt("Ingrese su edad");
if(edad => 18 &&  edad <65){
    alert("Mayor de edad"); 
}else{
    alert("Menor eres, pasar no puedes");
}
if(edad >= 18 && edad <=65){
    alert("Eres mayor de 18 y lo suficiente Apto para pasar");
}
if(edad >65){
    alert("Disculpa, no puedes pasar")
}*/

/*var nombre = prompt("Ingresa tu nombre");
var edad = parseInt(prompt("Cual es tu edad"));

if (edad>40) {
    alert("HOLA, " + nombre + " Ya tas viejo");
    } else if(edad>30) {
    alert("HOLA, " + nombre + " Eres un chavo ruco >.<");
  } else if(edad>=18) {
    alert("HOLA, " + nombre + " ya eres adulto 3:)");
  }else if(edad<18){
    alert("HOLA, " + nombre + " eres un chavo");
  }*/
  
  /*       Tipos de Datos y Variables 
    scope es el alcance de nuestras variables
    var, let, const la diferencia es el alcance.
    var: alcance globla
    ler: alcance local
    const: se mantine sin ningun cambio..
    
    string: cadena de texto (lleva comillas )
    number: numero
    nooleana: true/false
    null: nulo
    undefinied: esta asignado o definido 
    Todas nuestras variables deben ser declaradas con nombres 
    especificos y claros sin espacios, no deben iniciar con numeros*/

    /*let nombre ="daniel";
    let invitadosExtras = 2;
    let mayorEdad = true;
    let edad = 25;
    let invitadoEspecial = null;
    let horaSalida = undefined;*/

    document.write(nombre);
    
    /* Encasillamiento o tipado nos servira para para el mantenimiento del 
    codigo ya que lo hace mas legible y ficail de anotar
    prevencion de errores para reducir la probabilidad de los mismos  */
    
    /*let numero = 15;
    let texto = "Hoola";*/

    // con encasillamiento

    /*let numeroEncasillado = number = 5;
    let textoEncasillado = string = "hola";*/

    //typeof palabra reservada para saber el tipo de dato que tenemos

    //console.log(typeof(nombre));

    /*let funcionNumber = console.log(typeof number(nombre));
    metodoParseInt = console.log(typeof parseInt (nombre));
    metodoParseFloat = console.log(typeof parseFloat (nombre));*/
    
    /* pasreInt y parseFloat son funciones que se utilizan para convertir cadenas de texto en numero, ambas 
    nos ayudan en este cambio */ 
   
    //convertir de number a string 
   /* console.log(typeof String(edad));
    console.log(typeof edad.toString ());

    let numeroo = Number (maryorEdad);
    console.log(typeof(numero));*/
    
   /* let textoo = String(mayorEdad);
    console.log(typeof(texto));
    console.log(typeof mayorEdad.toString());*/

    /*let negacion = !mayorEdad;
    console.log (negacion);*/

    //concatenar strings

    /*let saludo = "hp holaa";
    let frase = "el futuro es hoy";*/

   /* texto = saludo + frase;
    console.log(texto);*/

    /* receta de hotckaes */

    /*let harina = "harina";
    let leche = "leche";
    let mantequilla = "mantequilla";
    let vainilla = "vainilla";
    let huevos = "huevos";
    let nutella = true;

    let functionNumber = console.log (typeof Number(harina));
    nutella =  Number (nutella);
    console.log (typeof (nutella));

    hotcakes = "los ingredientes para la reseta son: " + " "+ harina +" "+ leche +" "+ mantequilla +" "+ vainilla +" "+ huevo;

    document.write(hotcakes);

    let texto = String(nutella);

    let*/
    
    /* Tips de dats:
    --> String (cadenas de texto)
    --> Number (numéricos)
    --> Booleans (booleanos: true or false)
    --> Null (nulos)
    --> Undefined (Indefinidos)
    --> Objects (Objtos)
    --> Objects (Arrays)
     */
    
    /*console.log(); Nos permite visualizar en consola del navegardor el codigo de Js
    console.war(); Muestra un mensaje de advertencia.
    console.table(); Muestra un mensaje de error.*/

    let firstName;
    firstName = 'Daniel';
    let lastName = 'Maldonado';

    console.log(firstName + " " + lastName);
    console.log("Mi nombre es" + firstName + " y mi apellido es " + lastName);

      /* ECNAScript   (ES6). Interpolacion de cadenas
      --> backticks
      --> Para variables las invocanos $(variable)
      --> Texto para string
      */

      let age = 37;
      console.log('Mi nombre es  ${firstName}, Mi apellido es ${lastName}, y tengo ${age} años');

      //console.warn();
      console.warn('Precaucion, no es buena práctica dejar sin un punto y coma');
      //console.error();
      console.error('Status 404: Failed');


      /*Array. Se traduce como matriz o arreglo. es un tipo de dato que pertenece a Js, en el cual se almacena una colección de elementos de manera ordenada.
      --> Los arrays se pueden manipular mediante métodos específicos.
      --> Los elementos de una array se contabilizan como índices empezando por índice 0, por lo cual, el primer elemento del array posee el índice 0.
      --> Un array pose n cantidad de elementos.
      --> Se declaran como variables, seguido del signo igula y corchetes. Dentro de cada corchete vive un elemento con un tipo de dato. */
      
      let arreglo1 = [];//Array vacio
      console.log('Array vacio ${arreglo1}');
      //Los elementos de un array se separan mediante comas
      let cars = [Volkswagen, BMW, Mazda, Kia];//Array de String
      console.log(cars);
      //Longitud e indice son diferentes. La longitud (length) es el número de elementos y el indice correspondiente a cada elemento a partir del 0.
      console.log(typeof(cars));
      let salariesMxnn = [1500, 1200, 2500, 2000, 2800, 1850, 1400, ];
      console.long(salariesMxnn.length);//Output 7
      consolele.log(salariesMxnn);

      /*Objetos. Los objetos son tipos de datos en js, con una estructuta definida que nos permite almacenar informacion mediante llaves (claves) y valores.
      Su sintaxis es la siguente:
          const object {
              clave1: valor1 (dato1)
              clave2: valor2 (dato2) }
      Los objetos pueden almacenar diferentes tipos de valores.
       */

      const employes = {
        firstName: "rey david",
        lastName: "Martinez",
        age: 29,
        country: "Mexico"
      }

      console.log(employee);

      //Mostrando mi array como table
      console.table(cars);
      //Mostrando mi objeto como tabla
      console.table(employee);