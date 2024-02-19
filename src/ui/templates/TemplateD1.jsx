import { useState } from 'react'
import { selectUserData } from "../../reduxToolkit/FormDataSlice.jsx";
import { useSelector } from "react-redux";

function TemplateD1() {
  const [count, setCount] = useState(0)
  const userInputData = useSelector(selectUserData)
  return (
    <div className='w-[210mm] h-[297mm] lg:max-h-[297mm] lg:overflow-auto flex flex-row;  border-[2px] border-color: rgb(0 0 0) mt-[-170px]'style={{ transform: 'scale(0.7)' }}>
      <div className="bg-[rgb(39,55,85)] w-[150%] text-[rgb(252,255,250)] grow">
        <div className="leftimgbox">
          <div className="img">
            <div className="w-[200px] h-[200px] bg-[black] ml-10 mt-10 p-2.5 rounded-[50%]"></div>
          </div>
          <div className="mt-[-0px] text-[40px] font-bold ml-10" ><p className="text-[rgb(252,255,250)]">Devraj Patil</p></div>
          <div className="text-xl font-medium mt-[-0px] ml-[70px]"><p>Software engineer</p></div>
        </div>

        <div className="w-4/5 bg-white text-[rgb(255,0,0)] ml-10 mt-5"><hr /></div>


        <div className="text-[rgb(167,27,36)] ml-10 mt-5 ">
          <h3 className='text-3xl font-semibold text-[rgb(252,255,250)] mt-[60px]'>EDUCATION</h3>
          <p className='text-l font-medium text-[rgb(224,231,239)] mt-5'>kuugsu fsisd ksuvd</p>
          <p className='text-l font-medium text-[rgb(224,231,239)] mt-5'>kuugsu fsisd ksuvd</p>
          <p className='text-l font-medium text-[rgb(224,231,239)] mt-5'>kuugsu fsisd ksuvd</p>
          {/*<h3 className='text-3xl font-semibold text-[rgb(252,255,250)] mt-[70px]'>Hobbies</h3>
          <p className='text-l font-medium text-[rgb(224,231,239)] mt-5'>drhdf</p>
          <p className='text-l font-medium text-[rgb(224,231,239)] mt-5'>drhdf</p>
  <p className='text-l font-medium text-[rgb(224,231,239)] mt-5'>drhdf</p>  */}
  {/* Adding additional sections based on userData */}
      {/* Languages */}
      {userInputData && userInputData.language ? (
        <>
          <h3 className='text-3xl font-semibold text-[rgb(252,255,250)] mt-[60px]'>LANGUAGES</h3>
          {userInputData.language.map((lan) => {
            return (
              <ul
                key={lan[2]}
                className=""
              >
                <li className="list-item-D1 text-l font-medium text-[rgb(224,231,239)] mt-5">
                  {lan[0]} - {lan[1]}
                </li>
              </ul>
            );
          })}
        </>
      ) : null}
        </div>
      </div>

      <div className="bg-[#FFFFFF]">


        <div className="text-xl font-medium text-black ml-10 mt-20 ">
          <h2 className='text-3xl font-bold text-[rgb(2,4,2)]'>Profile</h2>
          <p className='mt-5 text-base font-medium text-[rgb(89,88,90)] '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo 
            veritatis mollitia voluptates reiciendis deleniti error quasi
             dolorum dignissimos rem? Adipisci error facere aspernatur delectus 
             consequatur dolorem ducimus eligendi hic omnis.</p>
        </div>


        <div className="text-xl font-medium text-black ml-10 mt-5">
          <h2 className='text-3xl font-semibold text-[rgb(2,4,2)]'>Experience</h2>
          <ul className='mt-5 text-lg font-medium '>
            <li className='mt-5 text-base text-[rgb(89,88,90)]'>First</li>
            <li className='mt-2 text-base text-[rgb(89,88,90)]'>Fdfsrdst</li>
            <li className='mt-2 text-base text-[rgb(89,88,90)]'>sdgsdgt</li>
            <li className='mt-2 text-base text-[rgb(89,88,90)]'>Fisdg</li>
            <li className='mt-2 text-base text-[rgb(89,88,90)]'>Fsdgsdt</li>
            <li className='mt-2 text-base text-[rgb(89,88,90)]'>Firesnt</li>
            <li className='mt-2 text-base text-[rgb(89,88,90)]'>Fefhehge</li>
          </ul>
        </div>


        <div className="text-xl font-medium text-black ml-10 mt-5">
          <h2 className='text-3xl font-semibold text-[rgb(2,4,2)]'>Skills</h2>
          <ul className='pt-5 text-lg font-medium '>
            <li className='mt-2 text-base text-[rgb(89,88,90)]'>First</li>
            <li className='mt-2 text-base text-[rgb(89,88,90)]'>Fdfsrdst</li>
            <li className='mt-2 text-base text-[rgb(89,88,90)]'>sdgsdgt</li>
            <li className='mt-2 text-base text-[rgb(89,88,90)]'>Fisdg</li>
            <li className='mt-2 text-base text-[rgb(89,88,90)]'>Fsdgsdt</li>
            <li className='mt-2 text-base text-[rgb(89,88,90)]'>Firesnt</li>
            <li className='mt-2 text-base text-[rgb(89,88,90)]'>Fefhehge</li>
          </ul>
        </div>
        {/* Adding additional sections based on userData */}
      {/* Projects */}
      {userInputData && userInputData.projects ? (
        <>
         <div className="text-xl font-medium text-black ml-10 mt-5">
          <h2 className='text-3xl font-semibold text-[rgb(2,4,2)]'>Projects</h2>
          {userInputData.projects.slice(1).map((project) => {
            return (
              <ul
                key={project.id}
                className="pt-5 text-lg font-medium"
              >
               
                  <div className="project-header mt-2 text-base text-[rgb(89,88,90)]">
                    <h2 className="text-2xl heading-D1">{project.Heading}</h2>
                    <a
                      href={project.Link}
                      className="text-md text-cyan-600 cursor-pointer"
                    >
                      {project.Link}
                    </a>
                  </div>
                  <div className='max-w-[400px] text-wrap pt-[10px]'
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                
              </ul>
            );
          })}
          </div>
        </>
      ) : null}

      {/* Custom Form */}
      {userInputData && userInputData.customData
        ? userInputData.customData.slice(1).map((customData) => {
            return (
              <ul
                key={customData.id}
                className="pt-5 text-lg font-medium "
              >
               <div className="project-header mt-2 text-base text-[rgb(89,88,90)]">
                    <h2 className="text-2xl heading-D1">  {customData.Custom_Heading}</h2>
                  <div
                  className='max-w-[400px] text-wrap pt-[10px]'
                    dangerouslySetInnerHTML={{ __html: customData.description }}
                  />
                </div>
              </ul>
            );
          })
        
        : null}
      </div>
    </div>
  )
}

export default TemplateD1