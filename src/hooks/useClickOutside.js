import { useEffect, useRef } from "react";

const useClickOutside = (callback) => {
  const domNode = useRef(null);

  const outsideClickHandler = (event) => {
    if (domNode.current && !domNode.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", outsideClickHandler, true);

    return () =>
      document.removeEventListener("click", outsideClickHandler, true);
  }, []);

  return domNode;
};

export default useClickOutside;
