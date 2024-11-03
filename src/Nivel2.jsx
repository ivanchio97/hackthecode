import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Nivel2() {

  const [pw, setPw] = useState("")
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const[letra,setLetra] = useState("X")
  const [total, setTotal] = useState(0)
  const numbers = [0,2,4,8,16]
  const navigate = useNavigate()

  function check(){
    if (pw === "flor") {
      navigate("/nivel3-hXkojsXupcvXazxtqX") 
    } else {
      alert("Contraseña incorrecta.")
      setPw("")
    }
  }

  function handleClick(value){
    let ran = Math.floor(Math.random() * 5);
    let newNum;

    // Obtenemos un nuevo valor aleatorio
    if (value === 1) {
        newNum = numbers[ran];
        setNum1(newNum);
    } else {
        newNum = numbers[ran];
        setNum2(newNum);
    }

    // Calculamos el nuevo total con los valores actualizados
    const newTotal = (value === 1 ? newNum * num2 : num1 * newNum);
    setTotal(newTotal);

    if(newTotal == 32){
      setLetra("R")
    }
    else if(newTotal == 16){
      setLetra("O")
    }
    else if(newTotal == 8){
      setLetra("L")
    }
    else if(newTotal == 4){
      setLetra("F")
    }
    else{
      setLetra("X")
    }

  }
  
 
  return (
    <>
      <h3 className='nivel'> Nivel 2 </h3>
      <div className='game'>
        <h1>Facil...¿No?</h1>
        <p>Veamos cómo te va ahora.  </p>
        <div className='containernivel2'>
          <button onClick={()=>handleClick(1)}>{num1}</button>
          <button onClick={()=>handleClick(2)}>{num2}</button>
          <button>{letra}</button>
        </div>
        <input className='input' placeholder='Escribe la contraseña...' value={pw} onChange={(e)=>{setPw(e.target.value)}} />

        <button className='btn' onClick={check}>Comprobar</button>
      </div>
    </>
  )

}
export default Nivel2