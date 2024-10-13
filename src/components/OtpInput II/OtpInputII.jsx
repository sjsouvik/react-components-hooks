import { useState } from "react";
import { Input } from "./Input";
import "./OtpInput.css";

const defaultOtp = Array(6).fill("");

export const OtpInputII = ({ onSubmit }) => {
  const [otpInput, setOtpInput] = useState(defaultOtp);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const updateOtp = (value, inputIndex) => {
    const updatedOtp = otpInput.map((inputValue, index) =>
      inputIndex === index ? value : inputValue
    );

    setOtpInput(updatedOtp);
  };

  const keyDownHandler = (e, inputIndex) => {
    const { key } = e;

    switch (key) {
      case "ArrowRight": {
        if (inputIndex < otpInput.length - 1) {
          setFocusedIndex(inputIndex + 1);
        }
        break;
      }

      case "ArrowLeft": {
        if (inputIndex > 0) {
          setFocusedIndex(inputIndex - 1);
        }
        break;
      }

      case "Backspace": {
        updateOtp("", inputIndex);

        if (inputIndex > 0 && otpInput[inputIndex] === "") {
          updateOtp("", inputIndex - 1);
          setFocusedIndex(inputIndex - 1);
        }
        break;
      }

      default: {
        let value = key;

        if (!value.match(/\d/i)) {
          return;
        }

        updateOtp(value, inputIndex);

        if (inputIndex < otpInput.length - 1) {
          setFocusedIndex(inputIndex + 1);
        }
      }
    }
  };

  const pasteHandler = (e) => {
    e.preventDefault();
    let pastedContent = e.clipboardData.getData("text");

    if (!pastedContent.match(/\d/)) {
      return;
    }

    pastedContent = pastedContent.substring(0, otpInput.length);
    setOtpInput(otpInput.map((value, index) => pastedContent[index] ?? value));
    setFocusedIndex(
      pastedContent.length >= otpInput.length
        ? otpInput.length - 1
        : pastedContent.length
    );
  };

  const resetHandler = () => {
    setOtpInput(defaultOtp);
    setFocusedIndex(0);
  };

  const isResetEnabled = otpInput.some((value) => Boolean(value));
  const isSubmitEnabled = otpInput.every((value) => Boolean(value));

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(otpInput.join(""));
      }}
    >
      <h2>OTP Input</h2>
      <section className="otp-container">
        {otpInput.map((value, index) => {
          return (
            <Input
              key={index}
              value={value}
              isFocused={focusedIndex === index}
              onKeyDown={(e) => keyDownHandler(e, index)}
              onPaste={pasteHandler}
            />
          );
        })}
      </section>
      <section className="btn-container">
        <button
          type="reset"
          className="button reset-btn"
          disabled={!isResetEnabled}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button
          type="submit"
          disabled={!isSubmitEnabled}
          className="button submit-btn"
        >
          Submit
        </button>
      </section>
    </form>
  );
};
