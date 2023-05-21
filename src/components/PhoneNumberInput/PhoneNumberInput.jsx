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
