import React, { useEffect, useState } from "react";
//import "./Navbar.css"; // Add CSS for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
            fetch('http://localhost:1337/api/menus') // Adjust URL based on your Strapi setup
                .then(response => response.json())
                .then(data => setMenus(data.data))
                .catch(error => console.error('Error fetching services:', error));
        }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="navbar-logo">
          <div className="boco-logo-d2c">boco</div>
        </a>

        {/* Navigation Links */}
        <nav style={{ transition: "height 0.5s", transform: "translateY(0px) translateX(0px)" }}
 className={`navbar-menu ${isOpen ? "open" : ""} navbar_menu is-page-height-tablet nav-menu-d2c w-nav-menu`}>
          {menus.map((menu,idx)=>(
            <a key={idx} href={menu.link} className="nav-link navbar_link link-1-d2c w-nav-link">{menu.menu}</a>
          ))}
        </nav>

        {/* Talk to Us Button */}
        <div className="navbar-buttons">
          <a href="https://qui8d48qnm9.typeform.com/to/CirpyVmQ" className="button-d2c-1 talk-btn-d2c navbar-top-btn w-inline-block">
            <div className="text-d2cxx talk-us-d2c">Talk to Us</div>
            <span className="arrow-div-d2c">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="white" />
                <g>
                  <path d="M18.3 29.6L17.25 28.6L27.09 18.75H18.14V17.25H29.64V28.75H28.14V19.8L18.3 29.6Z" fill="#060237" />
                </g>
              </svg>
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          <span className="menu-icon">
            <span className="line line-top"></span>
            <span className="line line-middle"></span>
            <span className="line line-bottom"></span>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
