 import { Link } from 'react-router-dom'


const Inicio = () => {
    return (
      <>
    <div>
        <h1>
            Esta es la pagina de Inicio
            <br />
            <br />
            <Link to='/Nosotros'>
            Presiona aqui para ir a la pagina Sobre Nosotros
            </Link>
            <br />
            <br />
            <Link to='/Contacto'>
            Presiona aqui para ir a la pagina Contacto
            </Link> 
        </h1>
    </div>
      </>
    )
  }
  
  export default Inicio
  