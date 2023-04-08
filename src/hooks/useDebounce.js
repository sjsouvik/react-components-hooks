import { useRef } from "react";

const useDebounce = (fn, delay) => {
  let timerId = useRef(null);

  return function () {
    const context = this,
      args = arguments;

    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    timerId.current = setTimeout(() => fn.apply(context, args), delay);
  };
};

export default useDebounce;
