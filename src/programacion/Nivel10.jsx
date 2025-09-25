import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Nivel10 = () => {

    const [pw, setPw] = useState("")
    const navigate = useNavigate("")
    
      function check() {
        if (pw === numrand) {
          navigate("/final-hXkojsXupcvXazxtqX") 
        } else {
          alert("Contraseña incorrecta")
          setPw("")
        }
      }

  return (
    <>
      <h3 className='nivel'> Nivel 10 </h3>
      <div className='game'>
        <h1>¿HpTyMthLon?</h1>
        <div className='nivel10'>
            <div className='code'>
                <p>{"#display: none"}</p>
                <p>{"print('coordinates system')"}</p>
                <p>{"t = "} <input type="number" className='variable' /> </p>
                <p>{"l = "} <input type="number" className='variable' /> </p>
                <p>{"M = top * left "} </p>
                <p>{"print(M)"}</p>
            </div>
            <div className='board'>

            </div>
        </div>
        <input className='input' placeholder='Escribe la contraseña...' value={pw} onChange={(e) => setPw0(e.target.value)} />
        <button className='btn' onClick={check}>Comprobar</button>
      </div>
    </>
  )
}

export default Nivel10
