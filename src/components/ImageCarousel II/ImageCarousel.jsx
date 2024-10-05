import { useState, useRef, useEffect } from "react";

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
