import { useState } from "react";
import { ProgressBar } from "./ProgressBar";

export const ProgressBarsWrapper = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Progress bars</h2>
      <button onClick={() => setCount(count + 1)}>Add a progress bar</button>
      <section className="bars">
        {Array(count)
          .fill(null)
          .map((_, index) => (
            <ProgressBar key={index} />
          ))}
      </section>
    </>
  );
};
