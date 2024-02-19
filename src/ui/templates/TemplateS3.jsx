
function TemplateS3() {
  return (
    <>
    <div className="a4-sheet w-[793px] h-[1123px] bg-[rgb(221,221,221)]" style={{ transform: "scale(0.7)", marginTop: "-150px" }}>
      {/* pfp name job and skill here  */}
      <div className="topboxes flex justify-evenly">

        {/* pfp and contact   */}
        <div className="highlighted-box bg-white flex items-center flex-col w-[367px] h-[530px] m-[15px] rounded-[50px]">
          <img src="" className='pfp w-[180px] h-[180px] bg-[white] mt-10 rounded-[50%] border-2 border-solid border-[black]'/>
          <h2 className="text-[40px] text-[black] m-5">Contact</h2>
          <div className="contacts">
            <p className='contact-details mt-5 text-xl'>123-456-7895</p>
            <p className='contact-details mt-5 text-xl'>https://github.com/CDCSomeone</p>
            <p className='contact-details mt-5 text-xl'>Someone@gmail.com</p>
          </div>
        </div>

        {/* name and about  */}
        <div className='unhighlighted-box flex items-center flex-col w-[367px] h-[530px] m-[15px]'>  
          <div className="name-details flex flex-col items-center mt-20 mb-5">
          <h2 className="text-xl text-[black] mt-[15px] text-[45px] mx-[5px]">Saksham</h2>
          <h2 className="text-xl mt-[15px] text-[black] text-[45px] mx-[5px]">Gupta</h2>
          </div>
          <hr className='name-line w-[250px] h-[5px] bg-[black] rounded-[50px]'/>
          <h2 className="text-xl text-[black] m-5" >MERN Stack Developer</h2>
          <div className='about-section '>
            <h2 className="text-[black] text-3xl m-2.5">About me</h2>
            <p className="text-[black] text-lg m-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta repellat nulla enim vel veniam, maiores dignissimos, sapiente vero tempore amet consequuntur consectetur debitis. Veniam repudiandae cupiditate est, nam explicabo aliquam.</p>
          </div>
        </div>
      </div>

      {/* lower box  */}
      <div className="lowboxes flex justify-evenly">

        {/* career and skill  */}
        <div className="unhighlighted-box flex items-center flex-col w-[367px] h-[530px] m-[15px]">
          <div className="edu-exp">
            <div className="edu-details w-[350px] h-60 p-2.5">
              <h2 className=" text-[black] text-3xl">Education</h2>
              <p className="text-[black] text-xl m-6">MCA from ABC univ</p>
              <p className="text-[black] text-xl m-6">B. Tech from ABC univ</p>
              <p className="text-[black] text-xl m-6">M. Tech from PQR univ</p>
            </div>
            <div className="exp-details">
              <h2 className="text-[black] text-3xl">Experience</h2>
              <p className="text-[black] text-xl m-6">Internship at ABC</p>
              <p className="text-[black] text-xl m-6">Internship at PQR</p>
              <p className="text-[black] text-xl m-6">Worked at XYZ</p>
            </div>
          </div>
        </div>

        {/* education and language   */}
        <div className='highlighted-box items-start bg-white flex flex-col w-[367px] h-[530px] m-[15px] rounded-[50px] '>  
          <div className="skills-area p-5">
            <h2 className="text-[black] text-3xl">Tech Skills</h2>
            <div className="skills-count">
            <p className="text-[black] text-xl text-center m-5">Frontend</p>
            <p className="text-[black] text-xl text-center m-5">Backend</p>
            <p className="text-[black] text-xl text-center m-5">Database</p>
            <p className="text-[black] text-xl text-center m-5">Java</p>
            </div>
          </div>
          <div className="languages p-5">
            <h2 className="text-[black] text-3xl">Languages</h2>
            <div className="language-count grid grid-cols-[repeat(3,1fr)] m-2.5">
            <p className="text-[black] text-xl text-center m-5">English</p>
            <p className="text-[black] text-xl text-center m-5">Hindi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default TemplateS3