import React from "react";
import PagesHeader from "../../Components/PagesHeader/PagesHeader";
import useGetAppliedJobs from "../../hooks/useGetAppliedJobs";
import AppliedJobsCard from "../../Components/AppliedJobsCard/AppliedJobsCard";

const AppliedJob = () => {
  const appliedJob = useGetAppliedJobs();
  // console.log(appliedJob);
  return (
    <>
      <PagesHeader pageTitle=" Applied job" />
      <div className="my-8 space-y-4">
        {appliedJob.map((job) => (
          <AppliedJobsCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
};

export default AppliedJob;
