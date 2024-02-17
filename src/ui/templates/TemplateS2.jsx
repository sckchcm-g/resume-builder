
function TemplateS2() {

  const workData = [ 'Has worked in CISCO for 5 years', 'work2', 'work3'];
  const professionalSkill = [ '10th and 12th from XYZ School', '4 years of B.Tech from ABC University', '2 years of M.tech from PQR University' ];
  const techSkill = ['Frontend', 'Backend', 'Testing', 'Devops'];

  return (
    <>
    <div className="a4-sheet w-[794px] h-[1122px] bg-white flex mt-10"  style={{ transform: 'scale(0.9)' }}>
      <div className="left-box">
            <div className="profile-space  w-[200px] h-[200px] bg-white mt-10 mx-10  rounded-[300px] border-[5px] border-solid border-[gold]" />
            <div className="top-curve w-[400px] h-[822px] bg-[gold] mx-2.5 my-[50px] rounded-[50px_50px_0px_0px]">
              <div className='data'>
                <div className='about-right pt-px text-center px-5'>
                  <h1 className="text-center text-[40px] pt-2.5 text-3xl my-10">About Me</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quisquam modi suscipit hic deleniti totam sint tempore vel velit! Perspiciatis, molestias maiores totam, minima excepturi accusantium nesciunt deserunt suscipit illo officia eaque blanditiis. Deserunt eveniet veritatis, sunt, quos, quis provident possimus illo eligendi veniam est molestias? Dicta, quo quod. Repudiandae.</p>
                </div>
              <hr className="my-4 w-4/5 bg-[aliceblue]  m-auto rounded-[70px] border-2 border-solid border-[aliceblue]"/>

              <div className="Technical-skills grid grid-cols-[repeat(2,1fr)] m-5 p-5">
              {
                techSkill.map((item) => {
                  return (
                    <div className='TechSkill'>
                    <p>{item}</p>
                    <div className='progressbox w-[150px] h-5 bg-white mb-2.5 rounded-[10px]'/>
                    </div>
                  )
                })
              }
              </div>
              </div>
              <hr className="my-4 w-4/5 bg-[aliceblue]  m-auto rounded-[70px] border-2 border-solid border-[aliceblue]"/>
              <div className="oldexperience text-center text-[15px] font-[Medium] m-0 p-5">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione culpa fugit assumenda autem, quaerat, hic quis accusantium laboriosam libero ea doloribus temporibus non pariatur aut dolorum provident eaque laborum necessitatibus natus nostrum quam! Obcaecati provident, voluptatibus sed voluptate ex distinctio ipsum amet quis laborum sapiente consequuntur cum totam reiciendis veniam dignissimos nam fugiat minus soluta eius? Porro sed dignissimos commodi?</p>
              </div>
            </div>
            
      </div>
      <div className="right-box bg-white w-[400px] border-[50px_0px_20px_0px] border-solid border-t-[35px] border-b-[20px] border-[gold]">
        <h1 className='name-right pt-[45px] text-center text-[40px] '>Saksham Gupta</h1>
        <h4 className='jobmain-right text-center pt-2.5'>MERN Stack Developer</h4>
        <hr className="my-4 w-4/5 bg-[aliceblue]  m-auto rounded-[70px] border-2 border-solid border-[aliceblue]"/>
        <br /> <br />

                <div className='contact-box'>
                  <div className='valdetail text-end text-[15px] font-[Medium] mx-10 my-5'>
                    <p>+91 1234567890</p>
                  </div>
                  <div className='valdetail text-end text-[15px] font-[Medium] mx-10 my-5'>
                    <p>qRr0h@example.com</p>
                  </div>
                  <div className="valdetail text-end text-[15px] font-[Medium] mx-10 my-5">
                    <p>https://github.com</p>
                  </div>
                  <div className="valdetail text-end text-[15px] font-[Medium] mx-10 my-5">
                    <p>S-2 330 Palm Heights, Hyderabad</p>
                  </div>
                  <hr className="my-4 w-4/5 bg-[aliceblue]  m-auto rounded-[70px] border-2 border-solid border-[aliceblue]"/>
                </div>
          <div className="workexp">
            <h2 className='work-right text-center px-5 text-2xl'>Work Experience</h2>
            <div>
              {
                workData.map((item) => {
                  return <><div className='flex boxboxbox'></div><p className='m-5'>{item}</p></>
                })
              }
            </div>
          </div>
          <hr className="my-4 w-4/5 bg-[aliceblue]  m-auto rounded-[70px] border-2 border-solid border-[aliceblue]"/>
          <div className="Professional-skills ">
            <h2 className='work-right text-center px-5 text-2xl'>Education Details</h2>
            {
                professionalSkill.map((item) => {
                  return <><div className='flex boxboxbox'></div><p className='m-5'>{item}</p></>
                })
              }
          </div>
          <hr className="my-4 w-4/5 bg-[aliceblue]  m-auto rounded-[70px] border-2 border-solid border-[aliceblue]"/>

      </div>
    </div>
    </>
  )
}
export default TemplateS2;