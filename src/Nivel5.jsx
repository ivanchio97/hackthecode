// Nivel1.js
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Nivel5() {

  function check() {
    if (pw === "reno") {
      navigate("/final-hXkojsXupcvXazxtqX") 
    } else {
      alert("Contraseña incorrecta. ¿Quieres otra pista? búscala en la página")
      setPw("")
    }
  }

  const [pw, setPw] = useState("")
  const navigate = useNavigate()
  return (
    <>
      <h3 className='nivel'> Nivel 5 </h3>
      <div className='game'>
        <h1>Empiezan los retos más dificiles.</h1>
        <h2> KBD: 4/3/26/9  </h2>
        <p>Pista: Animal </p>
        <p className='pw1'>Pista 2: QWERTY</p>
        <input className='input' placeholder='Escribe contraseña' value={pw} onChange={(e) => setPw(e.target.value)} />
        <button className='btn' onClick={check}>Comprobar</button>
      </div>
    </>
  )
}

export default Nivel5
