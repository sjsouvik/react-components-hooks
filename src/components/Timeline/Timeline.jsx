import React from "react";
import "./Timeline.css";

const data = [
  {
    id: "1",
    description: "Eat ",
  },
  {
    id: "2",
    description: "Code",
  },
  {
    id: "3",
    description: "Sleep",
  },
  {
    id: "3",
    description: "Repeat",
  },
];

export const TimelineDot = ({ style }) => {
  return <div className="timeline-dot" style={style} />;
};

export const TimelineConnector = ({ style }) => {
  return <div className="timeline-connector" style={style} />;
};

export const TimelineItem = (props) => {
  const { item, itemIndex } = props;

  const isLastItem = itemIndex === data.length - 1;

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TimelineDot />
        {!isLastItem && <TimelineConnector />}
      </div>
      <div className="timeline-content">{item.description}</div>
    </div>
  );
};

export const Timeline = () => {
  return (
    <>
      <h2>Timeline</h2>
      <section style={{ display: "flex", flexDirection: "column" }}>
        {data.map((item, index) => {
          return <TimelineItem key={item.id} itemIndex={index} item={item} />;
        })}
      </section>
    </>
  );
};
