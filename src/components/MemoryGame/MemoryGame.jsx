/*

Build a memory game where the player needs to match pairs of cards.

Requirements:

- Display a grid of faced-down cards on the screen, with each card representing a different item or image. You can use emojis as the image, a list of emojis has been provided.
- The grid should consist of an equal number of cards to make pairs.
- When a player clicks on a card, it should flip over and reveal its image.
- Allow the player to select two cards at a time.
- If the two selected cards have the same image, it's a match and they should remain face-up.
- If the two selected cards have different images and the player
  - Selects other cards, the two selected cards should flip back.
  - Do nothing, the two selected cards should flip back facedown after a short delay.
- When all pairs have been successfully matched, end the game and display a "Play again" button.

*/

import { useState, useRef, useEffect } from "react";
import { generateEmojis } from "./utils";
import "./MemoryGame.css";

export const MemoryGame = (props) => {
  const { rows = 4, cols = 4, matchCount = 2, waitTime = 2000 } = props;
  const totalCells = rows * cols;

  const [emojis, setEmojis] = useState(generateEmojis(totalCells, matchCount));
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const timer = useRef(null);

  if (matchCount < 2) {
    throw new Error("Match count has to be >= 2");
  }

  if (totalCells % matchCount !== 0) {
    throw new Error(
      `Can't divide total cells of ${totalCells} by ${matchCount}`
    );
  }

  const clickHandler = (index) => {
    let currentFlipped = flipped;

    // if player flips more cards than the given matchCount of flipped unmatched cards, flips back the previously flipped ones
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
      currentFlipped = [];
    }

    const updatedFlipped = [...currentFlipped, index];
    setFlipped(updatedFlipped);

    if (updatedFlipped.length < matchCount) {
      return;
    }

    const areAllFlippedSame = updatedFlipped.every(
      (cardIndex) => emojis[updatedFlipped[0]] === emojis[cardIndex]
    );

    if (areAllFlippedSame) {
      setMatched((matched) => [...matched, emojis[updatedFlipped[0]]]);
      setFlipped([]);
    }

    // if no new cards are flipped, flip back all currently flipped cards
    const timerId = setTimeout(() => {
      setFlipped([]);
      timer.current = null;
    }, waitTime);

    timer.current = timerId;
  };

  const resetGame = () => {
    timer.current = null;
    setMatched([]);
    setFlipped([]);
    setEmojis(generateEmojis(totalCells, matchCount));
  };

  useEffect(() => {
    resetGame();
  }, [rows, cols, matchCount]);

  const gameCompleted = matched.length * matchCount === totalCells;

  return (
    <>
      <h2>Memory game</h2>
      <div className="game-container">
        <section
          className="game-board"
          style={{
            gridTemplateRows: `repeat(${rows}, var(--size))`,
            gridTemplateColumns: `repeat(${cols}, var(--size))`,
          }}
        >
          {emojis.map((emoji, index) => {
            const isMatched = matched.includes(emoji);
            const isFlipped = flipped.includes(index);

            return (
              <button
                key={index}
                className={`card ${isMatched ? "revealed-card" : ""}`}
                onClick={() => clickHandler(index)}
                disabled={isMatched || isFlipped}
              >
                {(isFlipped || isMatched) && emoji}
              </button>
            );
          })}
        </section>
        <section>
          {gameCompleted && <button onClick={resetGame}>Play again</button>}
        </section>
      </div>
    </>
  );
};
