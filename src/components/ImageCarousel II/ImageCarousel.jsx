import { useState, useRef, useEffect } from "react";

/*

Build an image carousel that displays a sequence of images.

Requirements:

- The image carousel component takes in an array of image URLs. Example image URLs are provided in the skeleton code.
- Layout and positioning:
    - The image carousel should be centered on the screen with a maximum size of 600px by 400px.
    - Images should shrink to fit within the carousel so that the entire image is visible. Empty parts of the carousel can be filled with black.
    - If the screen width is smaller than the image, the carousel should be resized to fit within the available horizontal space.
- Navigation:
    - Add left/right navigation buttons to allow the user to navigate through the images. The buttons should allow a cycling behavior, i.e. after the last image, the image cycles back to the first.
    - Add page buttons at the bottom to directly jump to an image. You may assume there will be fewer than 10 images.
    - Upon clicking the Prev/Next buttons, the current image should smoothly translate out while the next image enters. Translation direction is left/right respectively.
    - Transitions when clicking on the page buttons is optional but highly encouraged. Aim to reuse the transitioning code for the Prev/Next buttons.
    - Recommendation: Render all the images in a horizontal row within a container and manipulate the horizontal offset of the container to achieve the transitions.

*/

export const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const ref = useRef();

  const updateImageIndex = (updatedImageIndex) => {
    const currentIndex = (updatedImageIndex + images.length) % images.length;
    setCurrentImageIndex(currentIndex);
    setIsTransitioning(true);
  };

  const updateImageWidth = () => {
    setImageWidth(ref.current?.getBoundingClientRect()?.width ?? 0);
  };

  useEffect(() => {
    updateImageWidth();

    window.addEventListener("resize", updateImageWidth);
    return () => window.removeEventListener("resize", updateImageWidth);
  }, []);

  return (
    <div className="image-carousel" ref={ref}>
      <section
        className={`images ${isTransitioning ? "image-transitioning" : ""}`}
        style={{
          transform: imageWidth
            ? `translateX(-${currentImageIndex * imageWidth}px)`
            : undefined,
        }}
        onTransitionEnd={() => setIsTransitioning(false)}
      >
        {images.map(({ src, alt }) => (
          <img
            key={src}
            alt={alt}
            src={src}
            className="carousel-image"
            height="100%"
            width="100%"
          />
        ))}
      </section>
      <button
        onClick={() => updateImageIndex(currentImageIndex - 1)}
        aria-label="Previous image"
        className="carousel-btn prev-btn"
        disabled={isTransitioning}
      >
        &#10094;
      </button>
      <section className="pages">
        {images.map(({ alt, src }, index) => {
          return (
            <button
              key={src}
              aria-label={`Navigate to ${alt}`}
              className={`page ${index === currentImageIndex ? "active" : ""}`}
              onClick={() => updateImageIndex(index)}
              disabled={isTransitioning}
            />
          );
        })}
      </section>
      <button
        aria-label="Next image"
        className="carousel-btn next-btn"
        onClick={() => updateImageIndex(currentImageIndex + 1)}
        disabled={isTransitioning}
      >
        &#10095;
      </button>
    </div>
  );
};
