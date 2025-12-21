/*

Implement a useWindowSize hook that returns the current height and width of the window 
(window.innerHeight and window.innerWidth). It should re-render the component if the screen 
properties changes.

```
export default function Component() {
  const screen = useWindowSize();

  return (
    <div>
      <p>The current window dimensions are:</p>
      <code>{JSON.stringify(screen, null, 2)}</code>
    </div>
  );
}
```

Arguments:

Nothing.

Returns:

The hook returns an object with the following properties:

height: number: Current height of the screen
width: number: Current width of the screen

****************************************************Solution**********************************************/

import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    function updateWindowSize() {
      setWindowSize({ height: window.innerHeight, width: window.innerWidth });
    }

    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);

    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  return windowSize;
}
