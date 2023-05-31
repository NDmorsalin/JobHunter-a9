import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ToggleButton from "../ToggleButton/ToggleButton";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-slate-100 sticky top-0 left-0 z-50">
      <div className="container px-4  lg:px-20 mx-auto flex items-center justify-between py-4 ">
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

        {/* toggle button */}
        <ToggleButton
          onClick={() => setToggle((tgl) => !tgl)}
          toggle={toggle}
        />

        {/* mobile device overlay */}
        <div
          style={{
            backgroundColor: "#3c667278",
          }}
          className={`sm:hidden flex w-full h-[calc(100vh-5rem)]  fixed z-50 top-20 transition duration-500 left-0 ${
            toggle ? "rotate-0 translate-y-0" : "-rotate-180 translate-x-full"
          }`}
        >
          <div
            onClick={() => setToggle((tgl) => !tgl)}
            className="flex-1 h-full"
          ></div>
          <div className="flex-1 bg-slate-50 p-8 space-y-4">
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
                  `hover:text-blue-700 transition duration-300 z-50 block py-2 px-4 rounded-full hover:bg-blue-200 border border-blue-600 ${
                    isActive
                      ? "text-gradients font-bold bg-slate-600"
                      : "text-[#757575]"
                  }`
                }
              >
                {nav.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
