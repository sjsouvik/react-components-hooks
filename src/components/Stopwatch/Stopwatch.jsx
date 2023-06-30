/*

Build a stopwatch widget which can measure how much time has passed. It shows the current timer and has two buttons underneath: "Start/Stop" and "Reset".

Requirements:

- Start/Stop Button: Starts/stops the timer depending on whether the timer is running.

- Reset: Resets the timer to 0 and stops the timer.

- The timer shows the number of seconds elapsed, down to the millisecond.
  - Clicking on the timer should start/stop the timer. The Start/Stop button's label should update accordingly as well.
  - It'd be a nice optional addition to format the time to display in hh:mm:ss:ms format.

You are free to exercise your creativity to style the appearance of the stopwatch. You can try out Google's stopwatch widget for inspiration and an example.

*/

import { useState, useRef } from "react";
import { TimePart } from "./TimePart";

import "./Stopwatch.css";

const MS_IN_SECOND = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const MS_IN_MIN = SEC_IN_MIN * MS_IN_SECOND;
const MS_IN_HOUR = MIN_IN_HOUR * SEC_IN_MIN * MS_IN_SECOND;

const formatTime = (duration) => {
  const formattedTime = { hour: 0, min: 0, sec: 0, ms: 0 };

  if (duration > MS_IN_HOUR) {
    formattedTime.hour = Math.floor(duration / MS_IN_HOUR);
    duration = duration % MS_IN_HOUR;
  }

  if (duration > MS_IN_MIN) {
    formattedTime.min = Math.floor(duration / MS_IN_MIN);
    duration = duration % MS_IN_MIN;
  }

  if (duration > MS_IN_SECOND) {
    formattedTime.sec = Math.floor(duration / MS_IN_SECOND);
    duration = duration % MS_IN_SECOND;
  }

  formattedTime.ms = duration;
  return formattedTime;
};

export const Stopwatch = () => {
  const [totalDuration, setTotalDuration] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const lastTickTiming = useRef(null);

  const startClickHandler = () => {
    lastTickTiming.current = Date.now();

    const timerId = setInterval(() => {
      const now = Date.now();
      const timePassed = now - lastTickTiming.current;

      setTotalDuration((duration) => duration + timePassed); // callback form of setState is used to ensure that we are using the latest value of duration.

      lastTickTiming.current = now;
    }, 1);

    setIntervalId(timerId);
  };

  const isTimerRunning = intervalId !== null;

  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const startOrStopTimer = () => {
    if (isTimerRunning) {
      stopTimer();
    } else {
      startClickHandler();
    }
  };

  const resetHandler = () => {
    stopTimer();
    setTotalDuration(0);
  };

  const formattedTime = formatTime(totalDuration);

  return (
    <>
      <h2>Stopwatch</h2>
      <>
        <button className="time" onClick={startOrStopTimer}>
          {formattedTime.hour > 0 && (
            <TimePart time={formattedTime.hour} unit="h" />
          )}
          {formattedTime.min > 0 && (
            <TimePart time={formattedTime.min} unit="m" />
          )}
          <TimePart time={formattedTime.sec} unit="s" />

          <span className="time-ms">{`${Math.floor(formattedTime.ms / 10)
            .toString()
            .padStart(2, "0")}`}</span>
        </button>
        <div className="flex-row">
          <button onClick={startOrStopTimer}>
            {isTimerRunning ? "Stop" : "Start"}
          </button>
          <button onClick={resetHandler}>Reset</button>
        </div>
      </>
    </>
  );
};
