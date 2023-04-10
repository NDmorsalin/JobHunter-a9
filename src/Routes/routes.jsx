import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import { homeData } from "../util/homeData";

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
        path: "statistics",
        element: <Home />,
      },
    ],
  },
]);

export default routes;
