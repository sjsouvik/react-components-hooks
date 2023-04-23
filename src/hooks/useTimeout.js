/*

Create a hook to easily use setTimeout(callback, delay).

1. reset the timer if delay changes
2. DO NOT reset the timer if only callback changes

*/

import { useEffect, useRef } from "react";

export const useTimeout = (callback, delay) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const timerId = setTimeout(() => callbackRef.current(), delay);
    return () => clearTimeout(timerId);
  }, [delay]);
};
