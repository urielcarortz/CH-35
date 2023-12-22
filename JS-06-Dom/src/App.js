const boton = document.getElementById("btn");
const botonReset = document.getElementById("resert");
const colorFondo = document.body.style.backgroundColor;

//vamos a declarar una funcion que generara un número random tomando un parametro 
const random = (number) => {
    return Math.floor(Math.random() * (number + 1));
}

//crear eventos de click para que al presionar un botón pase algo

botonRandom.add.addEventListener("click", () => {
    const randomColor = 'rgb (${random(255)}, ${random(255)}, ${random(255)})';
    document.body.style.backgroundColor = randomColor;
});


//boton resert
botonReset.addEventListener("click", () => {
    document.body.style.background = colorFondo;
});