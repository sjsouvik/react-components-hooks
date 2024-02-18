import React, { useEffect, useRef, useState } from "react";

import "./OtpInput.css";

// concepts used: ref callback - https://react.dev/learn/manipulating-the-dom-with-refs#how-to-manage-a-list-of-refs-using-a-ref-callback
export const OtpInput = (props) => {
  const { passwordLength = 4 } = props;
  const [otp, setOtp] = useState(Array(passwordLength).fill(""));
  const inputsRef = useRef(null);

  useEffect(() => {
    inputsRef.current[0].focus();
  }, []);

  const updateOtp = (index, value) => {
    /* taking only the last entered digit here for the given input element, 
    for example: if we enter 34 in an input element, it should take only the last digit 4 as input */
    const updatedOtpValue = otp.map((char, idx) =>
      idx === index ? value.substring(value.length - 1) : char
    );
    setOtp(updatedOtpValue);
  };

  const inputChangeHandler = (e, index) => {
    const { value } = e.target;

    // to allow only digits as input
    const regex = /\d$/;
    if (!regex.test(value)) {
      return;
    }

    updateOtp(index, value);

    // move to the next input element
    if (value && index < passwordLength - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const inputKeyDownHandler = (e, index) => {
    if (e.key === "Backspace") {
      updateOtp(index, "");

      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  const inputClickHandler = (index) => {
    // move cursor to the end of the input on click of any input element so that we can update the input element with the latest entered value
    inputsRef.current[index].setSelectionRange(1, 1);
  };

  return (
    <div>
      <h2>Enter your OTP</h2>
      <ul className="otp-container">
        {otp.map((value, index) => {
          return (
            <li key={index}>
              <input
                type="text"
                value={value}
                className="otp-input"
                ref={(node) => {
                  if (!inputsRef.current) {
                    inputsRef.current = [];
                  }

                  inputsRef.current[index] = node;
                }}
                onChange={(e) => inputChangeHandler(e, index)}
                onKeyDown={(e) => inputKeyDownHandler(e, index)}
                onClick={() => inputClickHandler(index)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
