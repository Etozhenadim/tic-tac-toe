import React from "react";

export const Square = React.memo(function Square({onClick, value}){
    return (
      <button className="square" onClick={onClick}>
        {value}
      </button>
    );
  }
)