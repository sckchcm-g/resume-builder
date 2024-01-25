import React from 'react'
import '../App.css'
function PreviewBody() {
  return (
    <div>
      <h1 className=' text-serif text-xl text-[#de8535] border-b-2 border-[#de8535] pt-2'>Professional Experience</h1>
      <div className='exp-1 flex items-center w-[70%]  gap-3  font-serif pt-2 lg:w-[80%]'><h2>Human Resources Manager</h2><div className="duration text-[10px] text-gray-500 ">XYZ Company, City, State | June 2020 - Present</div></div>
      <ul className='text-[10px] text-gray-500 leading-5'>
        <li>Implement effective company policies to ensure that all practices comply with labor and employment regulations </li>
        <li>Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment </li>
        <li>Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies </li>
        <li>Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met </li>
      </ul>
      <div className='exp-2 flex items-center w-[70%]  gap-3 font-serif lg:w-[90%]'  ><h2>Human Resources Associate</h2><div className="duration text-[10px] text-gray-500">XYZ Company, City, State | June 2020 - Present</div></div>
      <ul className='text-[10px] text-gray-500 leading-5'>
        <li>Implement effective company policies to ensure that all practices comply with labor and employment regulations </li>
        <li>Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment </li>
        <li>Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies </li>
      </ul>
      <h1 className="education text-xl text-[#de8535] border-b-2 border-[#de8535] pt-2">Education</h1>
      <div className='edu-1 flex items-center w-[80%]  gap-3  font-serif pt-2 lg:w-[90%]'><h2>Masters in Human Resources</h2><div className="duration text-[10px] text-gray-500">The University of Texas, Dallas  | September 2007  - May 2011</div></div>
      <ul className='text-[10px] text-gray-500 leading-5'>
        <li>Academic Awardee of AY 2007-2008</li>
      </ul>
      <h1 className="skills text-xl text-[#de8535] border-b-2 border-[#de8535] pt-2">Key Skills</h1>
      <ul className='text-[10px] text-gray-500 leading-5 pb-[150px] pt-2'>
      <li>Detail oriented</li>
      <li>Well-versed in Texas employment law</li>
      <li>Excellent written and oral communication skills</li>
      <li>Develops positive workplace relationships</li>
      </ul>
    </div>
  )
}

export default PreviewBody
