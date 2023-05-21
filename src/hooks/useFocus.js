/*

CSS pseudo-class `:focus-within` could be used to allow conditional rendering in parent element on the focus state of descendant elements.

While it is cool, in complex web apps, it might be better to control the state in script.

Now please create useFocus() to support this.

```
function App() {
  const [ref, isFocused] = useFocus()
  return <div>
    <input ref={ref}/>
    {isFocused && <p>focused</p>}
  </div>
}
```

*/

import { useRef, useState, useCallback } from "react";

export const useFocus = () => {
  const ref = useRef(null);
  const [focused, setFocused] = useState(false);

  const onFocus = useCallback(() => setFocused(true), []);
  const onBlur = useCallback(() => setFocused(false), []);

  const callbackRef = useCallback(
    (node) => {
      if (ref.current) {
        ref.current.removeEventListener("focus", onFocus);
        ref.current.removeEventListener("blur", onBlur);
      }

      ref.current = node;

      if (ref.current) {
        ref.current.addEventListener("focus", onFocus);
        ref.current.addEventListener("blur", onBlur);
      }
    },
    [onFocus, onBlur]
  );

  return [callbackRef, focused];
};
