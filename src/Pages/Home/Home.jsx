import React from "react";
import Hero from "../../Components/Hero/Hero";
import SectionContainer from "../../Components/SectionContainer/SectionContainer";
import c1 from "../../assets/Icons/c1.png";
import c2 from "../../assets/Icons/c2.png";
import c3 from "../../assets/Icons/c3.png";
import c4 from "../../assets/Icons/c4.png";
import JobCategory from "../../Components/JobCategory/JobCategory";

const Home = () => {
  const jobCategory = [
    {
      title: "Account & Finance",
      availableJobs: "300 Jobs Available",
      icon: c1,
    },
    {
      title: "Creative Design",
      availableJobs: "100+ Jobs Available",
      icon: c2,
    },
    {
      title: "Marketing & Sales",
      availableJobs: "150 Jobs Available",
      icon: c3,
    },
    {
      title: "Engineering Job",
      availableJobs: "224 Jobs Available",
      icon: c4,
    },
  ];
  return (
    <div>
      <Hero />
      {/* category container start */}
      <SectionContainer
        title="Job Category List"
        subtitle="Explore thousands of job opportunities with all the information you need. Its your future"
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {jobCategory.map((ctg) => (
            <JobCategory key={ctg.title} category={ctg} />
          ))}
        </div>
      </SectionContainer>
{/* category container end */}
      
    </div>
  );
};

export default Home;
