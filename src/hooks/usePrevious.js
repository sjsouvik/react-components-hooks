import { useEffect } from "react";

export const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  // return previous value (happens before making the update in useEffect above)
  return ref.current;
};
