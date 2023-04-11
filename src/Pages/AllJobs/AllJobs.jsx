import React from "react";
import { useLoaderData } from "react-router-dom";
import PagesHeader from "../../Components/PagesHeader/PagesHeader";
import JobCard from "../../Components/JobCard/JobCard";
import { addJobIdOnLS } from "../../util/appliedJobCRUDOnLS";
import { toast } from "react-toastify";

const AllJobs = () => {
  const { jobs } = useLoaderData();
  const handelAppliedJob = (jobId) => {
    const isAdded = addJobIdOnLS(jobId);
    if (isAdded) {
      toast("Job already added please see on your applied list");
    }
  };
  return (
    <>
      <PagesHeader pageTitle="All jobs" />
      <div className="grid md:grid-cols-2 gap-4 my-8">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job}>
            <button
              onClick={() => handelAppliedJob(job.id)}
              className="bg-gradients py-3 px-6 rounded text-white font-semibold text-lg  mt-4"
            >
              Apply Now
            </button>
          </JobCard>
        ))}
      </div>
    </>
  );
};

export default AllJobs;
