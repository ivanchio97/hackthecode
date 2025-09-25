import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Prueba = () => {
    const [pw, setPw] = useState("")
    const [code, setCode] = useState(Math.floor(Math.random()*100000)+100000)
    const navigate = useNavigate()

    function check() {
        if (pw == code) {
          navigate("/nivel9") 
        } else {
          alert("Contraseña incorrecta")
          setPw("")
        }
      }

  return (
    <>
    <h3 className='nivel'>01011100011</h3>
      <div className='game'>
        <h3>¡Has entrado al modo dificil!</h3>
        <h1>¿Realmente quieres los desafíos de programación?</h1>
        <p>Demuestra tus conocimientos y obtén la contraseña oculta.</p>
        <p className='blank'></p>
        <p className='hide'>{code}</p>
        <input className='input' placeholder='Escribe la contraseña...' value={pw} onChange={(e) => setPw(e.target.value)} />
        <button className='btn' onClick={check}>Comprobar</button>
      </div>

    </>
  )
}

export default Prueba
