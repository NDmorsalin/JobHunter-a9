import React from "react";
import locationIcon from "../../assets/Icons/Location Icon.png";
import salaryIcon from "../../assets/Icons/Frame.png";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="border border-blue-500 rounded-xl shadow-md shadow-gray-700 p-8  space-y-4">
      <div className="max-w-[50%] p-4">
        <img src={job.company_logo} alt="" className="w-full" />
      </div>
      <h4 className="text-2xl font-bold text-slate-900">{job.job_title}</h4>
      <h6 className="text-slate-500 text-xl">{job.company_name}</h6>

      <div className="flex items-center gap-8">
        <div className="border border-blue-600 py-3 px-6 rounded-lg text-gradients font-bold">
          {job.fulltime_or_parttime}
        </div>
        <div className="border border-blue-600 py-3 px-6 rounded-lg text-gradients font-bold  ">
          {job.remote_or_onsite}
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <img src={locationIcon} alt="" className="" />
          <p className="text-slate-500">{job.location}</p>
        </div>
        <div className="flex items-center gap-3">
          <img src={salaryIcon} alt="" className="" />
          <p className="text-slate-500">Salary: {job.salary}</p>
        </div>
      </div>
        <Link
          to={`/jobs/${job.id}`}
          className="bg-gradients py-3 px-6 my-8 block w-fit  rounded text-white font-semibold text-lg"
        >
          View Details
        </Link> 
    </div>
  );
};

export default JobCard;
