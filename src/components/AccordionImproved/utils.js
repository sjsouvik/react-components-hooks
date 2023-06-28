export const getAccordionHeaderId = (accordionId, title) => {
  return `${accordionId}-header-${title}`;
};

export const getAccordionPanelId = (accordionId, title) =>
  `${accordionId}-panel-${title}`;

export const focusAccordion = (accordions, accordionId, accordionIndex) => {
  document
    .getElementById(
      getAccordionHeaderId(accordionId, accordions[accordionIndex].title)
    )
    .focus();
};

export const getAccordionIndex = (accordions, accordionTitle) =>
  accordions.findIndex((accordion) => accordion.title === accordionTitle);
