import React from "react";
import { Stepper } from "./Stepper";

const steps = [
  {
    name: "Customer info",
    component: () => <p>Provide your contact details</p>,
  },
  {
    name: "Shipping info",
    component: () => <p>Enter your shipping address.</p>,
  },
  {
    name: "Payment",
    component: () => <p>Complete payment for your order.</p>,
  },
  {
    name: "Delivered",
    component: () => <p>Your order has been delivered.</p>,
  },
];

export const StepperWrapper = () => {
  return (
    <>
      <h2>Stepper</h2>
      <Stepper steps={steps} />
    </>
  );
};
