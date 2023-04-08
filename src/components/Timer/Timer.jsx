import { useRef, useState } from "react";
import "./Timer.css";

const initialTime = { minutes: 0, seconds: 0 };

export const Timer = ({ time }) => {
  const [{ minutes, seconds }, setTimeLeft] = useState(time);
  const id = useRef(null);

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

    id.current = timerId;
  };

  const stopTimerHandler = () => {
    clearInterval(id.current);
  };

  const resetTimerHandler = () => {
    clearInterval(id.current);
    setTimeLeft(time);
  };

  return (
    <div className="mt-1">
      <h2>Timer</h2>
      <div>{`${minutes.toString().padStart(2, "0")} : ${seconds
        .toString()
        .padStart(2, "0")}`}</div>
      <button className="mt-1" onClick={startTimerHandler}>
        start
      </button>
      <button className="mt-1" onClick={stopTimerHandler}>
        Stop
      </button>
      <button className="mt-1" onClick={resetTimerHandler}>
        Reset
      </button>
    </div>
  );
};
