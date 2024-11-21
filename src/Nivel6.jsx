// Nivel1.js
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Nivel6() {

  const [pw, setPw] = useState("animales")
  const navigate = useNavigate()
  const imagenes = [0, 4, 3, 5, 2, 1]
  const estilos = [
    "#000",
    "linear-gradient(270deg, #000 79.9%, #0f0 20%)",
    "linear-gradient(270deg, #000 59.9%, #0f0 40%)",
    "linear-gradient(270deg, #000 40%, #0f0 6%)",
    "linear-gradient(270deg, #000 19.9%, #0f0 8%)",
    "#0f0"
  ]
  const links = [
    "https://cdn.pixabay.com/photo/2016/04/20/08/19/ostrich-1340635_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/08/20/17/21/bear-422682_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/07/22/05/50/wolf-8142720_960_720.png",
    "https://cdn.pixabay.com/photo/2024/07/29/02/28/snake-8928741_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/05/28/08/32/elephant-1421167_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/08/04/19/45/deer-5463722_960_720.jpg"
  ]
  
  const [colors, setColors] = useState (estilos)
  const [conteo, setConteo] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [aumento, setAumento] = useState(0)
  function check() {
    if (pw === "animales") {
      navigate("/final-hXkojsXupcvXazxtqX")
    } else {
      alert("Contraseña incorrecta")
      setPw("")
    }
  }
  function handleClick(element,index){
    setConteo(conteo + 1)
    if(aumento == imagenes[index]){
      setAumento(aumento + 1)
      
    }
    else{
      setAumento(0)
    }

    if(conteo > 4){
      setConteo(5)
    }

    if(aumento == 5){
      setIsActive(true)
    }

  }

  function reset(){
    setConteo(0)
    setAumento(0)
  }

  return (
    <>
      <h3 className='nivel'>{aumento}</h3>
      <div className='game'>
        { !isActive && <a href='https://i.postimg.cc/QhRbXdPR/nivel6.png' target='_blank' className='pistaDescarga' ><div className='energy' style={{background: colors[conteo] }} >Empieza con el avestruz </div></a>}
        <h1>Esta contraseña te la regalo 😉 </h1>
        <p>Solo falta algo...</p>
        <div className='center'>
          <button className='btn' style={{width:250}} onClick={reset} >Reiniciar</button>
        </div>
        <div className='containernivel6'>
          {
            imagenes.map((element,index)=>{
              return <img src={links[index]} alt="" onClick={()=>handleClick(element,index)} />
            })
          }
        </div>
        <input className='input' placeholder='Escribe aquí la contraseña' value={pw} onChange={(e) => setPw(e.target.value)} />
        {isActive && <button className='btn' onClick={check} >Comprobar</button>}
      </div>
    </>
  )
}

export default Nivel6
