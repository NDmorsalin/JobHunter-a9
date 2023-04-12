import React from "react";
import heroImg from "../../assets/All Images/hero.png";

const Hero = () => {
  return (
    <div className="flex items-center gap-16 my-8 flex-col-reverse sm:flex-row">
      <div className="flex-1 flex flex-col gap-8">
        <h2 className="text-4xl sm:text-6xl text-slate-800 font-bold">
          One Step Closer To Your{" "}
          <span className="text-gradients">Dream Job</span>
        </h2>
        <p className="text-slate-700">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <div className="">
          <button className="bg-gradients py-3 px-6 rounded text-white font-semibold text-lg">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img src={heroImg} alt="Hero image" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default Hero;
