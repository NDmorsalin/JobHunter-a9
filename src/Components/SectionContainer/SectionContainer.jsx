import React from "react";

const SectionContainer = ({ title, subtitle, children }) => {
  return (
    <>
      <div className="text-center space-y-4 mx-auto w-10/12 md:w-8/12 my-8">
        <h3 className="text-4xl text-slate-900">{title}</h3>
        <p className=" text-slate-700">{subtitle}</p>
      </div>
      {children}
    </>
  );
};

export default SectionContainer;
