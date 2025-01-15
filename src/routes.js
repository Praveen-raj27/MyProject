import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import Login from "./pages/login";
import Home from "./pages/home";
import Comments from "./pages/comments";
import Cources from "./pages/cources";

const routes = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <Login />,
        path: "login",
      },
      {
        element: <Home />,
        path: "home",
      },
      {
        element: <Comments />,
        path: "comments",
      },
      {
        element: <Cources />,
        path: "course",
      },
    ],
  },
]);

export default routes;
