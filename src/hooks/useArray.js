/*

When array is used in React state, we need to deal with actions such as push and remove.

Implement `useArray()` to make life easier.

const {value, push, removeByIndex} = useArray([1, 2, 3])

*/

import { useCallback, useState } from "react";

export const useArray = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const push = useCallback((item) => {
    setValue((oldArray) => [...oldArray, item]);
  }, []);

  const removeByIndex = useCallback((index) => {
    setValue((oldArray) => oldArray.filter((_, idx) => idx !== index));
  }, []);

  return { value, push, removeByIndex };
};
