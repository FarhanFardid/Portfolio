import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Home from "./Pages/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/projects',
        element:<Home></Home>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-2xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
