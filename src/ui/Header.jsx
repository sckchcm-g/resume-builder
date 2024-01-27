import { selectUserData } from "../components/reduxToolkit/FormDataSlice.jsx";
import { useSelector } from "react-redux";

function Header() {
  const userInputData = useSelector(selectUserData)
  //console.log(userInputData)
  return (
    <div className="header-wrapper pt-5 ">
      <header className="flex justify-between ">
        <div className="left flex  w-[280px] justify-between">
          <div className="mt-3">
            <button className="logo p-4  bg-[#de8535] rounded-full">
              <span className="text-white text-4xl  font-serif"> {userInputData && userInputData.firstName ? userInputData.firstName[0] : "C"}</span>
              <span className="text-white text-4xl font-serif">{userInputData && userInputData["last-name"] ? userInputData["last-name"][0] : "C"} </span>
            </button>
          </div>
          <div>
            <div className="firstName text-[#de8535] font-serif text-4xl">
            {userInputData && userInputData.firstName ? userInputData.firstName : "Chris"} 
            </div>
            <div className="lastName text-[#de8535] font-serif text-4xl">
            {userInputData && userInputData["last-name"] ? userInputData["last-name"] : "Candidate"}
            </div>
            <div className="job-title text-md font-serif">
              Human Resource Manager
            </div>
          </div>
        </div>
        <div className="right text-custom-orange ">
          <div className="adress text-xs">{userInputData && userInputData.address ? userInputData.address : "Sunnydale Lane"}</div>
          <div className="adress-city  flex  gap-[5px]">
          <div className="city text-xs">{userInputData && userInputData.city ? userInputData.city :"Plano" }</div>
          <div className="city-code text-xs">{userInputData && userInputData["city-code"] ? userInputData["city-code"] :"TX 75071" }</div>
          </div>
          <div className="adress-state-country  flex   gap-[5px]">
          <div className="state text-xs">{userInputData && userInputData.state ? userInputData.state :"Texas" }</div>
          <div className="country text-xs">{userInputData && userInputData.country ? userInputData.country :"USA" }</div>
          </div>
          <div className="email text-xs">{userInputData && userInputData["email-address"] ? userInputData["email-address"] :"email@youremail.com" }</div>
          {/* <div className="phone text-xs">{userInputData && userInputData.address ? userInputData.address : "(469) 385-2948"}</div> */}
        </div>
      </header>
      <p className="description text-[10px] text-gray-500 pt-4">
        Human resources generalist with 8 years of experience in HR, including
        hiring and terminating, disciplining employees and helping department
        managers improve employee performance. Worked with labor unions to
        negotiate compensation packages for workers. Organized new hire training
        initiatives as well as ongoing training to adhere to workplace safety
        standards. Worked with OSHA to ensure that all safety regulations are
        followed.
      </p>
    </div>
  );
}

export default Header;
