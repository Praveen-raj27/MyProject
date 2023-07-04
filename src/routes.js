import React from "react";

import {  Routes, Route, Link } from 'react-router-dom';

import Home from "./pages/home";
import Contacts from "./pages/contacts";
import Cources from "./pages/cources";

const MyRoutes = ({ }) => {
    return (
        <>
        <nav>
        <ul>
          <Link to="/" class="list">
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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contacts />}/>
                <Route path="/course" element={<Cources />}/>
            </Routes>
        </>
    )
}

export default MyRoutes;