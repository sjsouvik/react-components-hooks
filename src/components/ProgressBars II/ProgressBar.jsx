/*

Build an app where clicking the "Add" button adds progress bars to the page. The progress bars fill up in series, aka the second bar only starts filling up after the first bar is completely filled.

Requirements:

Clicking on the "Add" button adds a progress bar to the page.
The progress bars fill up gradually in sequence, one at a time. i.e. the second progress bar will only starts filling up after the first progress bar is completely filled up.
Each bar takes approximately 2000ms to completely fill up.

*/

import { useEffect, useState } from "react";
import "../ProgressBars/ProgressBar.css";

export const ProgressBar = (props) => {
  const { isEmpty, onComplete } = props;
  const [startTransition, setStartTransition] = useState(false);

  useEffect(() => {
    if (isEmpty || startTransition) {
      return;
    }

    setStartTransition(true);
  });

  return (
    <div className="bar">
      <div
        className={`bar-content ${startTransition ? "bar-content-filled" : ""}`}
        onTransitionEnd={onComplete} // `onTransitionEnd` event has been used to detect the completion of CSS transition
      />
    </div>
  );
};
