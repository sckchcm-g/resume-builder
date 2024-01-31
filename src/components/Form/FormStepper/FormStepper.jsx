// import {useState} from 'react';
import "./stepper.css";

const FormStepper = ({Newnum}) => {
    const steps = ["Personal","Expereince","Education","Skills"];
    // const [currentStep,setCurrentStep] = useState(Newnum);
    // const [currentStep,setCurrentStep] = useState(0);
    // console.log(Newnum);
    // const [complete, setComplete] = useState(false);
  return (
    <>

    {/* Stepper with Completion-Green */}

      {/* <div className="flex justify-between my-2 w-[270px] ">
            {steps.map?.((step,i)=>(
              <div 
               key={i} 
               className={`step-item ${currentStep === i + 1 && "active" } ${(i+1<currentStep || complete) && 'complete' } `}>
                <div className="step"> {i+1} </div>    
                <p className="text-gray-500 text-[10px] "> {step} </p>
              </div>   
            ))}
      </div> */}

      {/* Without Completion-Not Green */}
      <div className="flex justify-between my-2 w-[270px] ">
            {steps.map?.((step,i)=>(
              <div 
               key={i} 
               className={`step-item ${Newnum+1 >= i + 1 && "active" } `}>
                <div className="step"> {i+1} </div>    
                <p className="text-gray-500 text-[10px] "> {step} </p>
              </div>   
            ))}
      </div>

      <div className="flex justify-center align-middle m-2">
        
      {/* <button className="p-2 mx-4 bg-purple-700 text-white rounded-md"
        onClick={()=>{
          currentStep !=0?setCurrentStep((prev)=> prev -1):(null)
          ;
        }}
        > Prev  </button>
        <button className="p-2 bg-purple-700 text-white rounded-md"
        onClick={()=>{
          currentStep === steps.length ? setComplete(true):
          setCurrentStep((prev)=> prev +1);
        }}
        > Next {currentStep} </button> */}

      </div>
    </>
  )
}

export default FormStepper