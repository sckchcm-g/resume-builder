import { useState } from 'react'

function TemplateD3() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center bg-[rgb(192,219,255)] w-[794px] h-[1123px] mt-[-150px]' style={{ transform: 'scale(0.7)' }}>
      <div className="h-[300px] bg-[rgb(2,87,148)] w-[95%] mt-5 rounded-[150px]">
        <div className="flex flex-row items-center justify-evenly">
          <div className="h-[200px] w-[200px] bg-[rgb(235,236,231)] m-10 rounded-[50%]"></div>
          <div className="flex flex-col items-center justify-center bg-white w-[400px] h-[150px] m-10  rounded-[50px_100px_100px_50px] border-2 border-solid border-[rgba(1,63,107,)]">
            <div className="text-[40px] text-[rgb(1,63,107)] mt-[-20px] m-5 p-0"><p>Devraj Patil</p></div>
            <hr className='w-[300px] border -mt-5 border-solid border-[rgb(1,63,107)]' />
            <div className="text-xl text-[rgb(1,63,107)] m-0 p-0"><p>Software engineer</p></div>
          </div>
        </div>
      </div>


      <div className="h-3/4 w-full bg-[rgb(192,219,255)]">
        <div className="bg-[rgba(255,255,255,0.448)] w-[720px] h-[200px] mt-[70px] m-[38px] rounded-[25px]">
                  <h2 className='text-[25px] font-[bold] text-[rgb(99,133,255)] m-[15px]'>About me</h2>
                  <div className='text-[17px] text-[rgb(77,77,77)] m-[15px]'>
                    <p>Human resources generalist with 8 years of experience in HR, including hiring and terminating,
disciplining employees and helping department managers improve employee performance. Worked
with labor unions to negotiate compensation packages for workers. Organized new hire training
initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA
to ensure that all safety regulations are followed.</p>
                  </div>
              </div>

              <hr className='w-[650px] border ml-[65px] mt-5 border-solid border-[rgb(1,63,107)]' />
              <div className="bg-[rgba(255,255,255,0.448)] w-[720px] h-[200px] m-[38px] rounded-[25px]">
              <h2 className='text-[25px] font-[bold] text-[rgb(99,133,255)] m-[15px]'>Skills</h2>
              <ul className='text-[17px] text-[rgb(77,77,77)] m-[15px] mt-[-10px]'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
                <li>MongoDB</li>
              </ul>
              </div>

              <hr className='w-[650px] border ml-[65px] mt-5 border-solid border-[rgb(1,63,107)]' />
              <div className="bg-[rgba(255,255,255,0.448)] w-[720px] h-[200px] m-[38px] rounded-[25px]">
              <h2 className='text-[25px] font-[bold] text-[rgb(99,133,255)] m-[15px]'>Education</h2>
              <ul className='text-[17px] text-[rgb(77,77,77)] m-[15px]'>
                <li>Studied from Hardward university</li>
                <li>Studied from Hardward university</li>
                <li>Studied from Hardward university</li>
                <li>Studied from Hardward university</li>
                <li>Studied from Hardward university</li>
              </ul>
              </div>

        </div>
    </div>
  )
}

export default TemplateD3
