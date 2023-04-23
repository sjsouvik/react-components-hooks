/*

One question that comes up a lot is "When using hooks how do I get the previous value of props or state?". 
With React class components you have the componentDidUpdate method which receives previous props and state 
as arguments or you can update an instance variable (this.previous = value) and reference it later to get 
the previous value. So how can we do this inside a functional component that doesn't have lifecycle methods 
or an instance to store values on? Hooks to the rescue! We can create a custom hook that uses the useRef hook 
internally for storing the previous value.

Create a hook usePrevious() to return the previous value, with initial value of `undefined`.
 
*/

import { useEffect } from "react";

export const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  // return previous value (happens before making the update in useEffect above)
  return ref.current;
};
