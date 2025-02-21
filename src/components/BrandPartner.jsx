import React, { useEffect, useState } from "react";
import "../styles/BrandPartner.css"; // Ensure you have this CSS file

const BrandPartners = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/brands") // Fetching from Strapi
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setBrands(
            data.data.map((brand) => ({
              imageUrl: brand.imageUrl, // Get image URL
            }))
          );
        }
      })
      .catch((error) => console.error("Error fetching brands:", error));
  }, []);

  return (
    <>
      <section className="section_hp-middle-d2c">
        <div className="left-line-d2c"></div>
        <div className="div-block-8">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707d64d12c30c0aab593a83_Vector.svg"
              loading="lazy"
              alt=""
            />
          ))}
          <div className="mid-line-d2c">90+ Brands &amp; Counting</div>
        </div>
        <div className="right-line-d2c"></div>
      </section>

      {/* Brand Slider Section */}
      <section className="section_brand-partners-d2c">
        <div className="brand-banner-d2c">
          <div className="brand-slider">
            {brands.concat(brands).map((brand, index) => ( // Duplicate array for smooth looping
              <div key={index} className="brand-item diff-d2c">
                <img src={brand.imageUrl} alt={`Brand ${index + 1}`} className="image-128" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandPartners;
