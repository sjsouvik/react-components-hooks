/*

Build a tic-tac-toe game that is playable by two players.

Requirements:

- Players can take turns to place an X or a O on the board.
- A player wins if three of their marks are in a horizontal, vertical, or diagonal row.
- Display the current game status at the top: whose turn it is, winner (if any), or draw.
- Add a "Reset" button to allow the game to be restarted at any time.

*/

import { useState } from "react";
import { Cell } from "./Cell";

import "./TicTacToe.css";

const cellsToCheck = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const determineWinner = (cells) => {
  for (let i = 0; i < cellsToCheck.length; i++) {
    const [a, b, c] = cellsToCheck[i];

    if (cells[a] !== null && cells[a] === cells[b] && cells[b] === cells[c]) {
      return cells[a];
    }
  }

  return null;
};

/*

- The `aria-label` attribute is set on each cell button. It describes the action that 
will be performed when the cell is clicked, indicating which cell will be marked 
as 'X' or 'O'.

- The `aria-live` attribute is set to "polite" on the <div> element containing the status 
message. It indicates that the content of the element may be updated dynamically and 
should be announced by screen readers.

- The <span> element inside each cell button has the `aria-hidden` attribute set to true. 
This hides the cell mark (X or O) from screen readers, as the mark is already announced 
using the `aria-label` attribute on the button itself. This avoids redundant or confusing 
information for users of assistive technologies.

*/

const INITIALIZE_BOARD = Array(9).fill(null);

export const TicTacToe = () => {
  const [cells, setCells] = useState(INITIALIZE_BOARD);
  const [xPlaying, setXPlaying] = useState(true);

  const winner = determineWinner(cells);
  const turn = xPlaying ? "X" : "O";

  const clickHandler = (cellIndex) => {
    const nextMove = turn;
    const updatedCells = cells.map((cell, index) =>
      index === cellIndex ? nextMove : cell
    );
    setCells(updatedCells);
    setXPlaying((prevValue) => !prevValue);
  };

  const resetHandler = () => {
    if (!winner) {
      const resetConfirm = confirm("Are you sure you want to reset the game?");
      if (!resetConfirm) {
        return;
      }
    }

    setCells(INITIALIZE_BOARD);
    setXPlaying(true);
  };

  const getStatusMessage = () => {
    if (winner) {
      return `Player ${winner} won the game.`;
    }

    if (!cells.includes(null)) {
      return "It's a draw";
    }

    return `Turn of player ${turn}`;
  };

  return (
    <>
      <h2>Tic Tac Toe</h2>
      <div className="tic-tac-toe">
        <p aria-live="polite">{getStatusMessage()}</p>
        <section className="board">
          {cells.map((cell, index) => (
            <Cell
              key={index}
              mark={cell}
              turn={turn}
              disabled={cells[index] || winner}
              clickHandler={() => clickHandler(index)}
            />
          ))}
        </section>
        <section>
          <button onClick={resetHandler}>Reset</button>
        </section>
      </div>
    </>
  );
};
