import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import { homeData, jobDetails } from "../util/fetchData";
import JobDetails from "../Pages/JobDetails/JobDetails";
import Statistic from "../Pages/Statistics/Statistic";
import AppliedJob from "../Pages/ApplidedJob/AppliedJob";
import Blog from "../Pages/Blog/Blog";

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
        path: "jobs",
        element: <Home />,
        loader: homeData,
      },
      {
        path: "/jobs/:jobId",
        element: <JobDetails />,
        loader: jobDetails,
      },
      {
        path: "statistics",
        element: <Statistic />,
      },
      {
        path: "appliedjobs",
        element: <AppliedJob />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

export default routes;
