import React from "react";

const ToggleButton = ({ toggle,...rest }) => {
   
  return (
    <div {...rest} className="sm:hidden space-y-2 cursor-pointer ">
      <span
        className={`block transition duration-300 ${
          toggle ? "rotate-45 translate-y-[.5rem]" : "rotate-0 translate-y-0"
        }  w-8 border rounded-full border-blue-600`}
      ></span>
      <span
        className={`block transition duration-300  ${
          toggle ? "invisible opacity-0" : "visible opacity-100"
        }   w-8 border rounded-full border-blue-600`}
      ></span>
      <span
        className={`block transition duration-300  ${
          toggle ? "-rotate-45 -translate-y-[.5rem]" : "rotate-0 -translate-y-0"
        }   w-8 border rounded-full border-blue-600`}
      ></span>
    </div>
  );
};

export default ToggleButton;
