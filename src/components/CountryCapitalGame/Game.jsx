import { useEffect, useState } from "react";
import { shuffle } from "./utils";

export const Game = ({ data }) => {
  const [allOptions, setAllOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedCorrect, setSelectedCorrect] = useState(false);

  useEffect(function onMount() {
    setAllOptions(shuffle(data));
  }, []);

  const selectHandler = (selectedItem) => {
    if (
      selectedOptions.length === 2 ||
      selectedOptions.includes(selectedItem)
    ) {
      return;
    }

    const updatedSelections = [...selectedOptions, selectedItem];

    if (updatedSelections.length === 2) {
      const [firstSelection, secondSelection] = updatedSelections;
      if (
        data[firstSelection] === secondSelection ||
        data[secondSelection] === firstSelection
      ) {
        setSelectedCorrect(true);

        setTimeout(() => {
          setAllOptions((prevOptions) =>
            prevOptions.filter((option) => !updatedSelections.includes(option))
          );
          setSelectedOptions([]);
          setSelectedCorrect(false);
        }, 1000);
      } else {
        setTimeout(() => {
          setSelectedOptions([]);
        }, 1000);
      }
    }

    setSelectedOptions(updatedSelections);
  };

  // classname library can be used here for styling
  const getClassName = (item) => {
    let className = "";
    if (selectedOptions.includes(item)) {
      className += "selected ";
      if (selectedCorrect) {
        className += "correct";
      } else if (selectedOptions.length === 2) {
        className += "incorrect";
      }
    }

    return className;
  };

  if (allOptions.length === 0) {
    return <h3>Congratulations! you won the game.</h3>;
  }

  return (
    <>
      <ul className="board">
        {allOptions.map((option, index) => {
          return (
            <button
              className={`option ${getClassName(option)}`}
              key={index}
              onClick={() => selectHandler(option)}
            >
              {option}
            </button>
          );
        })}
      </ul>
    </>
  );
};
