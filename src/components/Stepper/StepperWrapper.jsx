import React from "react";
import { Stepper } from "./Stepper";

const steps = [
  {
    name: "title1",
    component: () => <p>content1</p>,
  },
  {
    name: "title2",
    component: () => <p>content2</p>,
  },
  {
    name: "title3",
    component: () => <p>content3</p>,
  },
  {
    name: "title4",
    component: () => <p>content4</p>,
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
