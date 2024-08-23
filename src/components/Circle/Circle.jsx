import React from "react";
import "./Circle.css";

// asked in Surveymonkey
export const Circle = ({ depth = 3, width = 300 }) => {
  if (depth === 0) {
    return null;
  }

  return (
    <div
      className="circle"
      style={{ width: `${width}px`, height: `${width}px` }}
    >
      <Circle depth={depth - 1} width={width - 100} />
    </div>
  );
};
