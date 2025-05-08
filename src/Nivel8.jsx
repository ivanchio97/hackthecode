import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Nivel8(){

    const [intentos, setIntentos] = useState(5)
    const [pw0, setPw0] = useState("")
    const navigate = useNavigate()
    const [codigo, setCodigo] = useState("")
    const [separado, setSeparado] = useState(["","","",""])
    const  templatecolors = ["gray","gray","gray","gray"]
    const [colores, setColores] = useState(templatecolors)
    const [numerotexto, setNumerotexto] = useState('0000')
    const [numero, setNumero] = useState(() => {
        const random = Math.floor(Math.random() * 10000);
        const formateo = random.toString().padStart(4, '0');
        setNumerotexto(formateo)
        return formateo.split('');
      });
    const [bloqueo, setBloqueo] = useState(false)

  function check() {
    if (pw0 === numerotexto) {
      navigate("/final-hXkojsXupcvXazxtqX")
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

    const comparar = () => {
        const nuevoColor = separado.map((elemento, index) => {
          if (elemento === numero[index]) {
            return "green";
          } else if (numero.includes(elemento)) {
            return "orange";
          } else {
            return "gray";
          }
        });
        setIntentos((prev)=>prev-1)
        setColores(nuevoColor);

        if(intentos < 2) setBloqueo(true)

      };

      const reiniciar = () =>{
        setBloqueo(false)
        setIntentos(7)
        setCodigo('')
        const random = Math.floor(Math.random() * 10000);
        const formateo = random.toString().padStart(4, '0');
        setNumerotexto(formateo)
        setNumero(formateo.split(''))
        
      }

    return(
        <>
        <h3 className="nivel">¡Recuerda usar sólo números en la máquina!</h3>
        <div className="game" >
            <h1>Intentos restantes: {intentos}</h1>
            <div className='maquina' >
                <div className='numeross'>
                    {
                        separado.map((elemento,index)=>{
                            return <span style={{backgroundColor: colores[index]}} >{separado[index]}</span>
                        })
                    } 
                </div>
                {bloqueo && <span> La máquina se ha bloqueado. <button className='btn' onClick={reiniciar} >Reiniciar</button> </span> }
                { !bloqueo && <span> <input type="text" className='input' maxLength={4} value={codigo} onChange={(e)=>handleCodigo(e.target.value)} /> <button className='btn' onClick={comparar} >Intentar</button> </span>}
            </div>

            <input className='input' placeholder='Escribe la contraseña...' value={pw0} onChange={(e) => setPw0(e.target.value)} />
            <button className='btn' onClick={check}>Comprobar</button>
        </div>
        </>
    )
}
export default Nivel8