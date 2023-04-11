import React, { useEffect, useState } from "react";
import PagesHeader from "../../Components/PagesHeader/PagesHeader";
import useGetAppliedJobs from "../../hooks/useGetAppliedJobs";
import AppliedJobsCard from "../../Components/AppliedJobsCard/AppliedJobsCard";

const AppliedJob = () => {
  const storedJob = useGetAppliedJobs();

  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    setAppliedJobs(storedJob);
  }, [storedJob]);

  const handleFiltering = (option) => {
    if (option) {
      const filtered = storedJob.filter(
        (job) => job.remote_or_onsite === option
      );
      setAppliedJobs(filtered);
    } else {
      setAppliedJobs(storedJob);
    }
  };
  return (
    <>
      <PagesHeader pageTitle=" Applied job" />
      <div className="ml-auto w-fit py-2 px-4 rounded border border-blue-600 my-8">
        <select
          onChange={(e) => handleFiltering(e.target.value)}
          defaultValue=""
          name="filter"
          id="filter"
          className=""
        >
          <option disabled>Filter by</option>
          <option value="">Select All</option>
          <option value="Onsite">One Site</option>
          <option value="Remote">Remote</option>
        </select>
      </div>
      <div className="my-8 space-y-4">
        {appliedJobs.map((job) => (
          <AppliedJobsCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
};

export default AppliedJob;
