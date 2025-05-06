import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Nivel8(){

    const [intentos, setIntentos] = useState(20)
    const [pw0, setPw0] = useState("")
    const navigate = useNavigate()
    const [codigo, setCodigo] = useState("")
    const [separado, setSeparado] = useState(["","","",""])

  function check() {
    if (pw0 === "3568") {
      navigate("/") // Redirige a Nivel 1
    } else {
      alert("Contraseña incorrecta")
      setPw0("")
    }
    }

    const handleCodigo = (valor) =>{
        setCodigo(valor)
        const array = valor.split("")
        setSeparado(array)
    }

    const comparar = () =>{
        //aqui va la comparacion de letras
    }

    return(
        <>
        <h3 className="nivel">¡Recuerda usar sólo números en la máquina!</h3>
        <div className="game" >
            <h1>Este nivel sigue en fase de desarrollo, Aunque intentes algo, no funcionará</h1>
            <h4>¡Felicidades por llegar hasta aquí! </h4>

            <div className='maquina' >
                <div className='numeross'>
                    <span>{separado[0]}</span> <span>{separado[1]}</span> <span>{separado[2]}</span> <span>{separado[3]}</span>
                </div>
                <span> <input type="text" className='input' maxLength={4} value={codigo} onChange={(e)=>handleCodigo(e.target.value)} /> <button className='btn'onClick={comparar} >Intentar</button> </span>
            </div>

            <input className='input' placeholder='Escribe la contraseña...' value={pw0} onChange={(e) => setPw0(e.target.value)} />
            <button className='btn' onClick={check}>Comprobar</button>
        </div>
        </>
    )
}
export default Nivel8