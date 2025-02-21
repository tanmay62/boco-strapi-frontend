import React from "react";

// const caseStudies = [
//   {
//     title: "Stylish Wardrobe",
//     link: "/case-studies/stylish-wodrobe",
//     imgSrc: "https://cdn.prod.website-files.com/65ded9eabc08178230e44733/6732ff98a091ff2b5a6bcbb5_Frame%201261154325.png",
//     imgSrcSet: "https://cdn.prod.website-files.com/65ded9eabc08178230e44733/6732ff98a091ff2b5a6bcbb5_Frame%201261154325-p-500.png 500w, https://cdn.prod.website-files.com/65ded9eabc08178230e44733/6732ff98a091ff2b5a6bcbb5_Frame%201261154325.png 708w",
//   },
//   {
//     title: "The Good Leaf",
//     link: "/case-studies/the-good-leaf",
//     imgSrc: "https://cdn.prod.website-files.com/65ded9eabc08178230e44733/6732ffaf7ed43b5256ce6932_Frame%201261154394.png",
//     imgSrcSet: "https://cdn.prod.website-files.com/65ded9eabc08178230e44733/6732ffaf7ed43b5256ce6932_Frame%201261154394-p-500.png 500w, https://cdn.prod.website-files.com/65ded9eabc08178230e44733/6732ffaf7ed43b5256ce6932_Frame%201261154394.png 708w",
//   },
// ];

const largeCaseStudies = [
  {
    title: "Stylish Wardrobe",
    link: "/case-studies/stylish-wodrobe",
    imgSrc: "https://cdn.prod.website-files.com/65ded9eabc08178230e44733/673315e4525121b4443a35d4_Case%20Study%20SW%20Container.png",
    imgSrcSet: "https://cdn.prod.website-files.com/65ded9eabc08178230e44733/673315e4525121b4443a35d4_Case%20Study%20SW%20Container-p-500.png 500w, https://cdn.prod.website-files.com/65ded9eabc08178230e44733/673315e4525121b4443a35d4_Case%20Study%20SW%20Container-p-800.png 800w, https://cdn.prod.website-files.com/65ded9eabc08178230e44733/673315e4525121b4443a35d4_Case%20Study%20SW%20Container-p-1080.png 1080w, https://cdn.prod.website-files.com/65ded9eabc08178230e44733/673315e4525121b4443a35d4_Case%20Study%20SW%20Container.png 1118w",
  },
  {
    title: "The Good Leaf",
    link: "/case-studies/the-good-leaf",
    imgSrc: "https://cdn.prod.website-files.com/65ded9eabc08178230e44733/6733160417ca4a8acc23a05d_Case%20Study%20TGL%20Container.png",
    imgSrcSet: "https://cdn.prod.website-files.com/65ded9eabc08178230e44733/6733160417ca4a8acc23a05d_Case%20Study%20TGL%20Container-p-500.png 500w, https://cdn.prod.website-files.com/65ded9eabc08178230e44733/6733160417ca4a8acc23a05d_Case%20Study%20TGL%20Container-p-800.png 800w, https://cdn.prod.website-files.com/65ded9eabc08178230e44733/6733160417ca4a8acc23a05d_Case%20Study%20TGL%20Container-p-1080.png 1080w, https://cdn.prod.website-files.com/65ded9eabc08178230e44733/6733160417ca4a8acc23a05d_Case%20Study%20TGL%20Container.png 1118w",
  },
];

const CaseStudy = () => {
  return (
    <><section className="section_cms-d2c">
      <div className="cms-top-d2c">
        <div className="cms-info-d2c">
          <div className="case-stu-sub">
            <div className="subtitle-h1-center-aligned">
              Read our recent Case Studies
            </div>
          </div>
        </div>
      </div>

      {/* Top Small Case Studies */}
      <div className="cms-middle-container">
        {/* <div className="div-block-24">
          <div className="collection-list-wrapper-2 w-dyn-list">
            <div role="list" className="collection-list-6 w-dyn-items w-row">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  role="listitem"
                  className="collection-item-3 w-dyn-item w-col w-col-6"
                >
                  <a href={study.link} className="w-inline-block">
                    <img
                      loading="eager"
                      src={study.imgSrc}
                      alt={study.title}
                      sizes="(max-width: 479px) 300px, 100vw"
                      srcSet={study.imgSrcSet}
                      className="image-171"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Bottom Large Case Studies */}
        <div className="collection-list-wrapper w-dyn-list">
          <div role="list" className="collection-list-5 w-dyn-items w-row">
            {largeCaseStudies.map((study, index) => (
              <div
                key={index}
                role="listitem"
                className="collection-item-2 w-dyn-item w-col w-col-6"
              >
                <a href={study.link} className="cms-link-left w-inline-block">
                  <img
                    loading="eager"
                    src={study.imgSrc}
                    alt={study.title}
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 43vw, (max-width: 991px) 40vw, (max-width: 1439px) 39vw, 568px"
                    srcSet={study.imgSrcSet}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <div className="cms-footer-btn">
        <a href="/case-studies" className="view-case-studies w-inline-block">
          <div className="text-block-59">View Case Studies</div>
        </a>
      </div>
    </section>
    <section className="section_ctc-d2c ctc-mobile">
      <div className="div-block-22">
        <div className="subtitle-h1-center-aligned">
          Faster Websites. Higher conversion. More revenue.
        </div>
      </div>
    </section>
    </>
  );
};

export default CaseStudy;
