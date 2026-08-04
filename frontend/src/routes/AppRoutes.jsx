import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Project from "../pages/Project/Project";

/**
 * AppRoutes Component
 * Central route mapping configuration.
 */
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/aboutus" element={<AboutUs />} />

            <Route path="/project" element={<Project />} />
            <Route path="/projects" element={<Project />} />

      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;