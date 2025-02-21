import React, { useEffect, useState } from "react";

const Footer = () => {
  const [menu, setMenu] = useState([]);
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    // Fetch Menu Data
    fetch("http://localhost:1337/api/menus")
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setMenu(data.data); // Extract attributes
        }
      })
      .catch((error) => console.error("Error fetching menu:", error));

    // Fetch Footer Data
    fetch("http://localhost:1337/api/footers?populate=*") // Ensure relations are populated
      .then((response) => response.json())
      .then((data) => {
        if (data.data && data.data.length > 0) {
          setFooterData(data.data[0].footer.attributes); // Extract attributes
        }
      })
      .catch((error) => console.error("Error fetching footer:", error));
  }, []);

  return (
    <section className="footer-d2c">
      <div className="footer-container-wrapper-d2c">
        {/* Left Section */}
        <div className="footer-left-2-d2c">
          <a href="/" aria-current="page" className="w-inline-block w--current">
            <div className="boco-logo-d2c footer-logo">{footerData?.logo || "BOCO"}</div>
          </a>
          <p className="paragraph-7">{footerData?.description || "Loading..."}</p>
          <div className="w-layout-blockcontainer social-icon-link-container-d2c w-container">
            <div className="social-icon-list-d2c">
              {footerData?.socialLinks?.map((social, index) => (
                <a key={index} href={social.href} className="w-inline-block">
                  <img
                    src={social.src}
                    loading="lazy"
                    width="53"
                    height="53"
                    alt={social.alt}
                    className="image-118"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-footer-d2c">
          <div className="right-footer-component-d2c">
            <h4 className="heading-13">Products</h4>
            {menu.map((item, index) => (
              <a key={index} href={item.link} className="w-inline-block">
                <div className={`text-block-${index + 9}`}>{item.menu}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-layout-blockcontainer container-24 footer-line-d2c w-container"></div>
      <div className="columns w-row">
        <div className="footer-bottom-d2c column w-col w-col-6">
          <div className="copyright-d2c">© Copyright,</div>
          <div className="footer-boco-d2c">{footerData?.copyright?.company || "BOCO"}</div>
          <div className="footer-2024-d2c">{footerData?.copyright?.year || "2024"}</div>
        </div>
      </div>
      <div className="footer-bottom-wrapper-d2c">
        <div className="mobile-footer-bottom-2-d2c">
          <div className="text-block-15">© Copyright,</div>
          <div className="text-block-16">{footerData?.copyright?.company || "BOCO"}</div>
          <div className="text-block-17">{footerData?.copyright?.year || "2024"}</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
