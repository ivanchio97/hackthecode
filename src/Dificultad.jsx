// Nivel0.js
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dificultad() {
    const [pw0, setPw0] = useState("")
    const navigate = useNavigate()
  
    function check(num) {
      if(num == 1){
        navigate("/nivel1-h4kojs7upcv2azxtq9") // Redirige a Nivel 1
      }
      else{
        const confirmar = confirm("⚠️ ADVERTENCIA ⚠️ Para la dificultad media debes tener conocimientos básicos de programación. ¿Conitnuar?")
        if (confirmar) navigate("/nivel9")
      }
    }
  
    return (
      <>
        <h3 className='nivel'> Nivel ? </h3>
        <div className='game'>
          <h1>Elige una dificultad</h1>
          <button className='btn' onClick={()=>check(1)}>Facil</button>
          <button className='btn' onClick={()=>check(2)}>Media</button>
        </div>
      </>
    )
  }
  
  export default Dificultad
  