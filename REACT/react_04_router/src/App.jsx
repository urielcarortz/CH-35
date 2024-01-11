import './App.css'
import { Routes, Route } from 'react-router-dom'
import Contacto from './components/Contacto'
import Inicio from './components/Inicio'
import SobreNosotros from './components/SobreNosotros'


//Routes, actua como contenedor padre de todas las rutas individuales que se crearan en la aplicacion
/**
 * 
 * Route, es la ryta `hija` de cada componente. Recibe dos atributos
 *1. path: especifica la ruta (URL) a seguir
  2. element: especifica el componente que se renderiza 
 */
function App() {


  return (
    <>
    <Routes>
        <Route path='Inicio' element={<Inicio />} />
        <Route path='Nosotros' element={<SobreNosotros />} />
        <Route path='Contacto' element={<Contacto />} />
    </Routes>
    </>
  )
}

export default App


