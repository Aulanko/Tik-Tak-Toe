import { useEffect, useState } from 'react'

import './App.css'

function App()  {
  const [turn, setTurn] = useState('X')
  const [XBoxes, setXBoxes] = useState([])
  const [OBoxes, setOBoxes] = useState([])
  const  [draw, setDraw] = useState(false)
  const [winned, setWinned] = useState(false)
  const  [XWins, setXWins] = useState(false)
  const [OWins, setOWins] = useState(false)
  const [winningPattern, setWinningPattern] = useState([])

  const whatToWin  = [
    [1,2,3],[4,5,6],[7,8,9],
    [1,4,7],[2,5,8],[3,6,9],
    [1,5,9],[3,5,7]
  ]



  const checkWin =(playerMoves) =>{
    const pattern = whatToWin.find(pattern =>
      pattern.every(pos => playerMoves.includes(pos))
    );
    if(pattern){
      setWinningPattern(pattern)
      return true
    }
    else{
      return false;
    }
    }
  
  const checkDraw = () => {
  return XBoxes.length + OBoxes.length === 9 && !winned
}

  useEffect(()=>{
    if(checkWin(XBoxes)){
      setXWins(true)
      setWinned(true)
    } else if(checkWin(OBoxes)){
      setOWins(true)
      setWinned(true)
    }
    else if(checkDraw()){
      setDraw(true)
    }
  },[XBoxes, OBoxes])

  const handleClick = (e) =>{
    if(e.target.innerText || winned){
      return;
    }
  
  


    e.target.innerText=turn
    const cellId = parseInt(e.target.id)

    if(turn=='X'){
      setXBoxes([...XBoxes, cellId])
      e.target.style.color = '#213547'
      e.target.style.backgroundColor = '#FF894F'
      setTurn('O')
      
    }
    if(turn=='O'){
      setOBoxes([...OBoxes,  cellId])
      e.target.style.color ='white'
      e.target.style.backgroundColor = '#34699A'
      
      
      
      setTurn('X')
    }
  }

  const handleReset = () =>{
    setTurn('X')
    setXBoxes([])
    setOBoxes([])
    setDraw(false)
    setWinned(false)
    setXWins(false)
    setOWins(false)
    const allBoxes = document.querySelectorAll(".cell")
    allBoxes.forEach(box => box.innerText = '')
    allBoxes.forEach(box => box.style.backgroundColor='')
  }

  const renderWinLine =() =>{
    if(!winningPattern.length){
      return null;
    }

    const firstCell = document.getElementById(winningPattern[0]);
    const lastCell = document.getElementById(winningPattern[winningPattern.length-1]);

    const firstRect = firstCell.getBoundingClientRect();
    const lastRect = lastCell.getBoundingClientRect();

    const length = Math.sqrt(
      Math.pow(lastRect.left-firstRect.left,2) + 
      Math.pow(lastRect.top - firstRect.top,2) 
      
    );

    const angle = Math.atan2(
      lastRect.top -firstRect.top,
      lastRect.left - firstRect.left
    ) *180/Math.PI;

    const left = firstRect.left + firstRect.width/2;
    const top = firstRect.top + firstRect.height/2;

    return (
    <div 
      className="win-line"
      style={{
        '--angle': `${angle}deg`,
        left: `${left}px`,
        top: `${top}px`,
        width: `${length}px`,
      }}
    />
  );


  }

  return (
    <>
      <div>
        <h1>Tik-Tac-Toe!</h1>
        
         <h2>
          {
            XWins? "Winner: X":
            OWins? "Winner: O":
            draw? "It's a draw":
            `Next player turn: ${turn}`

          }
      </h2>
          
      
      
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

          {winned&& renderWinLine()}

        </div>

        
        <button className='reset-btn' id='reset-btn' onClick={handleReset}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front text"> Reset
          </span>
        </button>
      </div>
    </>
  )
}

export default App
