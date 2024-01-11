import './Products.css'
{/**Comente esta linea para que funcione los props desestructurados  
const Products = (props) => {
*/}
const Products = ( {img, name, description, price } ) => {    
    return(
        <>
        {/*
         Agregando las propiedades directamente al componente, pero no se modifican las propiedades al importar el Componente en App.jsx, es decir, se repite la misma información


        <div className='cards'>
            <div className="products--card">
                <img src='{https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933}' alt='sneakers'/>
                <h3>Fashion</h3>
                <p>Tenis </p>
                <h4>$1,958</h4>
            </div>
        </div>
    */}
        {/* 
        *Props estructurados.(Cuando no conozco los paramentros dentro de la fincion flecha) Puedo asignar diferentes propiedades a un div, sin tener que generar muchos props, solamente usando las palabra reservada ´props´ como parametro de la funcion 
        *Quiero modificar varias propiedades, puedo mandar a llamar las props dentro de cada elemento, somo si fueran metodos   
        */}

       {/** <div className='cards'>
            <div className="products--card">
                <img src={props.img} alt='sneakers'/>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h4>{props.price}</h4>
            </div>
        </div> */}
        {/**Props desestructurados. Permite asiganr datos de un objeto a una variable separada para dicha variable pueda contener los datos provenientes de l objeto.
         * No utilizamos `props` como parámetro de la función, sino que, asignamos parámetros a cada elementos y los llamados directamente en dichos elementos.
        * Los props desestructadores viven como parámetros, pero entre llaves y se les asigna un nombre específico
         */}
        <div className='cards'>
            <div className="products--card">
                <img src={img} alt='sneakers'/>
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>{price}</h4>
            </div>
        </div>
        </>
    )
}
export default Products