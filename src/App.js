import React from "react";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Homepage from "./components/Homepage";
// import ServicesPage from "./components/ServicesPage";
// import Features from "./components/Features";
import Leftframe from "./components/Leftframe";
import BrandPartners from "./components/BrandPartner";
import D2CCarousel from "./components/D2CCarousel";
import ServiceSection from "./components/ServiceSection";
import CaseStudy from "./components/CaseStudy";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Leftframe />
      <BrandPartners />
      <D2CCarousel />
      <ServiceSection />
      <CaseStudy /> 
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;
