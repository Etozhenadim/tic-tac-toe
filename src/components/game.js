import React, {useCallback, useState} from "react";
import { calculateWinner } from '../helpers';
import { Board } from "./board";


export function Game(props){
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = useCallback((i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);        
    setXIsNext(!xIsNext);
  }, [history, stepNumber, winner, xIsNext]);

  const jumpTo=(step)=> {
    setStepNumber(step)
    setXIsNext((step % 2) === 0)
  }
  
  
  const renderMoves = () => (
    history.map((_step, move) => {
        const destination = move ? `Go to move#${move}` : 'Go to start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{destination}</button>
            </li>
        )
    })        
)


  return(
      <div className="game">
      <div className="game-board">
      <Board squares={history[stepNumber]} onClick={handleClick} />
      </div>
      <div>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
        </div>
    </div>
  );
}