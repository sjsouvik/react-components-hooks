/*

When we handle async requests in React, we need to pay attention if the component is already unmounted.

Please implement useIsMounted() for us to easily tell if the component is still not unmounted.

*/

import { useEffect, useRef } from "react";

export const useIsMounted = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => (isMounted.current = false);
  }, []);

  return () => isMounted.current;
};
