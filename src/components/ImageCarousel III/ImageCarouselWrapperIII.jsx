import ImageCarousel from "./ImageCarousel";
import { images } from "../ImageCarousel II/data";
import "./ImageCarousel.css";

export const ImageCarouselWrapperIII = () => {
  return (
    <div className="wrapper">
      <h2>Image Carousel III</h2>
      <ImageCarousel images={images} />
    </div>
  );
};
