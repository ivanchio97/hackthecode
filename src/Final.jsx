// Nivel1.js
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Final() {

 
  return (
    <>
      <h3 className='nivel'> 0 1 0 0 1 </h3>
      <div className='game'>
        <h1>Si estás leyendo esto, quiere decir que has llegado al final del juego.</h1>
        <h2>¡Has hecho un excelente trabajo, eres muy habil!</h2>
        <br />
        <p>Se están diseñando más niveles, !Vuelve pronto!</p>
      </div>
    </>
  )
}

export default Final
