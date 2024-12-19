import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      <nav>
        <ul>
          <Link to="/home" class="list">
            Home
          </Link>
          <Link to="/course" class="list">
            Courses
          </Link>
          <Link to="/contact" class="list">
            Contact
          </Link>
        </ul>
      </nav>
      <main>
        <Outlet /> {/* This is where the nested routes will render */}
      </main>
    </>
  );
};

export default Layout;
