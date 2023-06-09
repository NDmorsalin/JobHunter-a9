import React from "react";
import vector1 from "../../assets/All Images/Vector-1.png";
import vector from "../../assets/All Images/Vector.png";

const PagesHeader = ({ pageTitle}) => {
  return (
    <div className="text-center py-16 relative -z-10">
      <h4 className="text-slate-950 font-bold">{pageTitle}</h4>
      <img src={vector1} alt="" className="absolute -z-10 top-0 right-0 w-60" />
      <img src={vector} alt="" className="absolute -z-10 left-0 bottom-0 w-60" />
    </div>
  );
};

export default PagesHeader;
