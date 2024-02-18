import React, { useState } from "react";

import "./Stepper.css";

export const Stepper = ({ steps }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const nextClickHandler = () => {
    setActiveStepIndex(activeStepIndex + 1);
  };

  if (activeStepIndex === steps.length) {
    return (
      <p className="text-center">Congrats! you completed all the steps.</p>
    );
  }

  return (
    <>
      <ul className="stepper-container">
        {steps.map((step, index) => {
          return (
            <li key={index}>
              <section>
                <div
                  className={`step-number ${
                    index < activeStepIndex ? "complete" : ""
                  } ${activeStepIndex === index ? "active" : ""}`}
                >
                  {index + 1}
                </div>
                <p>{step.name}</p>
              </section>
            </li>
          );
        })}
      </ul>

      <section className="step-content">
        {steps[activeStepIndex]?.component()}

        <button onClick={nextClickHandler}>
          {activeStepIndex === steps.length - 1 ? "Finish" : "Next"}
        </button>
      </section>
    </>
  );
};
