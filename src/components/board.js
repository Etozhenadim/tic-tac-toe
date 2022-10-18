import React from "react";
import { Square } from "./square";

export function Board(props) {
  const renderSquare = (i) => {
    if(i>=0){
      return (
        <Square
          value={props.squares[i]}
          onClick={() => props.onClick(i)}
        />
      
    );
    }
  }

  return(
    <div>
      <div className="board-row">
        {renderSquare(-1)}
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
  </div>
  )
}

