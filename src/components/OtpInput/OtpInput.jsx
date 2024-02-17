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
    if (e.key === "Backspace" && otp[index] !== "") {
      updateOtp(index, "");

      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  return (
    <div>
      <h1>Enter your OTP</h1>
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
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
