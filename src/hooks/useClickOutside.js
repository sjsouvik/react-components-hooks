import { useEffect, useRef } from "react";

const useClickOutside = (showComponent, setShowComponent) => {
  const domNode = useRef(null);

  useEffect(() => {
    const outsideClickHandler = (e) => {
      if (
        showComponent &&
        domNode.current &&
        !domNode.current.contains(e.target)
      ) {
        setShowComponent(false);
      }
    };

    document.addEventListener("click", outsideClickHandler, true);

    return () =>
      document.removeEventListener("click", outsideClickHandler, true);
  }, []);

  return domNode;
};

export default useClickOutside;
