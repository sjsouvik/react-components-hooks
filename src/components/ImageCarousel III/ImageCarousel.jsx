import { useState } from "react";

/*

Build an image carousel that displays a sequence of images, smoothly transitioning when navigating between images.

The main difference between this question and Image Carousel II is that there should only be a maximum of two 
image elements in the DOM at any one time. This improves performance because the number of image elements present 
in the DOM is no longer proportional to the number of images, and the image carousel does not unnecessarily 
load images that aren't shown. However, this approach comes at the cost of higher implementation complexity.

Requirements:

- All requirements of Image Carousel question should be supported.
- Upon clicking the Prev/Next buttons, the current image should smoothly translate out while the next image enters. 
Translation direction is left/right respectively.
- Transitions when clicking on the page buttons is optional but highly encouraged. Aim to reuse the 
transitioning code for the Prev/Next buttons.
- There should only be a maximum of two image elements in the DOM at any one time.

Follow up:

What we have implemented is a simple image carousel. But image carousels can be packed with more 
features and multiple further improvements. Here are some common follow up questions you can expect:

- Notice that the new images can take some time to load and a flash of black is seen (due to the background color). 
How can you load images eagerly so that no loading flashes occur?
- How can you support autoplay functionality, aka the carousel transitions to the next image after a 
specified duration?
- How can you support an infinite list of images?

*/

const shouldTransitionToLeft = (currentIndex, nextIndex, totalImages) => {
  if (currentIndex === totalImages - 1 && nextIndex === 0) {
    return true;
  }

  if (currentIndex === 0 && nextIndex === totalImages - 1) {
    return false;
  }

  return currentIndex < nextIndex;
};

export default function ImageCarousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentImage = images[currentImageIndex];
  const nextImage = nextImageIndex !== null ? images[nextImageIndex] : null;

  const updateImageIndex = (updatedImageIndex) => {
    const nextIndex = (updatedImageIndex + images.length) % images.length;
    setNextImageIndex(nextIndex);
    /* The transition is kicked off in the next frame with the help of requestAnimationFrame(). 
    Without starting the transition in the next frame, the next image does not have an initial state 
    to transition from and the transition will not happen. Allow the next image to be rendered to 
    the DOM first so that the next image can be transitioned in.*/
    requestAnimationFrame(() => setIsTransitioning(true));
  };

  const { exitClassName, enterClassName } =
    nextImageIndex !== null &&
    shouldTransitionToLeft(currentImageIndex, nextImageIndex, images.length)
      ? { exitClassName: "transition-left", enterClassName: "transition-right" }
      : {
          exitClassName: "transition-right",
          enterClassName: "transition-left",
        };

  return (
    <div className="image-carousel">
      <img
        key={currentImage.src}
        alt={currentImage.alt}
        src={currentImage.src}
        className={`image-carousel__image ${
          isTransitioning ? exitClassName : ""
        }`}
      />
      {nextImage !== null && (
        <img
          key={nextImage.src}
          alt={nextImage.alt}
          src={nextImage.src}
          className={`image-carousel__image ${
            !isTransitioning ? enterClassName : ""
          }`}
          onTransitionEnd={() => {
            setCurrentImageIndex(nextImageIndex);
            setNextImageIndex(null);
            setIsTransitioning(false);
          }}
        />
      )}
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
}
