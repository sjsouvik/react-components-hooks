import { useState } from "react";
import "./Accordion.css";

export const AccordionItem = (props) => {
  const { label, active, handleClick, children } = props;

  return (
    <div className={`accordion mt-1 ${active ? "active" : ""}`}>
      <button className="question" onClick={handleClick}>
        {label}
      </button>
      <div className="answer">{children}</div>
    </div>
  );
};

const Accordion = (props) => {
  const { defaultActiveId, children } = props;
  const [activeItemId, setActiveItemId] = useState(defaultActiveId);

  const updateActiveItem = (itemId) => {
    if (itemId === activeItemId) {
      setActiveItemId("");
      return;
    }

    setActiveItemId(itemId);
  };

  const accordionItems = children.filter(
    (item) => item.type.name === "AccordionItem"
  );

  return (
    <>
      {accordionItems.map(({ props }) => (
        <AccordionItem
          key={props.id}
          active={props.id === activeItemId}
          handleClick={() => updateActiveItem(props.id)}
          {...props}
        />
      ))}
    </>
  );
};

export default Accordion;
