import React from "react";
import { selectUserData } from "../../reduxToolkit/FormDataSlice.jsx";
import { useSelector } from "react-redux";
//import { ProjectsTab } from "../../components/Form/MultiForms/ProjectsForm.jsx";

function MainTemplate() {
  const userInputData = useSelector(selectUserData);
  return (
     <div className="template main-template hidden mt-[20px] lg:block  w-[210mm] h-[297mm]   lg:max-h-[297mm] lg:overflow-auto mb-[150px]   shadow-lg mx-20 px-[50px] pb-[100px] lg:mx-0 shadow-[#9333ea] relative z-0 tracking-wider"
     style={{ transform: "scale(0.7)" , marginTop: "-120px"}}>
      {/*Template Header */}
      <div className="header-wrapper pt-5 hidden lg:block ">
        <header className="flex justify-between  ">
          {/* left */}
          <div className="left flex  w-[300px]  justify-between gap-[10px] ">
            {/* logo */}
            <div className="mt-3">
              <button className="logo  p-4 bg-[#de8535] rounded-full ">
                <span className="text-white text-4xl  font-serif">
                  {" "}
                  {userInputData && userInputData.firstName
                    ? userInputData.firstName[0]
                    : "C"}
                </span>
                <span className="text-white text-4xl font-serif">
                  {userInputData && userInputData["last-name"]
                    ? userInputData["last-name"][0]
                    : "C"}{" "}
                </span>
              </button>
            </div>
            {/* name & job */}
            <div className="name-job ">
              <div className="firstName text-[#de8535] font-serif text-4xl">
                {userInputData && userInputData.firstName
                  ? userInputData.firstName
                  : "Chris"}
              </div>
              <div className="lastName text-[#de8535] font-serif text-4xl">
                {userInputData && userInputData["last-name"]
                  ? userInputData["last-name"]
                  : "Candidate"}
              </div>
              <div className="job-title w-[250px] text-md font-serif ">
                Human Resource Manager
              </div>
            </div>
            {/* right */}
            <div className="right  text-custom-orange absolute right-[60px]">
              <div className="adress text-[15px]">
                {userInputData && userInputData.address
                  ? userInputData.address
                  : "Sunnydale Lane"}
              </div>
              <div className="adress-city  flex  gap-[5px]">
                <div className="city text-[15px]">
                  {userInputData && userInputData.city
                    ? userInputData.city
                    : "Plano"}
                </div>
                <div className="city-code text-[15px]">
                  {userInputData && userInputData["city-code"]
                    ? userInputData["city-code"]
                    : "TX 75071"}
                </div>
              </div>
              <div className="adress-state-country  flex   gap-[5px]">
                <div className="state text-[15px]">
                  {userInputData && userInputData.state
                    ? userInputData.state
                    : "Texas"}
                </div>
                <div className="country text-[15px]">
                  {userInputData && userInputData.country
                    ? userInputData.country
                    : "USA"}
                </div>
              </div>
              <div className="email text-[15px]">
                {userInputData && userInputData["email-address"]
                  ? userInputData["email-address"]
                  : "email@youremail.com"}
              </div>
              {/* <div className="phone text-xs">{userInputData && userInputData.address ? userInputData.address : "(469) 385-2948"}</div> */}
            </div>
          </div>
        </header>
        <p className="description text-[15px] leading-[24px] text-gray-500 pt-4 leading-3">
          Human resources generalist with 8 years of experience in HR, including
          hiring and terminating, disciplining employees and helping department
          managers improve employee performance. Worked with labor unions to
          negotiate compensation packages for workers. Organized new hire
          training initiatives as well as ongoing training to adhere to
          workplace safety standards. Worked with OSHA to ensure that all safety
          regulations are followed.
        </p>
      </div>
      {/* Template body */}
      <div className=" hidden lg:block">
        <h1 className=" text-serif text-2xl text-[#de8535] border-b-2 border-[#de8535] pt-2">
          Professional Experience
        </h1>
        <div className="exp-1 flex items-center w-[70%]  gap-3  font-serif pt-2 lg:w-[100%]">
          <h2>Human Resources Manager</h2>
          <div className="duration  text-gray-500 ">
            XYZ Company, City, State | June 2020 - Present
          </div>
        </div>
        <ul className="text-[15px] text-gray-500 leading-[25px] ">
          <li className="list-item">
            Implement effective company policies to ensure that all practices
            comply with labor and employment regulations{" "}
          </li>
          <li className="list-item">
            Increased employee retention rates by managing workplace
            satisfaction to an over 90% success rate by creating and maintaining
            a positive work environment{" "}
          </li>
          <li className="list-item">
            Develop targeted outreach practices to increase minority recruitment
            and ensure compliance with affirmative action policies{" "}
          </li>
          <li className="list-item">
            Monitor scheduled in and out times as well as employee breaks to
            ensure that proper employment laws are met{" "}
          </li>
        </ul>
        <div className="exp-2 flex items-center w-[70%] pt-[15px] gap-3 font-serif lg:w-[90%]">
          <h2>Human Resources Associate</h2>
          <div className="duration text-[15px] text-gray-500">
            XYZ Company, City, State | June 2020 - Present
          </div>
        </div>
        <ul className="text-[15px] text-gray-500 leading-[25px]">
          <li className="list-item">
            Implement effective company policies to ensure that all practices
            comply with labor and employment regulations{" "}
          </li>
          <li className="list-item">
            Increased employee retention rates by managing workplace
            satisfaction to an over 90% success rate by creating and maintaining
            a positive work environment{" "}
          </li>
          <li className="list-item">
            Develop targeted outreach practices to increase minority recruitment
            and ensure compliance with affirmative action policies{" "}
          </li>
        </ul>
        <h1 className="education text-2xl text-[#de8535] border-b-2 border-[#de8535] pt-2">
          Education
        </h1>
        <div className="edu-1 flex items-center w-[80%]  gap-3  font-serif pt-2 lg:w-[100%]">
          <h2>Masters in Human Resources</h2>
          <div className="duration text-[15px] text-gray-500">
            The University of Texas, Dallas | September 2007 - May 2011
          </div>
        </div>
        <ul className="text-[15px] text-gray-500 leading-5">
          <li className="list-item">Academic Awardee of AY 2007-2008</li>
        </ul>
        <h1 className="skills text-2xl text-[#de8535] border-b-2 border-[#de8535] pt-2">
          Key Skills
        </h1>
        <ul className="text-[15px] text-gray-500 leading-5  pt-2">
          <li className="skill">Detail oriented</li>
          <li className="skill">Well-versed in Texas employment law</li>
          <li className="skill">
            Excellent written and oral communication skills
          </li>
          <li className="skill">
            Develops positive workplace relationships
          </li>
        </ul>
      </div>

      {/* Adding additional sections based on userData */}
      {/* Languages */}
      {userInputData && userInputData.language ? (
        <>
          <h1 className="languages  text-2xl text-[#de8535] border-b-2 border-[#de8535] pt-2">
            Languages
          </h1>
          {userInputData.language.map((lan) => {
            return (
              <ul
                key={lan[2]}
                className="text-[15px] text-gray-500 leading-5  pt-2 flex gap-[10px]"
              >
                <li className="list-item text-black  w-[150px]">
                  {lan[0]} - {lan[1]}
                </li>
              </ul>
            );
          })}
        </>
      ) : null}

      {/* Projects */}
      {userInputData && userInputData.projects ? (
        <>
          <h1 className="projects  text-2xl text-[#de8535] border-b-2 border-[#de8535] pt-2">
            Projects
          </h1>
          {userInputData.projects.slice(1).map((project) => {
            return (
              <ul
                key={project.id}
                className="text-[15px] text-gray-500 leading-5  pt-2 flex gap-[10px] "
              >
                <li className=" w-full ">
                  <div className="project-header flex flex-row gap-[15px] items-center">
                    <h2 className="text-lg heading">{project.Heading}</h2>
                    <a
                      href={project.Link}
                      className="text-md text-cyan-600 cursor-pointer"
                    >
                      {project.Link}
                    </a>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                </li>
              </ul>
            );
          })}
        </>
      ) : null}

      {/* Custom Form */}
      {userInputData && userInputData.customData
        ? userInputData.customData.slice(1).map((customData) => {
            return (
              <ul
                key={customData.id}
                className="text-[15px] text-gray-500 leading-5  pt-2 flex gap-[10px] "
              >
                <li className=" w-full ">
                  <h1 className="custom-data  text-2xl text-[#de8535] border-b-2 border-[#de8535] pt-2">
                    {customData.Custom_Heading}
                  </h1>
                  <div
                    dangerouslySetInnerHTML={{ __html: customData.description }}
                  />
                </li>
              </ul>
            );
          })
        : null}
    </div>
  );
}

export default MainTemplate;
