import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "./App";
import Employee from "./pages/Employee";
import EmployeeDetails from "./pages/EmployeeDetails";
import Report from "./pages/Report";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/employee", element: <Employee /> },
  { path: "/employee/:empId", element: <EmployeeDetails /> },
  { path: "/report", element: <Report /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
