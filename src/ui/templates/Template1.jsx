function Template1() {
  return (
    <>
      {/* header */}
      <div className="header-wrapper pt-5 ">
        <header className="flex justify-between ">
          <div className="left flex  w-[280px] justify-between">
            <div className="mt-3">
              <button className="logo p-4  bg-[#de8535] rounded-full">
                <span className="text-white text-4xl  font-serif">C</span>
                <span className="text-white text-4xl font-serif">C</span>
              </button>
            </div>
            <div>
              <div className="firstName text-[#de8535] font-serif text-4xl">
                Chris
              </div>
              <div className="lastName text-[#de8535] font-serif text-4xl">
                Candidate
              </div>
              <div className="job-title text-md font-serif">
                Human Resource Manager
              </div>
            </div>
          </div>
          <div className="right text-custom-orange ">
            <div className="adress text-xs">4759 Sunnydale Lane</div>
            <div className="zip text-xs">Plano, TX 75071</div>
            <div className="email text-xs">email@youremail.com</div>
            <div className="phone text-xs">(469) 385-2948</div>
          </div>
        </header>
        <p className="description text-[10px] text-gray-500 pt-4">
          Human resources generalist with 8 years of experience in HR, including
          hiring and terminating, disciplining employees and helping department
          managers improve employee performance. Worked with labor unions to
          negotiate compensation packages for workers. Organized new hire
          training initiatives as well as ongoing training to adhere to
          workplace safety standards. Worked with OSHA to ensure that all safety
          regulations are followed.
        </p>
      </div>
      {/* previewbody */}
      <h1 className=" text-serif text-xl text-[#de8535] border-b-2 border-[#de8535] pt-2">
        Professional Experience
      </h1>
      <div className="exp-1 flex items-center w-[70%]  gap-3  font-serif pt-2 lg:w-[80%]">
        <h2>Human Resources Manager</h2>
        <div className="duration text-[10px] text-gray-500 ">
          XYZ Company, City, State | June 2020 - Present
        </div>
      </div>
      <ul className="text-[10px] text-gray-500 leading-5">
        <li>
          Implement effective company policies to ensure that all practices
          comply with labor and employment regulations{" "}
        </li>
        <li>
          Increased employee retention rates by managing workplace satisfaction
          to an over 90% success rate by creating and maintaining a positive
          work environment{" "}
        </li>
        <li>
          Develop targeted outreach practices to increase minority recruitment
          and ensure compliance with affirmative action policies{" "}
        </li>
        <li>
          Monitor scheduled in and out times as well as employee breaks to
          ensure that proper employment laws are met{" "}
        </li>
      </ul>
      <div className="exp-2 flex items-center w-[70%]  gap-3 font-serif lg:w-[90%]">
        <h2>Human Resources Associate</h2>
        <div className="duration text-[10px] text-gray-500">
          XYZ Company, City, State | June 2020 - Present
        </div>
      </div>
      <ul className="text-[10px] text-gray-500 leading-5">
        <li>
          Implement effective company policies to ensure that all practices
          comply with labor and employment regulations{" "}
        </li>
        <li>
          Increased employee retention rates by managing workplace satisfaction
          to an over 90% success rate by creating and maintaining a positive
          work environment{" "}
        </li>
        <li>
          Develop targeted outreach practices to increase minority recruitment
          and ensure compliance with affirmative action policies{" "}
        </li>
      </ul>
      <h1 className="education text-xl text-[#de8535] border-b-2 border-[#de8535] pt-2">
        Education
      </h1>
      <div className="edu-1 flex items-center w-[80%]  gap-3  font-serif pt-2 lg:w-[90%]">
        <h2>Masters in Human Resources</h2>
        <div className="duration text-[10px] text-gray-500">
          The University of Texas, Dallas | September 2007 - May 2011
        </div>
      </div>
      <ul className="text-[10px] text-gray-500 leading-5">
        <li>Academic Awardee of AY 2007-2008</li>
      </ul>
      <h1 className="skills text-xl text-[#de8535] border-b-2 border-[#de8535] pt-2">
        Key Skills
      </h1>
      <ul className="text-[10px] text-gray-500 leading-5 pb-[150px] pt-2">
        <li>Detail oriented</li>
        <li>Well-versed in Texas employment law</li>
        <li>Excellent written and oral communication skills</li>
        <li>Develops positive workplace relationships</li>
      </ul>
    </>
  );
}

export default Template1;
