import React from "react";  
import Header from "./Header.jsx";
import tempImg from '../assets/layout.png'
import viewImg from "../assets/view.png"
import PersonaIInfo from "../components/Form/PersonaIInfo.jsx";
import MainTemplate from "./templates/MainTemplate.jsx";
import Footer from "./Footer.jsx";
import MultiStepForm from '../components/Form/MultiStepForm.jsx';

// Templates Import
import TemplateS1 from "./templates/TemplateS1.jsx";
import TemplateS2 from "./templates/TemplateS2.jsx";
import TemplateD1 from "./templates/TemplateD1.jsx";
import TemplateD2 from "./templates/TemplateD2.jsx";
import TemplateD3 from "./templates/TemplateD3.jsx";


function DesktopView() {
  return (
    <div>
    <div className="desktop-view flex w-[97%] pt-[20px]   mx-[30px] ">
      <Header />
      <div className="left w-[45%] ">
        {/* navbar */}
        <div className=" bg-white  flex items-center justify-between  w-[85%]">
        {/* <button className="flex items-center gap-2 border border-sky-500  rounded-2xl py-1 px-2 hover:bg-sky-500 hover:text-white transition duration-700 shadow-[#9333ea] shadow-md">
          <img src={tempImg} alt="" className="w-4 hover:text-white" />
          <span className="hover:text-white text-sky-500">Templates</span>
        </button> */}
        <div className="right-buttons flex gap-2 w-[130px] items-center">
          {/* <button className="flex flex-col p-1 lg:p-2 lg:shadow-[#9333ea] lg:shadow-md items-center rounded-full shadow-xl hover:bg-sky-500 hover:text-white transition duration-700 ">
            <img src={viewImg} alt="" className="w-4 " />
            <span className="text-sky-500 text-[10px] hover:text-white lg:text-md ">
              Preview
            </span>
          </button> */}
          {/* <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center flex items-center gap-[5px]"
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button> */}
        </div>
      </div>
        <MultiStepForm />
      </div>

      <div className="right  w-[60%] lg:w-[68%]   xl:w-[60%] ">
          {/* <MainTemplate />   */}
          <TemplateS1/>  

      </div>
    </div>
    <Footer />
    </div>
  );
}

export default DesktopView;
