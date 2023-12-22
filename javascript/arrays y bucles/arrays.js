/* ->> Arrasy
    -> es una colección o agrupación de elementos
    en una misma variable. cada una de ellos ubicado
    por la posicion que ocupa el array
    -> Los arrays se utilizan para almacenar y organizar
    datos de numeros mas eficiente 
    */

    // -> Crear un Array
    const numeros = [1, 2, 3, 4, 5];

    // -> Array de cadenas de texto
    const comidas = ["tacos", "sopa", "pan", "jugo"];
    console.log(comidas);

    // -> Array mixto
    const mixto = [
        "Pluma" ,
        8,
        true,
        {nombre: "Marr"}
    ];
    console.log(mixto);

    // -> Array vacio
    const lista =[];
    console.log(lista);
    // -> Agregar elmentos a  mi array vacio
    lista[0] = "Leches";
    lista[1] = "Aceite";
    lista[2] = "Huevos";
    lista[3] = "Pasta";
    console.log(lista);

    // -> Otra manera de crear arrays
    const frutas = new Array("Melon", "Guayabas",
    "Mandarinas", "Platanos");
    /*Esta sintaxis se puede emplear en Arrays porque son Objects, es una manera de mandar a llamar un nuevo Objeto de tipo Array */
    console.log(frutas);

    // ->Longitud de un array
    console.log(frutas.length);
   
    // -> Acceder a los elementos del array acorde a su indice
    console.log(frutas[3]);//mandarinas
    console.log(5);//undefined
    
    // -> Modificar un elemento de array por el indice

    const cremeria = ["Jamon", "Salchicas", "Queso doble crema", "Queoso oaxaca", "Mantequilla"];
    console.log(cremeria);
    // -> cambiamos un elemento enla posicion 2
    cremeria[2] = "Pierna de pavo";
    cremeria[4] = "Mayonesa";
    console.log(cremeria);

    // -> Arreglo de arreglos o multidimencional
    console.log("Arreglos");

    // -> Estados: Edomex, Guadalajara, Yucatan, Sonora, Oaxaca, Cdmx.

    // -> Platillos: Guajolocombo, Torta ahogada, panuchos, dogos, tlayudas.
    
    const estados = ["Edomex", "Jalisco", "Yucatan", "Sonora", "Oaxaca", "Cdmx"];
    
    const platillos = ["Guajolocombo", "Torta ahogada", "Panuchos", "Dogos", "Tlayudas"];
    
    const menu = [estados, platillos];

    console.log(menu[0] [2]);
    /*En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array. 
    */

    console.log ('En ${ menu[1][0]}  se come en  ${ menu[0][2]}');

    /* -> Metodos de arrays
            - Metodo de cola (queve). Los metodos de cola implican agregar elementos al final del array y eliminar elementos del final del array. Sigue el principio L  IFO(last-int.first-out) que significa el ultimo elemento */

            console.log("Metodos de arrays");

            const ch35 = ["dani", "Fer", "Mara", "Gaby", "Mari", "Paola"];
            console.log(ch35);
            // -> pop() eliminr el ultimo elemento del array
            let popch35 = ch35.pop();
            console.log(popch35);//devuelve el dato eliminado
            console.log(ch35); //elimina el dato de la lista

            // -> push () agregar el final del array
            let pushch35 = ch35.push("Mony");
            console.log(ch35);
            
            // -> shift () quitar primero del array
            let shiftch35 = ch35.shift();
            console.log(ch35);

            // -> unshift agregar el principio del array 
            let unshiftch35 = ch35.unshift("dany");
            console.log(ch35);

            // -> reverse () cambio el sentido del ordenamiento del array
            let reversech35 = ch35.reverse();
            console.log

            /*
            -> investigar
                -sort
                -forEach
                -slice
                -splice
                -indexof
            */
