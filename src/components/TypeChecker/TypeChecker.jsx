import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./TypeChecker.css";

const useTimer = ({ timeInSeconds, onFinish }) => {
  const [timeLeft, setTimeLeft] = useState(timeInSeconds);
  const intervalId = useRef(null);

  const startTimer = useCallback(() => {
    intervalId.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 1) {
          clearInterval(intervalId.current);
          onFinish?.();
          return 0;
        }

        return prevTime - 1;
      });
    }, 1000);
  }, []);

  const resetTimer = useCallback(() => {
    setTimeLeft(timeInSeconds);
    clearInterval(intervalId.current);
  }, []);

  return { timeLeft, startTimer, resetTimer };
};

const Status = {
  UNTYPED: "untyped",
  CORRECT: "correct",
  INCORRECT: "incorrect",
};

const content = "Hello, world";

const splittedInitialCharacters = content
  .split("")
  .map((char) => ({ char, status: Status.UNTYPED }));
const TOTAL_TIME_IN_SECONDS = 5;

export const TypeChecker = () => {
  const [characters, setCharacters] = useState(splittedInitialCharacters);
  const [inputText, setInputText] = useState("");
  const [appState, setAppState] = useState("idle");
  const [correctlyTypedChars, setCorrectlyTypedChars] = useState(0);
  const [totalTypedChars, setTotalTypedChars] = useState(0);
  const inputRef = useRef(null);

  const { timeLeft, startTimer, resetTimer } = useTimer({
    timeInSeconds: TOTAL_TIME_IN_SECONDS,
    onFinish: () => setAppState("finished"),
  });

  const stats = useMemo(() => {
    if (appState === "finished") {
      const accuracy = ((correctlyTypedChars / totalTypedChars) * 100).toFixed(
        1
      );

      const typedWords = correctlyTypedChars / 5;
      const timeSpentInMin = (TOTAL_TIME_IN_SECONDS - timeLeft) / 60;
      const wpm = Math.floor(typedWords / timeSpentInMin);

      return { accuracy, wpm };
    }
  }, [appState]);

  const handleInputChange = (e) => {
    const { value } = e.target;

    if (appState === "finished") {
      return;
    }

    if (appState === "idle") {
      setAppState("typing");
      startTimer();
    }

    const delta = value.length - inputText.length;

    if (delta > 0) {
      setTotalTypedChars((oldCount) => oldCount + delta);
    }

    let foundMistake = false;

    let correctCharsCount = 0;
    const updatedCharacters = characters.map(({ char }, index) => {
      let status = Status.UNTYPED;

      if (index < value.length) {
        if (foundMistake) {
          status = Status.INCORRECT;
        } else if (char === value[index]) {
          status = Status.CORRECT;
          correctCharsCount++;
        } else {
          status = Status.INCORRECT;
          foundMistake = true;
        }
      }

      return { char, status };
    });

    setInputText(value);
    setCharacters(updatedCharacters);
    setCorrectlyTypedChars(correctCharsCount);

    if (value.length === characters.length) {
      setAppState("finished");
    }
  };

  const resetHandler = () => {
    resetTimer();
    setAppState("idle");
    setCharacters(splittedInitialCharacters);
    setInputText("");
    setCorrectlyTypedChars(0);
    setTotalTypedChars(0);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <h2>Typing test</h2>
      <h3>{timeLeft}</h3>
      <section onClick={() => inputRef.current.focus()}>
        {characters.map((character, index) => (
          <span key={index} className={`character ${character.status}`}>
            {character.char}
          </span>
        ))}
      </section>
      <section style={{ opacity: "0" }}>
        <input
          type="text"
          ref={inputRef}
          onChange={handleInputChange}
          value={inputText}
        />
      </section>
      {appState === "finished" && (
        <section>
          <p>Accuracy: {stats.accuracy}</p>
          <p>WPM: {stats.wpm}</p>
          <button onClick={resetHandler}>Reset</button>
        </section>
      )}
    </>
  );
};
