const emailInput = document.getElementById("email");
const submitButton = document.getElementById("btn-submit");
//regex: expresiones regulares. determina patrones que se deben cumplir 
const emailREGEX = /^[\w.+\=]+@gmail\.com$/;

//desabilitar el botón
submitButton.disabled = true;

/*evento para input, el cula evaluará el patron de expresión regular y en 
caso de cumplir el patrón, habilitará el buton n y podremos ser redigidos a la página index.html
 * - Se obtiene el valor actual del campo email (input) usando e.target.value y se almacena en una variable (text).
  */
 emailInput.addEventListener("input", (e) => {
    const text = e.target.value;

    if(emailREGEX.test(text) == true){
        submitButton.disabled = false;}
 });