// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nivel0 from './Nivel0'
import Nivel1 from './Nivel1'
import Nivel2 from './Nivel2'
import Nivel3 from './Nivel3'
import Nivel4 from './Nivel4'
import Nivel5 from './Nivel5'
import Nivel6 from './Nivel6'
import Final from './Final'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nivel0 />} />
        <Route path="/nivel1-h4kojs7upcv2azxtq9" element={<Nivel1 />} />
        <Route path="/nivel2-hXkojsXupcvXazxtqX" element={<Nivel2 />} />
        <Route path="/nivel3-hXkojsXupcvXazxtqX" element={<Nivel3 />} />
        <Route path="/nivel4-hXkojsXupcvXazxtqX" element={<Nivel4 />} />
        <Route path="/nivel5-hXkojsXupcvXazxtqX" element={<Nivel5 />} />
        <Route path="/nivel6-hXkojsXupcvXazxtqX" element={<Nivel6 />} />
        
        <Route path="/final-hXkojsXupcvXazxtqX" element={<Final />} />
        <Route path='*' element={<h1>Página no encontrada.</h1>} />
      </Routes>
    </Router>
  )
}

export default App
