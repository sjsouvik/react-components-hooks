import { useState } from "react";
import Star from "./Star";
import "./StarRating.css";

export const StarRating = ({ value }) => {
  const [rating, setRating] = useState(value);
  const [selection, setSelection] = useState(0);

  const hoverHandler = (e) => {
    let value = 0;

    if (e) {
      const { starid } = e.target.dataset;
      value = starid;
    }

    setSelection(value);
  };

  return (
    <>
      <h2>Star Rating</h2>
      <div
        onClick={(e) => setRating(e.target.dataset.starid || rating)}
        onMouseOver={hoverHandler}
        onMouseOut={() => hoverHandler(null)}
      >
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            starId={index + 1}
            marked={selection ? index + 1 <= selection : index + 1 <= rating}
          />
        ))}
      </div>
      {rating}
    </>
  );
};
