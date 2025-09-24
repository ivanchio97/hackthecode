// Nivel0.js
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Nivel0() {
  const [pw0, setPw0] = useState("")
  const navigate = useNavigate()

  function check() {
    if (pw0 === "3568") {
      navigate('/dificultad')
    } else {
      alert("Contraseña incorrecta")
      setPw0("")
    }
  }

  return (
    <>
      <h3 className='nivel'> Nivel 0 </h3>
      <div className='game'>
        <h1>¡Bienvenido a HACK THE CODE!</h1>
        <span className='pw1'>3        5        6        8</span>
        <input className='input' placeholder='Escribe la contraseña...' value={pw0} onChange={(e) => setPw0(e.target.value)} />
        <button className='btn' onClick={check}>Iniciar</button>
      </div>
    </>
  )
}

export default Nivel0
