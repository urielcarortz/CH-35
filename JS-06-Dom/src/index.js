 /*
Manipulacion del DOM 

-leer y traer nodos del árbol del DOM 
document.getElementById(trae elemetnos por id)
document.getElementByClassName(trae elemetnos por class)
document.getElementByTagName(trae elementos por elementos)

//get getElementById
*/ 
const titulo = document.getElementById("title1");
console.log(titulo);
console.log(titulo.innerText); // traer un string (texto que vive en un id)

//getElementosByClassName
const titulos = document.getElementsByClassName ("title");
console.log(titulos);
console.log(titulos.lenght); //muestra la longitud de lemenetos de la clase
console.log(typeof titulos); //muestra que es un object porque es una colección de arrays

//getElementByTagName
const tituloH3 = document.getElementsByTagName ("h3");
console.log(tituloH3);
console.log(tituloH3[0].innerText);

//Métodos para llamar elementos mediante selectores de CSS
//se usa para procesos más especificos y la sintáxis querSelector
//-document.querySelector ("selector"); //#,.,<>
//document.querySelectorAll (). Seleccionar los elementos que se especifiquen.
//siempre van a trar el primer elemento con el selector indicado

//querySelector
const query = document.querySelector ("#title4");
console.log(query.innerText);

const queryClass = document.querySelector(".title");
console.log(queryClass);

//querySelectorAll
const querySelectorAll = document.querySelectorAll(".title");
console.log(querySelectorAll);

//Manipular elementos del DOM (estyles) con JS
titulo.style.textAlign = "center"; 
titulo.style.color = "#5058F2";

//manipular el texto de un elemento
const titulo2 = document.querySelector("#title2");
titulo2.innerText = "sesión de Manitulación del Dom. CH35"
titulo2.style.color = "#F23D3D";

//Métodos para crear y agregar elementos en el DOM. Este proceso se divide
//en dos: "crear el nodo y agregar el nodo".
//-crear nodos
//document.createElement ("element") --> Crea elementos a partir de etiquetas
//document.creteText Node("text")--> Crea texto dentro de las etiquetas.

const nodo1 = document.createElement("h4");
const imgNodo = document.createElement ("img");

/*
-Agregar nodos, mandamos allamar el elemento padre y le pasamos la propiedad con la constante que guarda al nodo creado

*parentElement.appendChild(const);
*parentElement.append(const);
*parentElement.insertBefore(const);
*ParentElement.inserAdjacentElement(const);
utilizaremos mayormente appendChild
*/ 
//obtengo el elemento padre por tag, class o id 
const parentElement = document.getElementById ("dif"); 
//crear texto al nodo1
const textNodo1 = document.createTextNode ("Imagen agregada desde el dom");
//insertar el texto en el nodo1
nodo1.appendChild(textNodo1);
//insertar nodos en elemento padre 
parentElement.appendChild(nodo1);
parentElement.style.fontFamily= "'Karla', sans-serif";
parentElement.style.color = "#A62F03";

/*Agregando imagen */

//Inserto el imgNodo en el elemento padre para definirlo posteriormente
parentElement.appendChild(imgNodo);
imgNodo.src = "../src/assets/femalecodertocat.png";
imgNodo.alt = "femalecodertocat.png";
imgNodo.width = "300";

/*
Otra forma de leer y modificar nodos
 -document.outerHTML(leer)
 -node.innerHTML(escribir sobre el nodo)
*/

const elementOuter = titulo2.outerHTML;
console.log(elementOuter);
titulo2.innerHTML = "Manipulación del DOM - CH·5"