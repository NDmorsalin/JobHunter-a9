import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import { homeData, jobDetails } from "../util/fetchData";
import JobDetails from "../Pages/JobDetails/JobDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: homeData,
      },
      {
        path: "/:jobId",
        element: <JobDetails />,
        loader: jobDetails,
      },
      {
        path: "statistics",
        element: <Home />,
      },
    ],
  },
]);

export default routes;
