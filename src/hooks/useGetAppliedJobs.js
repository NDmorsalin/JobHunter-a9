import React, { useEffect, useState } from 'react';
import { fetchData } from '../util/fetchData';
import { getJobIdLS } from '../util/appliedJobCRUDOnLS';

const useGetAppliedJobs = () => {
    const [storedJobs, setStoredJobs] = useState([])
    const storedJobsIds = getJobIdLS()
    useEffect(() => {
        const fetching = async () => {
            const allJobs = []
            const fetchedJobs = await fetchData('/jobs.json')
            const { jobs } = fetchedJobs
            storedJobsIds.forEach(jobId => {
                const job = jobs.find(job => job.id === jobId)
                allJobs.push(job)
            });

            setStoredJobs(allJobs)
        }
        fetching()
    }, [])


    return storedJobs
};

export default useGetAppliedJobs;