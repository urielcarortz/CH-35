//programacion sincronica 
/*function two (){
    console.log("dos");
}
function one (){
    console.log("uno");
    two();
    console.log("tres");
}
 one();
console.log("****************");
*/
//programacion asincrona
const twoAsync = () => {
    setTimeout( () => {
        console.log("dos Async");
    }, 500);
    
}

const oneAsync = () => {
    setTimeout(function () {
    }, 200);
    console.log("uno Async");
    twoAsync();
    console.log("tres Async");
}

oneAsync();

/*Trabaj con promesas  mediante fetch API
*/

const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
.then(data => data.json())
.then(data => {
    console.log(data);
    console.log(data[0].name);

})
.catch(error => console.error("Ups!, algo salio mal", error));

 //usando fetch para mostrar en navegador
 const botonInfo = document.querySelector("#btn-mensaje");
 const info = document.querySelector("#mensaje");
 //variable para guardar la informacion que se va traer desde la api debe ser de tipo null
 let post =null;
 
 //consumiendo api con fetch (promesas)
botonInfo.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users/4")
    .then(response => response.json())
    .then(response => {
        post = response;//guardar los datos de response el la variable de tipo nul, para que modificar el dato
        //mandamos a llamar la variable desde la funcion (pero, esa no la hemos heche hay que hacerla)
        mostrarDatos(post);
    })
    .catch(error => console.error("problemas!", error));
 });


 //funcion que me permita manipular la variable de tipo null
 //quiero traer name, username, email, phone dl user de la api
 const mostrarDatos = (post) =>{
    //creando nodos 
    const name = document.createElement("h2");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const phone = document.createElement("p");
 
 //ponerlos en el html (innerhtml)
name.innerHTML = post.name;
userName.innerHTML = post.username;
email.innerHTML = post.email;
phone.innerHTML = post.phone;

//Hcer que aparezcan en el navegador
info.appendChild(namee);
info.appendChild(userName);
info.appendChild(email);
info.appendChild(phone);

}
//usando fetch para mostrar en navegador (mostrar producto)
const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");
let productos = null;

botonProductos.addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(response => {
        productos = response;
        //funcion por definir
        mostrarProductos(productos);
    })
    .catch(error => console.error("cuidado!", error))
})

//funcion para crear. agregar y mostrar elementos desde el dom
const mostrarProductos = (productos) => {
    productos.map((productos) => { //el metodo map toma el array (objeto en JS y creanuevos arreglos que se puedesn manipular de manera individual, asi evitamos el uso de un ciclo foreach)
    //mado a llamar las llaves del title, price, descripcion, category, imagen desde la api
    const imagen = document.createElement("img");
    const titulo= document.createElement("h2");
    const precio = document.createElement("h3");
    const descripcion = document.createElement("p");
    const categoria = document.createElement("p");
    const separador = document.createElement("hr");

    //enviar a html 
    imagen.src = productos.image;
    imagen.width = 200;
    titulo.innerHTML = productos.title;
    precio.innerHTML = productos.descripcion;
    categoria.innerHTML = productos.category;

    //mostrarlos en el navegador al agregarlos al elemento padre
    tienda.appendChild(imagen);
    tienda.appendChild(titulo);
    tienda.appendChild(precio);
    tienda.appendChild(descripcion);
    tienda.appendChild(categoria);
    tienda.appendChild(separador);
})
}

//metodo post utilizando fetch, me permite crear recursos enla api
fetch("https://jsonplaceholder.typicode.com/posts", {
    //indicar que es un metodo de tipo post
    method: "POST",
    //crear el body de mi nuevo objeto, siguiendo las mismas llaves de la api existente (userId, title, body)
    body: JSON.stringify({
        userId: 1986,
        title: "sueñan los ",
        body: "author: phillipe k"
    }),
    //difinir headers
    headers: {
        "content-type": "application/json; chraset=UTF-8"
    }
})//fin del fetch
    //inicio de mis promesas
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })

    /*Programacion asincrona (promesas) */
    //funcion flecha de tipo async-await
    //indica que es una funcion asincrona con la palabra reservada async antes de los parametros
    const getUser = async () =>{
        //para que se cumpla la promesa, no utiliza then, sino que usamos try, para errores, se sigue utilizando catch
        try{ 
            //retardo para que se ejecute de manera asincrona, tengo que crear una nueva promesa, que recibe un setTimeout
            await new Promise(resolve => setTimeout(resolve, 300));

        //mi promesa que se ejecuta    
        const response = await fetch("https://jsonplaceholder.typicode.com/users/4");
            const data = await response.json();
            console.log(data);
         }catch(error){
            console.error("error inexplicable", error);
        }
    }
//invocar funcion por favor que no se nos olvide
getUser();

/**LocalStrong 
 * Nos permite crear, modificar, eliminar, guardar, objetos de Js de manera local (laptop)
 * crear un bojeto de JS con sus llaves y valores
*/
const user = [
    {
    id: 1,
    name: 'daniel',
    apellido: 'maldonado',
    email: 'daiel@dir.com',
    posicion: 'instructor',
    empresa: 'generation'
    }

    {
     id: 2,
    name: 'diana',
    apellido: 'alvarez',
    email: 'dianalv@dir.com',
    posicion: 'java dev',
    empresa: 'gruposalinas'  
    }
];
//convertir el objeto creado a notacion JSON y almacenarlo en el localStorage
localStorage.satItem("usuario", JSON.stringify(user));

//traer el objeto desde el localStorage
const users = JSON.parse(localStorage.getItem("usuario"));
console.log('${user[1].nombre} con posicion ${user[1].posicion} trabaja en ${user[1].empresa}');

//sessionStorage