const fetchData = async (url) => {
    const req = await fetch(url);
    const data = await req.json()

    return data
}

const homeData = async () => {
    const jobsData = await fetchData('/jobs.json')
    const categories = await fetchData('/category.json')

    return { jobsData, categories }
}

const jobDetails = async ({ params }) => {
    const jobsData = await fetchData('/jobs.json')
    const { jobs } = jobsData
    const singleJob = jobs.find(job => `${job.id}` === params.jobId)
    // console.log(singleJob,jobs, params.jobId);
    return { singleJob }
}


export { homeData, jobDetails }