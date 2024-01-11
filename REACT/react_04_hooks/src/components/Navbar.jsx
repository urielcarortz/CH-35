import './Navbar.css' //Importación de CSS
import ISS_logo from '/.assets/ISS-logo.png'


//Crear función que contiene el marcado para que viva nuestro código
const Navbar = () => {
    const url1 = 'https://www.nasa.gov/international-space-station/'
    return (
        <> {/*Fragmento... (por cierto, el comentario debe ser multilínea y estar encerrado entre llaves) */}
        <div className='navbar--container'>
            <div className='navbar--title'>
                <a href={ url1} id='link--logo'>
                    <img src={ISS_logo } alt='Logo de ISS'/>
                </a>
            </div>
            <div className='navbar--links'>
                <div className="navbar--link">
                    <a href='#'>Home</a>
                </div>
                <div className="navbar--link">
                    <a href="#">About</a>
                </div>
                <div className="navbar--link">
                    <a href="#">Astros</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;
