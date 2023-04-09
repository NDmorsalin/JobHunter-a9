import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div className="container px-6 sm:px-12 md:px-20 mx-auto">
        {/* Header start */}
        <Header />
        {/* Header end */}

        {/* Other pages */}
        <Outlet />
        {/* Other pages */}
      </div>

      {/* Footer start */}
      <Footer />
      {/* Footer end */}
    </>
  );
};

export default Root;
