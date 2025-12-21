/*

Implement a useMediaQuery hook that subscribes and responds to media query changes (e.g. screen size, 
resolution, orientation, etc.).

```
export default function Component() {
  const isSmallDevice = useMediaQuery('only screen and (max-width: 768px)');

  return <div>{isSmallDevice && <a href="#">Menu</a>}</div>;
}
```

Hint: The window.matchMedia API would be helpful.

Arguments:

query: string: The media query to match. It must be a valid CSS media query string

Returns:

The hook returns a boolean value that indicates whether the media query is a match.

*************************************************Solution**************************************************/

import { useState, useEffect } from "react";

export default function useMediaQuery(query) {
  const [hasMatched, setHasMatched] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    function updateMatch() {
      setHasMatched(mediaQueryList.matches);
    }

    mediaQueryList.addEventListener("change", updateMatch);

    return () => mediaQueryList.removeEventListener("change", updateMatch);
  }, [query]);

  return hasMatched;
}
