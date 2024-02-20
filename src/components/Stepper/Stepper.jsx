import React, { useEffect, useRef, useState } from "react";

import "./Stepper.css";

export const Stepper = ({ steps }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const stepsRef = useRef([]);
  const [margin, setMargin] = useState({ left: 0, right: 0 });

  useEffect(() => {
    setMargin({
      left: stepsRef.current[0].offsetWidth / 2,
      right: stepsRef.current[steps.length - 1].offsetWidth / 2,
    });
  }, []);

  const nextClickHandler = () => {
    setActiveStepIndex(activeStepIndex + 1);
  };

  if (activeStepIndex === steps.length) {
    return (
      <p className="text-center">Congrats! you completed all the steps.</p>
    );
  }

  const calculateProgressBarWidth = () => {
    return (100 / (steps.length - 1)) * activeStepIndex;
  };

  return (
    <>
      <section className="position-relative">
        <ul className="stepper-container">
          {steps.map((step, index) => {
            return (
              <li
                key={index}
                className="step"
                ref={(node) => (stepsRef.current[index] = node)}
              >
                <section>
                  <div
                    className={`step-number ${
                      index < activeStepIndex ? "complete" : ""
                    } ${activeStepIndex === index ? "active" : ""}`}
                  >
                    {index < activeStepIndex ? (
                      <span>&#10003;</span>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <p>{step.name}</p>
                </section>
              </li>
            );
          })}
        </ul>

        <div
          className="step-progress"
          style={{
            left: margin.left,
            right: margin.right,
          }}
        >
          <div
            className="step-progress-bar"
            style={{
              width: `${calculateProgressBarWidth()}%`,
            }}
          ></div>
        </div>
      </section>

      <section className="step-content">
        {steps[activeStepIndex]?.component()}

        <button onClick={nextClickHandler}>
          {activeStepIndex === steps.length - 1 ? "Finish" : "Next"}
        </button>
      </section>
    </>
  );
};
