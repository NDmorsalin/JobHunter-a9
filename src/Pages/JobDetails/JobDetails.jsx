import React from "react";
import { useLoaderData } from "react-router-dom";

import locationIcon from "../../assets/Icons/Location Icon.png";
import salaryIcon from "../../assets/Icons/Frame.png";
import jobTitleIcon from "../../assets/Icons/Frame-1.png";
import phoneIcon from "../../assets/Icons/Frame-2.png";
import emailIcon from "../../assets/Icons/Frame-3.png";
import PagesHeader from "../../Components/PagesHeader/PagesHeader";
import { addJobIdOnLS } from "../../util/appliedJobCRUDOnLS";

const JobDetails = () => {
  const singleJob = useLoaderData();
  console.log(singleJob);
  return (
    <>
      <PagesHeader pageTitle="Job Details" />
      <div className="flex gap-5 my-8">
        <div className="flex-1  space-y-6">
          <p className="text-slate-700">
            <span className="font-bold text-slate-900">Job Description :</span>
            {singleJob.job_description}
          </p>
          <p className="text-slate-700">
            <span className="font-bold text-slate-900">
              Job Responsibility :
            </span>
            {singleJob.job_responsibility}
          </p>
          <div className="font-bold text-slate-900">
            Educational Requirements :
          </div>
          <p className="text-slate-700">{singleJob.educational_requirements}</p>
          <div className="font-bold text-slate-900">Experiences :</div>
          <p className="text-slate-700"> {singleJob.experiences}</p>
        </div>
        <div className="w-72">
          <div className=" p-4 rounded-md bg-slate-300 space-y-4">
            <div className="">
              <h6 className="text-slate-900 font-bold">Job Details</h6>
              <hr className="border-slate-950 my-4" />
              <div className="flex items-center gap-2">
                <img src={salaryIcon} alt="salary icon" className="" />
                <p className="text-slate-700">
                  <span className="text-slate-900 font-semibold">Salary :</span>
                  {singleJob.salary} (Per Month)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src={jobTitleIcon} alt="salary icon" className="" />
                <p className="text-slate-700">
                  <span className="text-slate-900 font-semibold">
                    Job Title :
                  </span>
                  {singleJob.job_title}
                </p>
              </div>
            </div>
            <div className="">
              <h6 className="text-slate-900 font-bold">Contact Information</h6>
              <hr className="border-slate-950 my-4" />
              <div className="flex items-center gap-2">
                <img src={phoneIcon} alt="salary icon" className="" />
                <p className="text-slate-700">
                  <span className="text-slate-900 font-semibold">Phone :</span>
                  {singleJob.contact_information.phone}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src={emailIcon} alt="salary icon" className="" />
                <p className="text-slate-700">
                  <span className="text-slate-900 font-semibold">Email :</span>
                  {singleJob.contact_information.email}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src={locationIcon} alt="salary icon" className="" />
                <p className="text-slate-700">
                  <span className="text-slate-900 font-semibold">
                    Address :
                  </span>
                  {singleJob.location}
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => addJobIdOnLS(singleJob.id)}
            className="bg-gradients py-3 px-6 rounded text-white font-semibold text-lg block w-full mt-4"
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
