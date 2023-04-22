import { useEffect, useRef, useState } from "react";

export const useHover = () => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const mouseOverHandler = () => setHovered(true);
  const mouseOutHandler = () => setHovered(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    node.addEventListener("mouseover", mouseOverHandler);
    node.addEventListener("mouseout", mouseOutHandler);

    return () => {
      node.removeEventListener("mouseover", mouseOverHandler);
      node.removeEventListener("mouseout", mouseOutHandler);
    };
  }, [ref.current]);

  return [ref, hovered];
};
