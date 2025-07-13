import { useState } from 'react'

import './App.css'

function App() {
  const [turn, setTurn] = useState('X')

  

  const handleClick = (e) =>{
    if(e.target.innerText){
      return;
    }

    e.target.innerText=turn

    if(turn=='X'){
      setTurn('O')
    }
    if(turn=='O'){
      setTurn('X')
    }
  }

  return (
    <>
      <div>
        <h1>Tik-Tak-Toe</h1>
        <div className='board'>
          <button id="1" onClick={handleClick} className='cell'></button>
          <button id="2" onClick={handleClick} className='cell'></button>
          <button id="3" onClick={handleClick} className='cell'></button>

          <button id="4" onClick={handleClick} className='cell'></button>
          <button id="5" onClick={handleClick} className='cell'></button>
          <button id="6" onClick={handleClick} className='cell'></button>

          <button id="7" onClick={handleClick} className='cell'></button>
          <button id="8" onClick={handleClick} className='cell'></button>
          <button id="9" onClick={handleClick} className='cell'></button>

        </div>
      </div>
    </>
  )
}

export default App
