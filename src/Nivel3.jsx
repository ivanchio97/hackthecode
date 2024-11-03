// Nivel1.js
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Nivel3() {

  function check() {
    if (pw === "contraseña") {
      navigate("/nivel4-hXkojsXupcvXazxtqX") 
    } else {
      alert("Contraseña incorrecta")
      setPw("")
    }
  }

  const [pw, setPw] = useState("")
  const navigate = useNavigate()
  return (
    <>
      <h3 className='nivel'> Nivel 3 </h3>
      <div className='game'>
        <h1>Te has esforzado mucho hasta ahora. <br/> Descansa un poco</h1>
        <p>Como recompensa, un nivel facil ;)  </p>
        <input className='input' placeholder='Escribe contraseña' value={pw} onChange={(e) => setPw(e.target.value)} />
        <button className='btn' onClick={check}>Comprobar</button>
      </div>
    </>
  )
}

export default Nivel3
