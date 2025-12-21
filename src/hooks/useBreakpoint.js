/*

Implement a createBreakpoint function takes an object (where the keys are breakpoint names and 
values are the minimum width), and returns a useBreakpoint hook that returns the current breakpoint 
name based on the current window width.

```
const useBreakpoint = createBreakpoint({
  mobile: 0,
  tablet: 768,
  desktop: 1024,
});

export default function Component() {
  const breakpoint = useBreakpoint();

  return (
    <div>
      {breakpoint === 'mobile' && <p>Mobile</p>}
      {breakpoint === 'tablet' && <p>Tablet</p>}
      {breakpoint === 'desktop' && <p>Desktop</p>}
    </div>
  );
}
```

Arguments:

The createBreakpoint function takes a key-value pair object where the key is the breakpoint 
name (string) and the value is the minimum width (number) in pixels of the breakpoint.

Returns:

The createBreakpoint function returns a function that is the actual useBreakpoint hook. 
This hook takes no arguments and returns the current breakpoint name (string) that is the closest 
minimum width to the current window width. Resizing the window will cause the hook to re-run and 
potentially return a different value depending on the window size.

***************************************************Solution************************************************/

import { useState, useEffect, useMemo } from "react";

export default function createBreakpoint(breakpoints) {
  return function () {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      const resizeHandler = () => {
        setWidth(window.innerWidth);
      };

      resizeHandler();
      window.addEventListener("resize", resizeHandler);

      return () => {
        window.removeEventListener("resize", resizeHandler);
      };
    }, []);

    const sortedBreakpoints = useMemo(
      () => Object.entries(breakpoints).sort((a, b) => a[1] - b[1]),
      [breakpoints]
    );

    const breakpointName = useMemo(
      () =>
        sortedBreakpoints.reduce((acc, [name, size]) => {
          if (width >= size) {
            acc = name;
          }

          return acc;
        }, sortedBreakpoints[0][0]),
      [sortedBreakpoints, width]
    );

    return breakpointName;
  };
}
