import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../Pages/Error/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [{}],
  },
]);

export default routes;
