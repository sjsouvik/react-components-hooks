import { useState } from "react";
import "./Timer.css";

const initialTime = { minutes: 0, seconds: 0 };

export const Timer = ({ time }) => {
  const [{ minutes, seconds }, setTimeLeft] = useState(time);
  const [intervalId, setInterValId] = useState(null);

  const startTimerHandler = () => {
    const timerId = setInterval(() => {
      setTimeLeft(({ minutes, seconds }) => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(timerId);

          return initialTime;
        }

        return seconds === 0
          ? { minutes: minutes - 1, seconds: 59 }
          : { minutes, seconds: seconds - 1 };
      });
    }, 1000);

    setInterValId(timerId);
  };

  const stopTimerHandler = () => {
    clearInterval(intervalId);
    setInterValId(null);
  };

  const resetTimerHandler = () => {
    stopTimerHandler();
    setTimeLeft(time);
  };

  const isTimerRunning = intervalId !== null;

  const startOrStopTimerHandler = () => {
    isTimerRunning ? stopTimerHandler() : startTimerHandler();
  };

  return (
    <div className="mt-1">
      <h2>Timer</h2>
      <div>{`${minutes.toString().padStart(2, "0")}m : ${seconds
        .toString()
        .padStart(2, "0")}s`}</div>
      <div className="flex-row">
        <button className="mt-1" onClick={startOrStopTimerHandler}>
          {isTimerRunning ? "Stop" : "Start"}
        </button>
        <button className="mt-1" onClick={resetTimerHandler}>
          Reset
        </button>
      </div>
    </div>
  );
};
