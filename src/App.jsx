// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nivel0 from './Nivel0'
import Nivel1 from './Nivel1'
import Nivel2 from './Nivel2'
import Nivel3 from './Nivel3'
import Nivel4 from './Nivel4'
import Nivel5 from './Nivel5'
import Nivel6 from './Nivel6'
import Nivel7 from './Nivel7'
import Nivel8 from './Nivel8'
import Final from './Final'
import Dificultad from './Dificultad'
import Nivel9 from './programacion/Nivel9'
import Nivel10 from './programacion/Nivel10'
import Prueba from './programacion/Prueba'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nivel0 />} />
        <Route path="/nivel1-h4kojs7upcv2azxtq9" element={<Nivel1 />} />
        <Route path='/dificultad' element={<Dificultad />} />
        <Route path="/nivel2-hXkojsXupcvXazxtqX" element={<Nivel2 />} />
        <Route path="/nivel3-hXkojsXupcvXazxtqX" element={<Nivel3 />} />
        <Route path="/nivel4-hXkojsXupcvXazxtqX" element={<Nivel4 />} />
        <Route path="/nivel5-hXkojsXupcvXazxtqX" element={<Nivel5 />} />
        <Route path="/nivel6-hXkojsXupcvXazxtqX" element={<Nivel6 />} />
        <Route path='/nivel7-hXkojsXupcvXazxtqX' element={<Nivel7 />} />
        <Route path='/nivel8' element={<Nivel8 />} />
        <Route path='/prueba' element={<Prueba />}  />
        <Route path='/nivel9' element={<Nivel9 /> } />
        <Route path='/nivel10' element={<Nivel10 />} />
        
        <Route path="/final" element={<Final />} />
        <Route path='*' element={<h1>Página no encontrada.</h1>} />
      </Routes>
    </Router>
  )
}

export default App
