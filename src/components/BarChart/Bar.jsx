import React from "react";
import "./Bar.css";

export const Bar = (props) => {
  const { colour, name, ticketCount, height } = props;

  return (
    <li
      className="vertical-bar"
      style={{
        backgroundColor: colour,
        height: `${height}%`,
      }}
    >
      <div className="tooltip">
        {name} - {ticketCount}
      </div>
    </li>
  );
};
