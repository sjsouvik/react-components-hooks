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
