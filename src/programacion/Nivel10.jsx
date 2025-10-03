import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Nivel10 = () => {

    const [pw, setPw] = useState("")
    const [arriba, setArriba] = useState(20)
    const [izquierda, setIzquierda] = useState(30)
    const navigate = useNavigate("")
    const [numrand, setNumrand] = useState(Math.floor(Math.random()*10000)+10000)
    const [letter, setLetter] = useState("X")
    
      function check() {
        if (pw === numrand) {
          navigate("/final") 
        } else {
          alert("Contraseña incorrecta")
          setPw("")
        }
      }
      function activate(){
        if(arriba == 150 & izquierda == 150 & letter == "M"){
            setPw(numrand)
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
                <p>{"t = "} <input type="number" className='variable' 
                    value={arriba} onChange={(e)=>setArriba(Number(e.target.value))} /> </p>
                <p>{"l = "} <input type="number" className='variable' 
                    value={izquierda} onChange={(e)=>setIzquierda(Number(e.target.value))} /> </p>
                <p>{"M = t * l "} </p>
                <p>{"print("}<input className='variable2' type='text' 
                value={letter} onChange={e => setLetter(e.target.value)} />{")"}</p>
                <p>{"#display: block"}</p>
            </div>
            <div className='board'>
                <p className='oculto' style={{top: arriba, left: izquierda}} >M</p>
                <p className='mostrado' onClick={activate}></p>
            </div>
        </div>
        <input className='input' placeholder='Escribe la contraseña...' value={pw} onChange={(e) => setPw(e.target.value)} />
        <button className='btn' onClick={check}>Comprobar</button>
      </div>
    </>
  )
}

export default Nivel10
