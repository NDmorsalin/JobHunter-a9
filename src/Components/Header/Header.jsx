import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-4">
      {/* logo start */}
      <Link to="/" className="text-5xl font-bold text-slate-800">
        Job
        <span className="font-extrabold text-gradients">Hunter</span>
      </Link>
      {/* logo end */}


      
      <button className="bg-gradients py-3 px-6 rounded text-white font-semibold text-lg">
        Star Applying
      </button>
    </div>
  );
};

export default Header;
