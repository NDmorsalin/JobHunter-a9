import { useEffect, useState } from "react";
import PagesHeader from "../../Components/PagesHeader/PagesHeader";
import useGetAppliedJobs from "../../hooks/useGetAppliedJobs";
import AppliedJobsCard from "../../Components/AppliedJobsCard/AppliedJobsCard";
import { deleteJobIdOnLS, getJobIdLS } from "../../util/appliedJobCRUDOnLS";
import { fetchData } from "../../util/fetchData";

const AppliedJob = () => {
  const storedJob = useGetAppliedJobs();

  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    setAppliedJobs(storedJob);
  }, [storedJob]);
  // console.log(storedJob);
  const handleFiltering = (option) => {
    const storedJobsIds = getJobIdLS();
    const fetching = async () => {
      const allJobs = [];
      const fetchedJobs = await fetchData("/jobs.json");
      const { jobs } = fetchedJobs;
      storedJobsIds.forEach((jobId) => {
        const job = jobs.find((job) => job.id === jobId);
        allJobs.push(job);
      });
      if (option) {
        const filtered = allJobs.filter(
          (job) => job.remote_or_onsite === option
        );
        setAppliedJobs(filtered);
      } else {
        setAppliedJobs(allJobs);
      }
    };
    fetching();
  };

  const deleteAppliedJob = (jobId) => {
    deleteJobIdOnLS(jobId);
    const storedJobsIds = getJobIdLS();
    const fetching = async () => {
      const allJobs = [];
      const fetchedJobs = await fetchData("/jobs.json");
      const { jobs } = fetchedJobs;
      storedJobsIds.forEach((jobId) => {
        const job = jobs.find((job) => job.id === jobId);
        allJobs.push(job);
      });

      setAppliedJobs(allJobs);
    };
    fetching();
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
        {appliedJobs.length > 0 ? (
          appliedJobs.map((job) => (
            <AppliedJobsCard
              deleteAppliedJob={deleteAppliedJob}
              key={job.id}
              job={job}
            />
          ))
        ) : (
          <h1 className="text-2xl text-center text-slate-900">
            No Applied Job Found
          </h1>
        )}
      </div>
    </>
  );
};

export default AppliedJob;
