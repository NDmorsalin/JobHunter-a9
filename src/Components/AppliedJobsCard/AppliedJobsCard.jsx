import React from "react";
import { Link } from "react-router-dom";
import locationIcon from "../../assets/Icons/Location Icon.png";
import salaryIcon from "../../assets/Icons/Frame.png";

const AppliedJobsCard = ({ job }) => {
  return (
    <div className="flex items-center gap-10 p-4 border border-blue-600 rounded-md ">
      <img src={job.company_logo} alt="company logo" className="max-w-[5rem]" />
      <div className="flex-1 space-y-2">
        <h4 className="text-xl font-bold text-slate-900">{job.job_title}</h4>
        <h6 className="text-slate-500 text-xl">{job.company_name}</h6>
        <div className="flex items-center gap-4">
          <div className="border border-blue-600 py-2 px-4 rounded-lg text-gradients font-bold">
            {job.fulltime_or_parttime}
          </div>
          <div className="border border-blue-600 py-2 px-4 rounded-lg text-gradients font-bold  ">
            {job.remote_or_onsite}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={locationIcon} alt="" className="" />
            <p className="text-slate-500">{job.location}</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={salaryIcon} alt="" className="" />
            <p className="text-slate-500">Salary: {job.salary}</p>
          </div>
        </div>
      </div>
      <div className="w-fit">
        <Link
          to={`/jobs/${job.id}`}
          className="bg-gradients py-3 px-6 my-8 block w-fit  rounded text-white font-semibold text-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AppliedJobsCard;
