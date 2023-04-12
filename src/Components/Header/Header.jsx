import React from "react";
import { Link, NavLink } from "react-router-dom";

const   Header = () => {
  return (
    <div className="flex items-center justify-between py-4">
      {/* logo start */}
      <Link to="/" className="text-3xl sm:text-5xl font-bold text-slate-800">
        Job
        <span className="font-extrabold text-gradients">Hunter</span>
      </Link>
      {/* logo end */}

      <div className="hidden  sm:flex item-center gap-4">
        {[
          { path: "/", name: "Home" },
          { path: "statistics", name: "Statistics" },
          { path: "appliedjobs", name: "Applied Jobs" },
          { path: "blog", name: "Blog" },
        ].map((nav) => (
          <NavLink
            key={nav.path}
            to={nav.path}
            className={({ isActive }) =>
              `hover:text-blue-700 transition duration-300 ${
                isActive ? "text-gradients font-bold" : "text-[#757575]"
              }`
            }
          >
            {nav.name}
          </NavLink>
        ))}
      </div>

      <Link
        to="/alljobs"
        className="hidden sm:block bg-gradients py-3 px-6 rounded text-white font-semibold text-lg"
      >
        Star Applying
      </Link>
    </div>
  );
};

export default Header;
