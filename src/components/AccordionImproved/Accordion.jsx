import { useId, useState } from "react";
import {
  getAccordionHeaderId,
  getAccordionPanelId,
  getAccordionIndex,
  focusAccordion,
} from "./utils";
import "./Accordion.css";

/*

`getAccordionHeaderId` generates a unique ID string to use as the value of the id attribute of 
the header element. This ID will be used as the value of the `aria-labelledby` attribute of 
the corresponding accordion panel.

`getAccordionPanelId` generates a unique ID string to use as the value of the id attribute of 
accordion panel. This ID will be used as the value of the `aria-controls` attribute of the 
corresponding accordion header.

Since there can be multiple Accordion component instances on the page and we cannot guarantee 
that the accordion section values will be globally unique, each Accordion instance needs to 
have a unique identifier. The `useId` React hook can be used to generate unique ID for each 
Accordion instance. The final ID string will be a concatenation of the Accordion instance's ID, 
the item title, and whether it's a header or a panel.

*/

export const Accordion = (props) => {
  const { sections } = props;

  const [expandedOnes, setExpandedOnces] = useState(new Set());
  const accordionId = useId();

  const clickHandler = (title) => {
    const updatedSections = new Set(expandedOnes);
    updatedSections.has(title)
      ? updatedSections.delete(title)
      : updatedSections.add(title);
    setExpandedOnces(updatedSections);
  };

  const keyDownHandler = (e) => {
    // We can get the currently focused DOM element on the page with document.activeElement
    const activeAccordionTitle = document.activeElement.getAttribute(
      "data-accordion-title"
    );

    // respond only if an accordion title is in focus.
    if (activeAccordionTitle === null) {
      return;
    }

    // read to know the differences between event.key vs event.code - https://javascript.info/keyboard-events
    switch (e.code) {
      case "ArrowUp": {
        const indexOfAccordion = getAccordionIndex(
          sections,
          activeAccordionTitle
        );
        const prevIndex =
          (indexOfAccordion - 1 + sections.length) % sections.length;
        focusAccordion(sections, accordionId, prevIndex);
        break;
      }

      case "ArrowDown": {
        const indexOfAccordion = getAccordionIndex(
          sections,
          activeAccordionTitle
        );
        const nextIndex = (indexOfAccordion + 1) % sections.length;
        focusAccordion(sections, accordionId, nextIndex);
        break;
      }

      case "Home": {
        focusAccordion(sections, accordionId, 0);
        break;
      }

      case "End": {
        focusAccordion(sections, accordionId, sections.length - 1);
        break;
      }
    }
  };

  return (
    <div className="flex-col" onKeyDown={keyDownHandler}>
      {sections.map((section) => {
        const { title, content } = section;
        const isExpanded = expandedOnes.has(section.title);
        const accordionHeaderId = getAccordionHeaderId(accordionId, title);
        const accordionPanelId = getAccordionPanelId(accordionId, title);

        return (
          <div className="accordion-item" key={title}>
            <button
              className="accordion-title"
              onClick={() => clickHandler(title)}
              aria-expanded={isExpanded}
              id={accordionHeaderId}
              data-accordion-title={title}
              aria-controls={accordionPanelId}
            >
              <span>{title}</span>
              <span
                aria-hidden={true}
                className={`accordion-icon ${
                  isExpanded ? "accordion-icon--rotated" : ""
                }`}
              />
            </button>
            <div
              className="accordion-content"
              id={accordionPanelId}
              aria-labelledby={accordionHeaderId}
              role="region"
              hidden={!isExpanded}
            >
              {content}
            </div>
          </div>
        );
      })}
    </div>
  );
};
