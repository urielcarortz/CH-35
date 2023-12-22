/**
 Para manipular la informacion de un usuario, necesito crear un perfil
 */

 const user = {
    username: 'danieldlcm86'
    age: 37,
    email: 'danie@gmail.com'
    favfilms: ['Interestelar' , 'Se7en', 'Mean Girls']
 }
    //Crear una función que me permita ingresar el objeto del perfil en el nodo nombre

    const createUser = (user) => {
        document.getElementById("username").textContent = user.username;
        document.getElementById("age").textContent = user.age;
        document.getElementById("email").textContent = user.email;
        /*Mostrando elementos  de lista en forma de lista.
            Para mostrar el array  en forma de lista utilizamos un ciclo forEach
            para recorrer rodo el array y traer cada elementos a la lista  */
        const ul = document.getElementById("fav-films");
        user.favfilms.forEach(file => {
        const li = document.createElement("Li");
        li.textContent = file;
        ul.appendChild(li);
            
        });
    }
    //modificando estilos de la lista ul para quitar viñetas
    ul.style.listStyleType = "none";
    ul.style.padding = "0"
    ul.style.color = "#D9B70D"

//Invocando la funcion
createUser(user);

/*Eventos para actualizar el username mediante el input y el boton */

const inputName = document.getElementById("name")
const profileBtn = document.getElementById("btn-main")
const userName = document.getElementById("username")

profileBtn.addEventListener("click", () =>{
    userName.text = inputName.value;
})
