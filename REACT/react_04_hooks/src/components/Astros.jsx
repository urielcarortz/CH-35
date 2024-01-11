import { useEffect, useState } from 'react'
import './Astros.css'
import Astro from './Astro'

//Funcion ´para agregar la informacion la informacion de la APi
const Astros = () => {
    //Definir la url de la api:
    const Astros_Url = 'https://api.com-notify.org/astros.json'
    //Implementando useState
    const [astros, setAstros] = useState([]);
    //Implementando useEffect
    useEffect (() => {
        fetchAstros();//hostimg de una funcion que voy a definir
    }, []);
    //Crear funcion fetch para conectarse a la API
    const fetchAstros = () => {
        fetch(Astros_Url)
        .then(response => response.json())
        .then(data => (data.people))//Para que la información viva dentro del componente actualizado, traigo setAstros y le paso los datos de `people` de la API
        .catch(error => console.error(error)) 
    }

    console.log(astros);//Vuve en consola del navegador 
    //Enviar la informacion de la API a las cards utilizando .map sobre el array `astros`
    return (
        <>
        {
            astros.map((astro, index) => (
                //Crear una llave única para cada elemento del array (key)
                    //Desestructurar el array para que cada elemento reciba los props definidos dentro de Astro ({name, craft})
                <Astro  key={index} {...astro} />

            ))

            
        }
        </>
    )
}
export default Astros