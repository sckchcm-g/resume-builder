import React from "react";
import Navbar from "../Navbar";
import MobileFooter from "../Dashboard/MobileFooter";

import Forms from "../Form/Forms";
function Mobileview() {
  return (
    <div className="w-[100%] ">
      <Navbar />
      <Forms />
      <MobileFooter />
    </div>
  );
}

export default Mobileview;
