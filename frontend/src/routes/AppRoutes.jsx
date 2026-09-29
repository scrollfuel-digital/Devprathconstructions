import React from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";

import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Blog from "../pages/Blog/Blog";
import BlogDetail from "../pages/Blog/BlogDetail";
import Contact from "../pages/Contact/Contact";
import Project from "../pages/Project/Project";
import AdminPortal from "../pages/Admin/AdminPortal";
import { getBlogBySlug } from "../constants/blogData";

function RootSlugResolver() {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);
  if (blog) {
    return <BlogDetail />;
  }
  return <Navigate to="/" replace />;
}

/**
 * AppRoutes Component
 * Central route mapping configuration.
 */
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<Navigate to="/about-us" replace />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/aboutus" element={<AboutUs />} />

      <Route path="/project" element={<Project />} />
      <Route path="/projects" element={<Project />} />

      <Route path="/completed-projects" element={<Navigate to="/projects" replace />} />
      <Route path="/completed-project" element={<Navigate to="/projects" replace />} />

      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/contact" element={<Contact />} />

      {/* Admin Portal Routes */}
      <Route path="/resource/admin" element={<AdminPortal />} />
      <Route path="/admin" element={<Navigate to="/resource/admin" replace />} />
      <Route path="/admin/dashboard" element={<Navigate to="/resource/admin?tab=dashboard" replace />} />
      <Route path="/admin/blogs" element={<Navigate to="/resource/admin?tab=blogs" replace />} />
      <Route path="/admin/contacts" element={<Navigate to="/resource/admin?tab=contacts" replace />} />

      {/* Dynamic route matching blog titles at root level */}
      <Route path="/:slug" element={<RootSlugResolver />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;