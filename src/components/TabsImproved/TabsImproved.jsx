/*

Build a tabs component that displays one panel of content at a time depending on the active tab element. Some HTML is provided for you as example contents.

Requirements:

- Clicking on a tab makes it the active tab. Add a visual indication (e.g. using blue text color) for the active tab to differentiate it from the non-active tabs.
- At all times, only one panel's contents should be displayed — the one corresponding to the active tab's.

The ARIA Authoring Practices Guide has a long list of guidelines https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/ 
for the ARIA roles, states, and properties to add to the various elements of a tabs component. We should implement the 
following guidelines for this question:

- The element that serves as the container for the set of tabs has role `tablist`.
- Each element that serves as a tab has role `tab` and is contained within the element with role `tablist`.
- Each element that contains the content panel for a tab has role `tabpanel`.
- Each element with role `tab` has the property `aria-controls` referring to its associated tabpanel element.
- The active tab element has the state `aria-selected` set to `true` and all other tab elements have it set to `false`.
- Each element with role `tabpanel` has the property `aria-labelledby` referring to its associated tab element.

It is also important that we use a <button> element to build the tabs as they need to be focusable and interactive.


We'll be following a modified subset of the necessary keyboard interactions for Tabs https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/. 
Note that the tabs component we're building is activated automatically on focus, so the respective tabpanel contents 
are shown as soon as the focus changes to a different tab.

- When Tab key is pressed:
  - When focus moves into the tab list, places focus on the active tab element.
  - When the tab list contains the focus, moves focus to the next element in the page tab sequence outside the tablist, which is the tabpanel.

- When focus is on a tab element in the tab list:
  - Left Arrow: moves focus to the previous tab. If focus is on the first tab, moves focus to the last tab.
  - Right Arrow: Moves focus to the next tab. If focus is on the last tab element, moves focus to the first tab.
  - Home: Moves focus to the first tab. Shows tabpanel content of the newly focused tab.
  - End: Moves focus to the last tab. Shows tabpanel content of the newly focused tab.

*/

import { Tabs } from "./Tabs";
import { items } from "./data";

export const TabsImproved = () => {
  return (
    <>
      <h2>Improved Tabs</h2>
      <Tabs items={items} />
    </>
  );
};
