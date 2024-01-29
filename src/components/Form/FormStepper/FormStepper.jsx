import React,{useState} from 'react';
import "./stepper.css";

const FormStepper = ({list}) => {
    const steps = ["Personal Details","Expereince","Education","Skills"];
    const [currentStep,setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
  return (
    <>
      <div className="flex justify-between my-10">
            {steps.map?.((step,i)=>(
              <div 
               key={i} 
               className={`step-item ${currentStep === i + 1 && "active" } ${(i+1<currentStep || complete) && 'complete' } `}>
                <div className="step"> {i+1} </div>    
                <p className="text-gray-500"> {step} </p>
              </div>   
            ))}
      </div>
      <div className="flex justify-center align-middle m-4">
        <button className="p-2 bg-slate-400 text-cyan-200 rounded-md"
        onClick={()=>{
          currentStep === steps.length ? setComplete(true):
          setCurrentStep((prev)=> prev +1);
        }}
        > Next {currentStep} </button>
                <button className="p-2 bg-slate-400 text-cyan-200 rounded-md"
        onClick={()=>{
          
          setCurrentStep((prev)=> prev -1);
        }}
        > Prev {currentStep} </button>
      </div>
    </>
  )
}

export default FormStepper