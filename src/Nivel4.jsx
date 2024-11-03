// Nivel1.js
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Nivel4() {

  const [pw, setPw] = useState("")
  const navigate = useNavigate()
  const botones = [7,3,5,1,2,4,6]
  const estilos = ["#000","#000","#000","#000","#000","#000","#000"]
  const [colors, setColors] = useState (estilos)
  const [conteo, setConteo] = useState(1)
  const [show,setShow] = useState(false)
  function check() {
    if (pw === "7luces") {
      navigate("/nivel5-hXkojsXupcvXazxtqX")
    } else {
      alert("Contraseña incorrecta")
      setPw("")
    }
  }
  function handleClick(element,index){
    if(conteo == element){
      let nuevoArreglo = [...colors]
      nuevoArreglo[index] = "#0f0"
      setConteo(conteo + 1)
      setColors(nuevoArreglo)

    }
    else{
      setColors(estilos)
      setConteo(1)
      setShow(false)
    }

    if(conteo > 6){
      setShow(true)
    }

  }

  return (
    <>
      <h3 className='nivel'> Nivel 4 </h3>
      <div className='game'>
        <h1>¿Podrás con este nivel?</h1>
        <div className='containernivel5'>
          {
            botones.map((element,index)=>{
              return <button key={element} onClick={()=>handleClick(element,index)} style={{backgroundColor: colors[index]}} ></button>
            })
          }
        </div>
        {show && <p>La contraseña es "7Luces"</p>}
        <input className='input' placeholder='Escribe contraseña' value={pw} onChange={(e) => setPw(e.target.value)} />
        <button className='btn' onClick={check}>Comprobar</button>
      </div>
    </>
  )
}

export default Nivel4
