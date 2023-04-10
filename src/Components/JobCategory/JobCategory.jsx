import React from "react";

const JobCategory = ({ category }) => {
  return (
    <div className="rounded-lg p-6 bg-slate-200 space-y-4">
      <div className="p-4 bg-slate-100 rounded-md w-fit">
        <img src={category.icon} alt="icon of category" className="" />
      </div>
      <div className="">
        <h5 className="text-xl text-slate-900">{category.title}</h5>
        <p className="text-slate-500">{category.availableJobs} </p>
      </div>
    </div>
  );
};

export default JobCategory;
