/*

Create a hook to tell if it is the first render.

function App() {
  const isFirstRender = useIsFirstRender()
  // only true for the first render  
}

*/

import { useEffect, useRef } from "react";

export const useIsFirstRender = () => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  // on first render, this would return true and then the effect would run to update the value of `isFirstRender` to false
  return isFirstRender.current;
};
