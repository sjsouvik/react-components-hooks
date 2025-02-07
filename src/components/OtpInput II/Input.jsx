import { useEffect, useRef } from "react";

export const Input = (props) => {
  const { value, isFocused, ...restProps } = props;
  const ref = useRef(null);

  useEffect(() => {
    if (isFocused) {
      ref.current?.focus();
    }
  }, [isFocused]);

  return (
    <input
      type="text"
      value={value}
      maxLength={1}
      inputMode="numeric"
      className="otp-cell"
      ref={ref}
      {...restProps}
    />
  );
};
