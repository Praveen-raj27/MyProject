import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// const Layout = lazy(() => import("./pages/layout"));
// const Home = lazy(() => import("./pages/home"));
// const Contacts = lazy(() => import("./pages/contacts"));
// const Cources = lazy(() => import("./pages/cources"));
import Layout from "./pages/layout";
import Home from "./pages/home";
import Contacts from "./pages/contacts";
import Cources from "./pages/cources";

const routes = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "home",
      },
      {
        element: <Contacts />,
        path: "contact",
      },
      {
        element: <Cources />,
        path: "course",
      },
    ],
  },
]);

export default routes;
