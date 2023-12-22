const container = document.getElementById("#container-div");
const button = document.getElementById("#car-btn");

//agregamos estilos al container pra visibilidad
container.style.visibility = "visible";

//manejando eventos para acultafr el container desde el botón

button.addEventListener("click" , () =>{
    container.style.visibility = (container.style.visibility == "visible" ) ? "hidden" :"visible";
});
