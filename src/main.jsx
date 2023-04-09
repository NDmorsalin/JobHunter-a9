import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Root";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);