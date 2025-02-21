import React, { useState, useEffect } from "react";
import "../styles/D2CCarousel.css";

const ImageSlider = ({ images, visibleImages = 3 }) => {
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prevIndex) =>
        prevIndex < images.length - visibleImages ? prevIndex + 1 : 0
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length, visibleImages]);

  const nextSlide = () => {
    if (scrollIndex < images.length - visibleImages) {
      setScrollIndex(scrollIndex + 1);
    } else {
      setScrollIndex(0);
    }
  };

  const prevSlide = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    } else {
      setScrollIndex(images.length - visibleImages);
    }
  };

  return (
    <div className="slider-container">
      <button className="prev-btn" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="slider">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${scrollIndex * (100 / visibleImages)}%)`,
          }}
        >
          {images.map((src, index) => (
            <div key={index} className="slide">
              <img src={src} alt={`Slide ${index + 1}`} className="image-slide" />
            </div>
          ))}
        </div>
      </div>

      <button className="next-btn" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;