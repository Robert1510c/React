import Player from "./Player"
import GameBoard from "./GameBoard"
import Log from "./Log"
import { useState } from "react"

function App() {
  const [activePlayer, setActivePlayer]= useState("X");
  const [gameTurns, setGameTurns]= useState([]);


  function handleSelectSquare(rowIndex, colIndex){
    setActivePlayer((curActivePlayer)=> curActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns(prevTurns=> {
      let currentPlayer = 'X';
      if(prevTurns.length>0 && prevTurns[0].player==='X'){
        currentPlayer='O'
      }
      const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player:currentPlayer}, ...prevTurns];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="MissX" symbol="X" isActive={activePlayer==='X'}></Player>
          <Player initialName="MisterO" symbol="O" isActive={activePlayer==='O'}></Player>
        </ol>
          <GameBoard turns={gameTurns} onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}></GameBoard>
      </div>
      <Log></Log>
    </main>
  )
}

export default App
