import React, { useEffect, useRef, useState } from "react";
import "../styles/D2CCarousel.css";

const D2CCarousel = () => {
  const [images, setImages] = useState([]);
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300; // Adjust for responsiveness
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  
      useEffect(() => {
          fetch('http://localhost:1337/api/solutions') // Adjust URL based on your Strapi setup
              .then(response => response.json())
              .then(data => setImages(data.data))
              .catch(error => console.error('Error fetching services:', error));
      }, []);

  return (
    <section className="section_carousel-d2c sc1">
      <div className="top-text-d2c">
        <div className="title-subtitle-2-d2c hptxt">
          <div className="subtitle-h1-center-aligned">Stunningly Crafted Shopify Solutions
          <br></br>
          Driven by Insights
          </div>
        </div>
        <div className="description-d2c">
          <div className="body-large">
            As Shopify Partners and a leading eCommerce Web Design Agency, we
            empower brands to thrive through strategic design and robust Shopify
            development. We bring a fresh strategic approach to your brand,
            focusing on delivering pixel-perfect websites, built for Conversions
            & Growth.
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="carousel-container">
        <button className="carousel-btn left" onClick={() => scroll("left")}>
          &#8249;
        </button>
        <div className="carousel-slider" ref={sliderRef}>
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image.imageUrl} alt={`Slide ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
        <button className="carousel-btn right" onClick={() => scroll("right")}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default D2CCarousel;
