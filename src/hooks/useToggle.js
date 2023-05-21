import { useState } from "react";

/*
Basically, what this hook does is that, it takes a parameter with value true or false and toggles that value to opposite. 
It's useful when we want to take some action into it's opposite action, 

for example: show and hide modal, show more/show less text, open/close side menu.
*/

export const useToggle = (initialState = false) => {
  const [toggle, setToggle] = useState(initialState);

  const updateToggle = () => setToggle((toggle) => !toggle);

  return [toggle, updateToggle];
};
