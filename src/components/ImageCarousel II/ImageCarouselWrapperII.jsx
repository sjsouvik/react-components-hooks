import { ImageCarousel } from "./ImageCarousel";
import { images } from "./data";
import "./ImageCarousel.css";

export const ImageCarouselWrapperII = () => {
  return (
    <>
      <h2>Image Carousel II</h2>
      <div className="carousel-wrapper">
        <ImageCarousel images={images} />
      </div>
    </>
  );
};
