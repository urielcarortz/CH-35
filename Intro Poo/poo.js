/*
 *Paradigmas de programacion


 *Programacion imperactiva: se basa en instrucciones detalladas ejecutando un flujo a una secuencia dterminada


 *Programacion basada en eventos: sebasa en la gestion y respuesta de evenetos 

 *Programacion orientada a objetos. Toma cierta informacion o estructura del mundo real (objetos) para oder explicar ciertas cosas, sus caracteristicas (propiedades o atributos)




 *Programacion declarativa: Explicar lo que queremos obtner


 *Programacion orientada a objetos: Toma cierto informacion*/

 //*clases:-> es una plantilla o molde a partir de la cual se crean los objetos. Esto nos va a permitir definir de forma muy generica como debe verse y que debe hacer un objeto(estado y comportamiento), con atributos y metodos. Nos ayudan a definir un tipo de objeto y crear instancias de este tipo de objetos
 
 class persona{
    nombre = "";
    apellido = "";
    edad = "";
    email = "";
    telefono = "";

}
 //Objeto:-> La clase o plantilla por si sola nos va a servir de nada, solo es un concepto. Cuando creamos un objeto, ya tiene una existencia real porque ocupa una memoria y se puede utilizar dentro del programa. *Caracteristicas de un objeto -Estado(atributos) Nombre. *El constructor es una funcion especial, cuya finalidad es la de construir o instanciar objetos

constructor = (nombre, apellido, edad, email, telefono);{



 comer(){
    console.log("Buen apetit");
 }//metodo comer

 bailar(){
    console.log("Dale hasta el ");
 }//metodo bailarr

 mostrarInfo(){
 console.log("Nombre: ");
 console.log("Apellidos: ");
 console.log("Edad: ");
 console.log("Email: ");
 console.log("Telefono: ");
 }
 }
 //instanciar
 let usuario1 = new persona ("fernandad", "ramos", 31, "fer@gmail.com", "55725889");
 let usuario2 = new persona ("felipe", "reyes", 33, "felip@gmail.com", "72588259");
 let usuario3 = new persona ("brandon", "lopez", 30, "bran@gmail.com", "25858689");
 let usuario4 = new persona ("manuel", "irineo", 36, "manu@gmail.com", "55726479");
 let usuario5 = new persona ("erick", "agustin", 35, "erick@gmail.com", "55258889");

 console.log(usuario1);//imprimir el objeto completo
 console.log(usuario4.email);//imprimir un atributo en especifico
 console.log(usuario1.email, usuario2.email, usuario3.email, usuario4.email, usuario5.email);

 usuario4.comer();//invocar el metodo
 usuario5.bailar();
 usuario1.bailar();
 usuario2.comer();

 //pilares de programacion orientada a objetos

 //herencia nos permite heredar a clases inferiores para poder optimizar el programa 

 class arrendador extends persona{//sun clase
   capacidad = 0;
   costo = 0;
   nombreLugar = "";

   constructor(){
      super(nombre, apellido, edad, email, telefono, capacidad, costo);
      this.capacidad = capacidad;
      this.costo = costo;
      this.nombreLugar = this.nombreLugar;
   }

   mostrarInfo(){
      console.log("capacidad", this.capacidad);
      console.log("costo", this.costo);
      console.log("nombre del lugar", this.nombreLugar)
   }

 }

 /*class arrendadorGuadalajara extends arrendador{
   sub clase nieto

 }*/
 let arrendador1 = new arrendador("Rocio", "Hernandez", 29, "rocio@gmail.com", "5552897136", 100, 25000, "el rocio");
 
 console.log(arrendador1);

 console.log(arrendador1.costo);

 arrendador1.mostrarInfo();

 //polimorfismo: tener objetos de diferentes tippos que pueden ser manipulados en comun, Proviene de Poli = muchas, morfismo = formas. Se utiliza para crear métodos con el mismo nombre pero con diferente comportamiento.

 class producto {
   marca  = "";
   precio = 0;

   constructor(marca, precio){ 
        this.marca = marca;
        this.precio = precio; 
   }

   mostrarDescripcion(){
      console.log("marca ");
      console.log("precio");

   } 
 }

 let producto1 = new producto("cerave", 58);

 //encapsulamiento  ocultar la implementacion de un obejeto y solo mostrar los datos necesario

 class usuario{
   #contraseña;

   constructor(userName, correo, contraseña){
   this.userName = userName;
   this.correo = correo;
   this.#contraseña = contraseña;
   
   }
 }

 verificarContraseña(contraseña){
   return this.#contraseña == contraseña;
 }

 //abstraccion no es nada mas taer objetos del mundo real y poser aplicarlos a la programacion mediante clases, metodos, constructores y objetos


 //Los objetos de tipo Json en un formato de intercambio de datos ligero accesible, estructurado, manipulable (Dom) y que nos brindan una mejor comunicacion entre el clinete y el servidor. Esto gracias 


 /**
 * Programa que conste de una clase llamada alumno que tenga como atributos nombre y calificacion. Definir los metodos para incializar sus atributos (constructor), imprimirlos y mostrar un mensaje con el resultado de si la calificacion es aprobatoria o no.
 * Atributos:
 * nombre
 * calificacion
 * 
 * Metodos 
 * imprimirCalificacion
 * evaluacion
 * 
 * la calificacion aprobatoria es de 6
 * if para evaluar la calificacion
 */

 /*
Atributos
Nombre 
Calificación

métodos
imprimirCalificación
evaluación

lacalificación aprobatoria es de 6
if para evaluar la calificación 
*/

class  Alumno {
   nombre = "";
   calificacion = 0;

   constructor(nombre, calificacion) {
       this.nombre = nombre;
       this.calificacion = calificacion;
   }

   imprimirCalificacion() {

       console.log(`${this.nombre} tiene una calificación de ${this.calificacion}`);

   }

   evaluacion() {
       if (this.calificacion >= 6) {
           console.log(`${this.nombre} ha aprobado.`);
       } else {
           console.log(`${this.nombre} no ha aprobado.`);
       }
   }
}

const alumno1 = new Alumno("Ximena", 5);
const alumno2 = new Alumno("Diego", 10);

alumno1.imprimirCalificacion();
alumno1.evaluacion();

alumno2.imprimirCalificacion();
alumno2.evaluacion();