const getJobIdLS = () => {
  let jobsId = [];
  const jobsIdStr = localStorage.getItem("jobsId");

  if (jobsIdStr) {
    jobsId = JSON.parse(jobsIdStr);
  }

  return jobsId;
};

const addJobIdOnLS = (jobId) => {
  const jobsId = getJobIdLS();

  const isAdded = jobsId.includes(jobId);

  if (!isAdded) {
    jobsId.push(jobId);
    localStorage.setItem("jobsId", JSON.stringify(jobsId));

    return isAdded;
  }

  return isAdded;
};

export { addJobIdOnLS, getJobIdLS };
