import React from "react";  
import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
import PersonaIInfo from "../components/Form/PersonaIInfo.jsx";
import Template1 from "./templates/Template1.jsx";
import Footer from "./Footer.jsx";
function DesktopView() {
  return (
    <div className="desktop-view flex w-[100%] pt-10  bg-red-200 mx-[20px]">
      <Header />
      <div className="left w-[45%]">
        <Navbar />
        <PersonaIInfo />
      </div>
      <div className="right  w-[55%] flex flex-col justify-center">
        <Template1 />
      </div>
      <Footer />
    </div>
  );
}

export default DesktopView;
