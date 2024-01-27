import React from "react";
import tempImg from "../../assets/layout.png";
import viewImg from "../../assets/view.png";
function MobileFooter() {
  return (
    <footer className="mobilefooter flex items-center justify-between px-2  py-3 lg:py-0 lg:pb-3 md:justify-between md:px-[30px]  md:pt-[80px] ">
      <button className="flex items-center gap-2 border border-sky-500  rounded-2xl py-1 px-2 hover:bg-sky-500 hover:text-white transition duration-700 shadow-[#9333ea] shadow-md">
        <img src={tempImg} alt="" className="w-4 hover:text-white" />
        <span className="hover:text-white text-sky-500">Templates</span>
      </button>
      <div className="right-buttons flex gap-2 w-[130px]    ">
        <button className="flex flex-col p-1 lg:p-2 lg:shadow-[#9333ea] lg:shadow-md items-center rounded-full shadow-xl hover:bg-sky-500 hover:text-white transition duration-700 ">
          <img src={viewImg} alt="" className="w-4 " />
          <span className="text-sky-500 text-[10px] hover:text-white lg:text-md ">
            Preview
          </span>
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Next
          {/* <svg
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
          </svg> */}
        </button>
      </div>
    </footer>
  );
}

export default MobileFooter;
