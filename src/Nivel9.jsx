// Nivel9.js
import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Nivel9() {
  const [pw, setPw] = useState("")
  const [position, setPosition] = useState(0)
  const [correr, setCorrer] = useState(false)
  const pisoRef = useRef(null) // referencia al piso en el DOM
  const [numrand, setNumrand] = useState(Math.floor(Math.random()*10000) + 100000)
  const navigate = useNavigate()

  function check() {
    if (pw === numrand) {
      navigate("/final-hXkojsXupcvXazxtqX") 
    } else {
      alert("Contraseña incorrecta")
      setPw("")
    }
  }
  function reiniciar(){
    setPosition(0)
    setCorrer(false)
  }

  useEffect(() => {
    if (correr) {
      let movimiento = setInterval(() => {
        setPosition((prev) => {
          const nuevo = prev + 5

          // medir ancho real del piso en el DOM (no en el estado)
          const anchoReal = pisoRef.current?.getBoundingClientRect().width || 0

          if (nuevo > anchoReal && anchoReal < 660) {
            alert("¡Se cayó!")
            clearInterval(movimiento)
            reiniciar();
          }
          else if(nuevo > 660 && anchoReal > 660){
            alert("¡Muy bien!, aquí tienes la contraseña! ")
            clearInterval(movimiento)
            setPw(numrand)
          }
          return nuevo
        })
      }, 80)

      // limpiar intervalo si el componente se desmonta
      return () => clearInterval(movimiento)
    }
  }, [correr])

  return (
    <>
      <h3 className='nivel'> Nivel 9 </h3>
      <div className='game'>
        <h1>¡Ayúdalo a cruzar!</h1>
        <div className='nivel9'>
          <p
            className='personaje'
            style={{ left: position }}
          >
            <a
              href="https://developer.mozilla.org/es/docs/Web/CSS/width"
              target='_blank'
              rel="noreferrer"
            >
              😎
            </a>
          </p>
          <div className='muro1'>muro1</div>
          <div className='muro2'>muro2</div>
          {/* piso editable con CSS */}
          <div className='piso' ref={pisoRef}>
            piso
          </div>
        </div>

        <input
          className='input'
          placeholder='Escribe contraseña'
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <button className='btn' onClick={check}>Comprobar</button>
        <button className='btn cruzar' onClick={() => setCorrer(true)}>
          Cruzar
        </button>
      </div>
    </>
  )
}

export default Nivel9
