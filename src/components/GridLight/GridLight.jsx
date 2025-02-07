import { useState, useRef, useEffect } from "react";

import "./GridLight.css";

/*

Build a 3x3 grid of light cells (omitting the center cell) where you can click on the cells to activate them, 
turning them green. When all the cells have been activated, they will be deactivated one by one in the 
same order they were activated with a 300ms interval in between.

*/

const data = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

const countVisibleBoxes = () => {
  return data.reduce((count, row) => {
    row.forEach((column) => {
      if (column === 1) {
        count += 1;
      }
    });

    return count;
  }, 0);
};

export const GridLight = () => {
  const [selectedBoxes, setSelectedBoxes] = useState(new Set());
  const [deactivating, setDeactivating] = useState(false);
  const intervalRef = useRef();

  const boxClickHandler = (e) => {
    const boxId = e.target.dataset.index;

    if (boxId === undefined) {
      return;
    }

    setSelectedBoxes((oldBoxes) => {
      const updatedBoxes = new Set(oldBoxes);
      updatedBoxes.add(boxId);
      return updatedBoxes;
    });
  };

  const deactivate = () => {
    setDeactivating(true);
    const keys = Array.from(selectedBoxes.keys());
    let index = 0;

    intervalRef.current = setInterval(() => {
      const currentKey = keys[index++];

      if (currentKey) {
        setSelectedBoxes((oldBoxes) => {
          const updatedBoxes = new Set(oldBoxes);
          updatedBoxes.delete(currentKey);
          return updatedBoxes;
        });
      } else {
        setDeactivating(false);
        clearInterval(intervalRef.current);
      }
    }, 300);
  };

  useEffect(() => {
    if (selectedBoxes.size === countVisibleBoxes()) {
      deactivate();
    }
  }, [selectedBoxes]);

  return (
    <>
      <h2>Grid Light (asked in PayPal)</h2>
      <div onClick={boxClickHandler}>
        {data.map((row, rowIndex) => {
          return (
            <div className="row" key={rowIndex}>
              {row.map((column, columnIndex) => {
                const id = `${rowIndex}-${columnIndex}`;
                const isSelected = selectedBoxes.has(id);

                return column === 1 ? (
                  <button
                    key={id}
                    className={`box ${isSelected ? "selected" : ""}`}
                    data-index={id}
                    aria-label={`cell ${id}`}
                    disabled={isSelected || deactivating}
                  />
                ) : (
                  <span key={id} className="box-placeholder" />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};
