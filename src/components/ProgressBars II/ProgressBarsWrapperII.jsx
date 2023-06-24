import { useState } from "react";
import { ProgressBar } from "./ProgressBar";

export const ProgressBarsWrapperII = () => {
  const [count, setCount] = useState(0);
  const [completedIndex, setCompletedIndex] = useState(0);

  return (
    <>
      <h2>Progress bars II</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <section className="bars">
        {Array(count)
          .fill(null)
          .map((_, index) => (
            <ProgressBar
              key={index}
              isEmpty={index > completedIndex}
              onComplete={() => setCompletedIndex(completedIndex + 1)}
            />
          ))}
      </section>
    </>
  );
};
