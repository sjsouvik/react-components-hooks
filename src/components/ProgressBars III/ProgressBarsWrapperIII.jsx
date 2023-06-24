/*

In Progress Bars II, we built progress bars which fill up in sequence, one at a time. In this question, we'll build progress bars where multiple of them are filling up concurrently, up to a limit of 3. The fourth progress bar only starts filling up after the third one is full.

Requirements:

Clicking on the "Add" button adds a progress bar to the page.
The progress bars fill up gradually in parallel, up to a limit of 3 concurrent bars filling up. i.e. the fourth progress bar will only start filling up after the third progress bar is completely filled up.
Each bar takes approximately 2000ms to completely fill up.

Hint: Realize that changing the concurrency limit to 1 reduces this question into the simpler Progress Bars II question. The solution to this question only requires a one-line change of the solution to Progress Bars II.

*/

import { useState } from "react";
import { ProgressBar } from "../ProgressBars II/ProgressBar";

const CONCURRENCY_LIMIT = 3;

/*

With this change `isEmpty={index >= completedIndex + MAX}`, up to 3 non-full bars will have <ProgressBar isEmpty={false} /> which provides the concurrency needed to solve this question.

*/

export const ProgressBarsWrapperIII = () => {
  const [count, setCount] = useState(0);
  const [completedIndex, setCompletedIndex] = useState(0);

  return (
    <>
      <h2>Progress bars III</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <section className="bars">
        {Array(count)
          .fill(null)
          .map((_, index) => (
            <ProgressBar
              key={index}
              isEmpty={index >= completedIndex + CONCURRENCY_LIMIT}
              onComplete={() => setCompletedIndex(completedIndex + 1)}
            />
          ))}
      </section>
    </>
  );
};
