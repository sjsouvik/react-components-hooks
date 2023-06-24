/*

Create a PhoneNumberInput component.

1. only accepts numerical digits
2. format the number automatically as (123)456-7890 by
  - adding the parenthesis when the 4th digit is entered
  - also adding - before 7th digit

You can use the default text input without any styling.

Follow-up:
What if user removes some digits in the middle, does caret jumps to the end in your approach?

*/

import { useState } from "react";
import "./PhoneNumberInput.css";

export const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const phoneNumberChangeHandler = (e) => {
    let inputValue = e.target.value.replace(/[^\d]/gi, "");

    if (inputValue.length > 10) {
      return;
    }

    if(inputValue.length > 3 && inputValue.length < 7){
      inputValue = `(${inputValue.slice(0, 3)})${inputValue.slice(3)}`;
    }else if(inputValue.length > 6){
      inputValue = `(${inputValue.slice(0, 3)})${inputValue.slice(3, 6)}-${inputValue.slice(6)}`;
    }

    setPhoneNumber(inputValue);
  };

  return (
    <>
      <h2>Phone number input</h2>
      <input
        type="tel"
        value={phoneNumber}
        onChange={phoneNumberChangeHandler}
        placeholder="Enter phone number"
        className="inputbox"
      />
    </>
  );
};
