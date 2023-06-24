/*

Build an app where clicking the "Add" button adds progress bars to the page. The progress bars fill up gradually as soon as they are shown.

Requirements:

Clicking on the "Add" button adds a progress bar to the page.
Each progress bar start filling up smoothly as soon as they're added
Each bar takes approximately 2000ms to completely fill up.

*/

import { useEffect, useState } from "react";
import "./ProgressBar.css";

export const ProgressBar = () => {
  const [startTransition, setStartTransition] = useState(false);

  useEffect(() => {
    if (startTransition) {
      return;
    }

    setStartTransition(true);
  });

  return (
    <div className="bar">
      <div
        className={`bar-content ${startTransition ? "bar-content-filled" : ""}`}
      />
    </div>
  );
};
