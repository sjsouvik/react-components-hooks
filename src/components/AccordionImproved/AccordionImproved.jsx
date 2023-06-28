/*

Build an Accordion component that displays a list of vertically stacked sections that each contain a title and content 
snippet. Some HTML is provided for you as example contents along with a chevron icon.

Requirements:

- By default, all sections are collapsed and are hidden from view.
- Clicking on a section title toggles the contents.
    - If the section is collapsed, the section will be expanded and the contents will be displayed.
    - If the section is expanded, the section will be collapsed and the contents will be hidden.
- The sections are independent of each other.

The ARIA Authoring Practices Guide has a long list of guidelines https://www.w3.org/WAI/ARIA/apg/patterns/accordion/ for the ARIA roles, states, and properties to 
add to the various elements of an accordion. We should implement the following (improvised) guidelines for this question:

- The title of each accordion header is contained in a <button> element.
- If the accordion panel associated with an accordion header is visible, the header button element has `aria-expanded` set to true. If the panel is not visible, `aria-expanded` is set to false.
- The accordion header button element has `aria-controls` set to the ID of the element containing the accordion panel content.
- Each element that serves as a container for panel content has role region and `aria-labelledby` with a value that refers to the button that controls display of the panel.

We'll be following a modified subset of the necessary keyboard interactions for accordions https://www.w3.org/WAI/ARIA/apg/patterns/accordion/:

- When Enter or Space is hit and focus is on the accordion header
  - For a collapsed panel, expands the associated panel.
  - For an expanded panel, collapses the associated panel.

- Tab: Moves focus to the next focusable element; all focusable elements in the accordion are included in the page Tab sequence.
- Shift + Tab: Moves focus to the previous focusable element; all focusable elements in the accordion are included in the page Tab sequence.
- Down Arrow: If focus is on an accordion header, moves focus to the next accordion header. If focus is on the last accordion header, either does nothing or moves focus to the first accordion header.
- Up Arrow: If focus is on an accordion header, moves focus to the previous accordion header. If focus is on the first accordion header, either does nothing or moves focus to the last accordion header.
- Home: When focus is on an accordion header, moves focus to the first accordion header.
- End: When focus is on an accordion header, moves focus to the last accordion header.

*/

import { Accordion } from "./Accordion";
import { sections } from "./data";

export const AccordionImproved = () => {
  return (
    <>
      <h2>Improved accordion</h2>
      <Accordion sections={sections} />
    </>
  );
};
