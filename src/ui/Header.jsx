function Header() {
  return (
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
        negotiate compensation packages for workers. Organized new hire training
        initiatives as well as ongoing training to adhere to workplace safety
        standards. Worked with OSHA to ensure that all safety regulations are
        followed.
      </p>
    </div>
  );
}

export default Header;
