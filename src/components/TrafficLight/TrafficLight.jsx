/*

Build a traffic light where the lights switch from green to yellow to red after predetermined intervals and loop indefinitely. Each light should be lit for the following durations:

Red light: 4000ms
Yellow light: 500ms
Green light: 3000ms

*/

import { useState, useEffect } from "react";
import { Light } from "./Light";
import "./TrafficLight.css";

/*

For a11y reasons, we add an aria-label to the component to indicate the current light 
and aria-live="polite" to announce the current active light. The contents of the component 
(the lights) are for visual purposes and aren't important to screen readers, 
they can be hidden with aria-hidden="true".

*/

export default function TrafficLight(props) {
  const { lights, initialColor = "green", layout = "vertical" } = props;

  const [currentLight, setCurrentLight] = useState(initialColor);

  useEffect(() => {
    const { duration, next } = lights[currentLight];

    const timerId = setTimeout(() => {
      setCurrentLight(next);
    }, duration);

    return () => clearTimeout(timerId);
  }, [currentLight]);

  return (
    <div
      aria-live="polite"
      aria-label={`current light: ${currentLight}`}
      className={`light-container ${layout === "horizontal" ? "flex-row" : ""}`}
    >
      {Object.keys(lights).map((light) => (
        <Light key={light} light={light} currentLight={currentLight} />
      ))}
    </div>
  );
}
