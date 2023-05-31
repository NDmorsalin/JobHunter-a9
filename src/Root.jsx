import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Root = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);
  return (
    <>
      {" "}
      {/* Header start */}
      <Header />
      {/* Header end */}
      <div className="container px-4  lg:px-20 mx-auto">
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
