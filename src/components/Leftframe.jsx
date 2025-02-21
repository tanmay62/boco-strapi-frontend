// import React from "react";
// //import "./styles.css"; // Ensure global styles are applied

// const LeftFrame = () => {
//     return (
//         <section className="section_homepage--frame-d2c">
//             <div className="left-frame-d2c">
//                 <div className="left-frame-component-d2c">
//                     <div className="description-section-d2c">
//                         <div className="title-1-d2c">
//                             <h1 className="hero-title-h1-left-aligned">We build high-converting Shopify stores that drive Profit</h1>
//                             <p className="body-large">
//                                 We&apos;re a leading Shopify & Shopify Plus agency who design and develop
//                                 strategic eCommerce websites.
//                             </p>

//                             <div className="sub-point-d2c">
//                                 {[
//                                     "Unmatched Speed & Stability",
//                                     "Built for Conversions",
//                                     "Reduced App Stack & Developer Dependencies",
//                                 ].map((text, index) => (
//                                     <div key={index} className="w-layout-hflex flex-block-5">
//                                         <img
//                                             src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707981d6373cf86d09d4db5_Vector.svg"
//                                             alt=""
//                                             loading="lazy"
//                                         />
//                                         <div className="text-block-23">{text}</div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         <div className="left-frame-button-d2c">
//                             <div className="w-layout-hflex flex-block-6">
//                                 <a href="/audit-request-form" className="button-d2c-1 btn3-d2ccc topbtn w-inline-block">
//                                     <div className="text-d2cxx text-2-d2c">Audit My Website</div>
//                                 </a>

//                                 <a href="https://qui8d48qnm9.typeform.com/to/CirpyVmQ" target="_blank" rel="noopener noreferrer" className="button-d2c-1 ttu w-inline-block">
//                                     <div className="text-d2cxx talk-us-d2c home-page-ttus">Talk to Us</div>
//                                     <div className="arrow-div-d2c">
//                                         <div className="arrow-d2c w-embed">
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
//                                                 <circle cx="24" cy="24" r="24" fill="white" />
//                                                 <path
//                                                     d="M18.2942 29.6442L17.25 28.6L27.0904 18.75H18.1442V17.25H29.6442V28.75H28.1442V19.8038L18.2942 29.6442Z"
//                                                     fill="#060237"
//                                                 />
//                                             </svg>
//                                         </div>
//                                     </div>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="right-frame-d2c">
//                 <img
//                     src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729c167178be759471f6168_Hero%20Section%20Desktop.png"
//                     loading="eager"
//                     sizes="(max-width: 767px) 100vw, (max-width: 991px) 61vw, 609px"
//                     srcSet="
//       https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729c167178be759471f6168_Hero%20Section%20Desktop-p-500.png 500w, 
//       https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729c167178be759471f6168_Hero%20Section%20Desktop-p-800.png 800w, 
//       https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729c167178be759471f6168_Hero%20Section%20Desktop-p-1080.png 1080w, 
//       https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729c167178be759471f6168_Hero%20Section%20Desktop-p-1600.png 1600w, 
//       https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729c167178be759471f6168_Hero%20Section%20Desktop.png 1827w"
//                     alt=""
//                     className="image-120"
//                 />
//             </div>
//         </section>
//     );
// };

// export default LeftFrame;

import React, { useEffect, useState } from "react";

const LeftFrame = () => {
    const [heroData, setHeroData] = useState(null);

    useEffect(() => {
            fetch("http://localhost:1337/api/heroes")
              .then((res) => res.json())
              .then((data) => {
                console.log("API Response:", data); // Check the response
                if (data?.data?.length > 0) {
                  // Ensure proper extraction
                  const heroData = data.data[0]?.herodata;
                  if (heroData) {
                    setHeroData(heroData.heroSection); // Extract heroSection
                  } else {
                    console.error("Error: herodata is missing in the API response");
                  }
                }
              })
              .catch((error) => console.error("Error fetching data:", error));
          
    }, []);

    if (!heroData) return <p>Loading...</p>;

    return (
        <section className="section_homepage--frame-d2c">
            <div className="left-frame-d2c">
                <div className="left-frame-component-d2c">
                    <div className="description-section-d2c">
                        <div className="title-1-d2c">
                            <h1 className="hero-title-h1-left-aligned">{heroData.title}</h1>
                            <p className="body-large">{heroData.description}</p>

                            <div className="sub-point-d2c">
                                {heroData.features.map((feature, index) => (
                                    <div key={index} className="w-layout-hflex flex-block-5">
                                        <img src={feature.icon} alt={feature.title} loading="lazy" />
                                        <div className="text-block-23">{feature.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="left-frame-button-d2c">
                            <div className="w-layout-hflex flex-block-6">
                                {heroData.buttons.map((button, index) => (
                                    <a
                                        key={index}
                                        href={button.link}
                                        className={`button-d2c-1 ${button.type === "primary" ? "btn3-d2ccc topbtn" : "ttu"} w-inline-block`}
                                        target={button.target || "_self"}
                                        rel="noopener noreferrer"
                                    >
                                        <div className={button.class}>{button.text}</div>
                                        {button.icon && (
                                            <div className="arrow-div-d2c">
                                                <div className="arrow-d2c w-embed">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
  <circle cx="24" cy="24" r="24" fill="white"></circle>
  <mask id="mask0_302_17084" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="12" y="12" width="24" height="24">
    <rect x="12" y="12" width="36" height="36" fill="#FFFF61"></rect>
  </mask>
  <g mask="url(#mask0_302_17084)">
    <path d="M18.2942 29.6442L17.25 28.6L27.0904 18.75H18.1442V17.25H29.6442V28.75H28.1442V19.8038L18.2942 29.6442Z" fill="#060237"></path>
  </g>
</svg>

                                                </div>
                                            </div>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="right-frame-d2c">
                <img
                    src={heroData.heroImage.src}
                    loading="eager"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 61vw, 609px"
                    srcSet={heroData.heroImage.srcSet
                        .map((image) => `${image.url} ${image.size}`)
                        .join(", ")}
                    alt={heroData.heroImage.alt}
                    className="image-120"
                />
            </div>
        </section>
    );
};

export default LeftFrame;
