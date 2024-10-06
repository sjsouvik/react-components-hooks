import ImageCarousel from "./ImageCarousel";
import { images } from "../ImageCarousel II/data";
import "./ImageCarousel.css";

export const ImageCarouselWrapperIII = () => {
  return (
    <>
      <h2>Image Carousel III</h2>
      <div className="carousel-wrapper">
        <ImageCarousel images={images} />
      </div>
    </>
  );
};
