import { useCallback, useEffect, useRef, useState } from "react";

export const useHover = () => {
  const hoverRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const mouseOverHandler = () => setHovered(true);
  const mouseOutHandler = () => setHovered(false);

  useEffect(() => {
    const node = hoverRef.current;

    if (!node) {
      return;
    }

    node.addEventListener("mouseover", mouseOverHandler);
    node.addEventListener("mouseout", mouseOutHandler);

    return () => {
      node.removeEventListener("mouseover", mouseOverHandler);
      node.removeEventListener("mouseout", mouseOutHandler);
    };
  }, [hoverRef.current]);

  return [ref, hovered];
};

/* 
If we have a logic that changes the element that `hoverRef` is added to 
then our event listeners won't necessarily get applied to the new element. 
To fix that, we have the following alternate and improved solution using callback ref. 
Read this to know more about callback refs: https://legacy.reactjs.org/docs/refs-and-the-dom.html#callback-refs 
*/

export const useHoverImproved = () => {
  const hoverRef = useRef(null); // Keep track of the last node passed to callback ref so we can remove its event listeners.
  const [hovered, setHovered] = useState(false);

  const mouseOverHandler = useCallback(() => setHovered(true), []);
  const mouseOutHandler = useCallback(() => setHovered(false), []);

  const callbackRef = useCallback(
    (node) => {
      if (hoverRef.current) {
        hoverRef.current.removeEventListener("mouseover", mouseOverHandler);
        hoverRef.current.removeEventListener("mouseout", mouseOutHandler);
      }

      hoverRef.current = node;

      if (hoverRef.current) {
        hoverRef.current.addEventListener("mouseover", mouseOverHandler);
        hoverRef.current.addEventListener("mouseout", mouseOutHandler);
      }
    },
    [mouseOverHandler, mouseOutHandler]
  );

  return [callbackRef, hovered];
};
