import { useEffect, useState } from "react";
import { images } from "./data";
import "./Carousel.css";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevBtnHandler = () => {
    const numberOfImages = images.length;
    setActiveIndex((activeIndex - 1 + numberOfImages) % numberOfImages);
  };

  const nextBtnHandler = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  useEffect(() => {
    const timerId = setTimeout(nextBtnHandler, 2 * 1000);

    return () => clearTimeout(timerId);
  }, [activeIndex]);

  return (
    <div>
      <h2>Carousel</h2>
      <div className="carousel">
        <button onClick={prevBtnHandler}>Prev</button>
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            height={300}
            width={500}
            className={activeIndex === index ? "visible" : "hidden"}
          />
        ))}
        <button onClick={nextBtnHandler}>Next</button>
      </div>
    </div>
  );
};
