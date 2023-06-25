import { useState } from "react";
import { ProgressBar } from "./ProgressBar";

const CONCURRENCY_LIMIT = 3;
const INITIAL_BAR = [0];

/*

Note that we need to use the callback form of setBars, which receives the updated 
bars progression value as the parameter. This is necessary because the setBars callback's 
closure will be referencing a stale version of progression and the callback form of 
setBars will provide us with the most updated progression value.

*/

export const ProgressBarsWrapperIV = () => {
  const [bars, setBars] = useState(INITIAL_BAR);
  const [intervalId, setIntervalId] = useState(null);

  const startProgressHandler = () => {
    const id = setInterval(() => {
      setBars((oldBars) => {
        let i = 0;
        return oldBars.map((bar) => {
          if (bar < 100 && i++ < CONCURRENCY_LIMIT) {
            return bar + 0.5;
          }

          return bar;
        });
      });
    }, 10);

    setIntervalId(id);
  };

  const stopProgressHandler = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetHandler = () => {
    stopProgressHandler();
    setBars(INITIAL_BAR);
  };

  const isProgressing = intervalId !== null;

  return (
    <>
      <h2>Progress bars IV</h2>
      <div className="buttons">
        <button onClick={() => setBars((oldBars) => [...oldBars, 0])}>
          Add
        </button>
        <button
          onClick={isProgressing ? stopProgressHandler : startProgressHandler}
        >
          {isProgressing ? "Pause" : "Start"}
        </button>
        <button onClick={resetHandler}>Reset</button>
      </div>
      <section className="bars">
        {bars.map((progress, index) => (
          <ProgressBar key={index} progress={progress} />
        ))}
      </section>
      <pre>{JSON.stringify({ isProgressing, progression: bars }, null, 2)}</pre>
    </>
  );
};
