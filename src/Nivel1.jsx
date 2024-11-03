// Nivel1.js
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Nivel1() {

  function check() {
    if (pw === "4729") {
      navigate("/nivel2-hXkojsXupcvXazxtqX") // Redirige a Nivel 1
    } else {
      alert("Contraseña incorrecta")
      setPw("")
    }
  }

  const [pw, setPw] = useState("")
  const navigate = useNavigate()
  return (
    <>
      <h3 className='nivel'> Nivel 1 </h3>
      <div className='game'>
        <h1>Lograste entrar al sistema</h1>
        <h3>¿Podrás adivinar la siguiente contraseña?</h3>
        <p>Pista: <a href="#">https://www.link.com</a> </p>
        <input className='input' placeholder='Escribe la contraseña...' value={pw} onChange={(e) => setPw(e.target.value)} />
        <button className='btn' onClick={check}>Comprobar</button>
      </div>
    </>
  )
}

export default Nivel1
