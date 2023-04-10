import React, { useState } from "react";
import Hero from "../../Components/Hero/Hero";
import SectionContainer from "../../Components/SectionContainer/SectionContainer";
import c1 from "../../assets/Icons/c1.png";
import c2 from "../../assets/Icons/c2.png";
import c3 from "../../assets/Icons/c3.png";
import c4 from "../../assets/Icons/c4.png";
import JobCategory from "../../Components/JobCategory/JobCategory";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const { jobsData, categories } = useLoaderData()
  const { jobCategories } = categories;
  const { jobs } = jobsData;
  const [currentJobs,setCurrentJob] = useState(jobs.slice(0, 6))

  console.log({ currentJobs });
  return (
    <div>
      <Hero />
      {/* category container start */}
      <SectionContainer
        title="Job Category List"
        subtitle="Explore thousands of job opportunities with all the information you need. Its your future"
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {jobCategories.map((ctg) => (
            <JobCategory key={ctg.title} category={ctg} />
          ))}
        </div>
      </SectionContainer>
      {/* category container end */}

      <SectionContainer
        title="Featured Jobs"
        subtitle="Explore thousands of job opportunities with all the information you need. Its your future"
      >
        <div className="grid md:grid-cols-2 gap-4">
          {currentJobs.map((ctg) => (
            <JobCategory key={ctg.title} category={ctg} />
          ))}
        </div>
        <div className="text-center">
          <button type="button" onClick={()=>setCurrentJob(jobs)} className="bg-gradients py-3 px-6 my-8  rounded text-white font-semibold text-lg">
            See All Jobs
          </button>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Home;
