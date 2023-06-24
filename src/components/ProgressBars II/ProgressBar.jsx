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
