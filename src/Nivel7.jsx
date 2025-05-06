import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Nivel7() {

  const [pw, setPw] = useState("Удалить этот текст")
  const navigate = useNavigate()

  function check() {
    if (pw === "sombrilla" || pw === "paraguas" ) {
      navigate("/nivel8") 
    } 
    else if(pw === "Удалить этот текст") {
      alert("Удалить этот текст!! ¿Acaso no sabes ruso?")
    }
    else{
      alert("Contraseña incorrecta. Tu clave es 5")
      setPw("")
    }
  }

  

  return (
    <>
    <h3 className='nivel'>Nivel 7</h3>
    <div className='game'>
    <h2> Fvzjppt vzj zxfx jr pf ppzanf </h2>
    <input className='input' placeholder='¿Recuerdas lo que hiciste en el primer nivel?' value={pw} onChange={(e) => setPw(e.target.value)} />
    <button className='btn' onClick={check}>Comprobar</button>
    <small className='pw1'>Какой метод общения использовал Юлий Цезарь?</small>
    </div>
    </>

  )
}

export default Nivel7