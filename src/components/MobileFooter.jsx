import React from 'react'
import tempImg from '../assets/layout.png'
import viewImg from '../assets/view.png'
function MobileFooter() {
  return (
    <footer className='mobilefooter flex items-center justify-between px-2  py-3 lg:py-0 lg:pb-3 md:justify-between md:px-[30px]  md:pt-[80px] '>
        <button className='flex items-center gap-2 border border-sky-500  rounded-2xl py-1 px-2 hover:bg-sky-500 hover:text-white transition duration-700 shadow-[#9333ea] shadow-md'><img src={tempImg} alt="" className='w-4 hover:text-white'/><span className='hover:text-white text-sky-500'>Templates</span></button>
        <div className="right-buttons flex gap-2 w-[130px]   ">
        <button className='flex flex-col p-1 lg:p-2 lg:shadow-[#9333ea] lg:shadow-md items-center rounded-full shadow-xl hover:bg-sky-500 hover:text-white transition duration-700 '><img src={viewImg} alt="" className='w-4 '/><span className='text-sky-500 text-[10px] hover:text-white lg:text-md '>Preview</span></button>
        <button className='bg-purple-600 rounded-3xl  flex items-center gap-1.5 text-sm py-0 px-2.5 text-white font-semibold'>Next <svg  width="13" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='stroke-white' d="M6.64 12.374l5.703-5.703L6.641.97M.938 6.67h11.405" stroke="#2A64AD" stroke-width="1.069" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
        </div>
    </footer>
  )
}

export default MobileFooter
