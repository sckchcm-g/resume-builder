import React from 'react'
function TemplateS1() {

  const skillarray = ["Frontend", "Bakcend", "Python", "C++"]
  const EduDetails = ["Completed 10th and 12th from ICSE School","Completed B.Tech in CSE from ABC University", "Completed M.Tech in CSE from ABC University"]
  return (
    <div className='shadow-lg shadow-[#9333ea]'>
        <div className="a4-sheet  bg-white w-[794px] h-[1123px] flex flex-col items-center mt-[50px]">

            {/* coloured box area  */}
            <div className="pfp-details  flex flex-row items-center justify-between bg-[rgb(99,133,255)] h-[220px] w-[750px] m-[50px] rounded-[120px_5px_50px_120px]">
                <div className="pfp  bg-[white] w-[180px] h-[180px] border m-[15px] rounded-[50%] border-solid border-[gray]"/>

                <div className="details-space  flex flex-col items-center justify-center w-[220px]">
                  
                  {/* name  */}
                  <div className="name flex flex-row items-center justify-center">
                      <p className='text-3xl font-[bold] text-[white] m-0.5'>Saksham</p>
                      <p className='text-3xl font-[bold] text-[white] m-0.5'>Gupta</p>
                  </div>
                  <div className='w-[300px] h-px bg-white m-2.5 border-[none]'/>

                  {/* Occupation  */}
                  <div className="occupation">
                    <p className='text-xl font-[bold] text-[white] m-0.5'>MERN Stack Developer</p>
                  </div>
                </div>

                {/* mail and phone number  */}

                <div className='email-phno-space  flex flex-col items-end w-40 text-[white] text-sm m-2.5'>
                  <div className="email font-medium">
                      <p className='m-1'>oDfJt@example.com</p>
                  </div>
                  <div className="phno font-medium">
                      <p className='m-1'>1234567890</p>
                  </div>

                  {/* Address line  */}
                  <div className="city-and-state font-semibold">
                    <p>121-a9, ABC Highrise,</p>
                  </div>
                  <div className="city-and-state font-semibold">
                    <p>Jaipur, Rajasthan</p>
                  </div>
                </div>

            </div>
            {/* colorless area  */}
            <div className='data-space'>

              {/* About me  */}
              <div className="about-me h-[380px] bg-[rgba(255,255,255,0.448)] w-[720px]">
                  <div className="about">
                  <h2 className='text-[25px] font-[bold] text-[rgb(99,133,255)] m-[15px]'>About me</h2>
                  <div className='text-[17px] text-[rgb(84,84,84)] m-[15px]'>
                    <p>Human resources generalist with 8 years of experience in HR, including hiring and terminating,
                      disciplining employees and helping department managers improve employee performance. Worked
                      with labor unions to negotiate compensation packages for workers. Organized new hire training
                      initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA
                      to ensure that all safety regulations are followed.</p>
                  </div>
                  </div>

                  <div className="professional-experience">
                    <h2 className='text-[25px] font-[bold] text-[rgb(99,133,255)] m-[15px]'>Professional Experience</h2>
                    <p className='text-[17px] text-[rgb(84,84,84)] m-[15px]'>Worked with labor unions to negotiate compensation packages for workers. Organized new hire training
                      initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA
                      to ensure that all safety regulations are followed.</p>
                  </div>
              </div>

              <hr className='w-[600px] h-[5px] bg-[rgb(99,133,255)] shadow-[0_0_5px_2px_rgba(82,160,255,0.8)] rounded-[90%] border-[none]'/>

              {/* Professional skills  */}
              <div className="skilldev flex flex-row items-center justify-between w-[700px] h-[280px] bg-[rgba(255,255,255,0.448)]">
                  <div className='skill-set w-[450px] h-[230px] text-base m-5 p-5 rounded-[20px]'>
                   <h2 className='text-[25px] font-[bold] text-[rgb(99,133,255)] m-[15px]'>Key Skills</h2>
                    <div className="skillarray">
                    {
                      skillarray.map((item)=>{
                        return <div className='flex m-4 flex-row items-center'><div className='w-[100px] h-3 bg-[rgb(99,133,255)] mx-2.5 my-0'/> <p>{item}</p></div>
                      })
                    }

                    </div>
                  </div>
                    
                  {/* education details  */}
                  <div className="educationbox">
                    <h2 className='text-[25px] font-[bold] text-[rgb(99,133,255)] m-[15px]'>Education</h2>
                    {
                      EduDetails.map((item)=>{
                        return <div className='flex flex-row items-center justify-start'><div className=" w-3 h-2.5 bg-[rgb(99,133,255)] m-2.5 rounded-[50px]"/><p>{item}</p></div>
                      })
                    }
                  </div>

              </div>

              <hr className='w-[600px] h-[5px] bg-[rgb(99,133,255)] shadow-[0_0_5px_2px_rgba(82,160,255,0.8)] rounded-[90%] border-[none]' />
            </div>
        </div>
    </div>
  )
}

export default TemplateS1