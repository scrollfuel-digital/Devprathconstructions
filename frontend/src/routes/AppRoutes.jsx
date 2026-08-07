import React from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";

import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Blog from "../pages/Blog/Blog";
import BlogDetail from "../pages/Blog/BlogDetail";
import Contact from "../pages/Contact/Contact";
import Project from "../pages/Project/Project";
import Gallery from "../pages/Gallery/Gallery";
import { getBlogBySlug } from "../constants/blogData";

/**
 * RootSlugResolver Component
 * Resolves root-level URLs like /the-impact-of-nagpur-metro-on-real-estate-prices
 * If the slug matches a blog article, renders BlogDetail; otherwise redirects to home.
 */
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

      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/aboutus" element={<AboutUs />} />

      <Route path="/project" element={<Project />} />
      <Route path="/projects" element={<Project />} />

      <Route path="/gallery" element={<Gallery />} />

      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/contact" element={<Contact />} />

      {/* Dynamic route matching blog titles at root level */}
      <Route path="/:slug" element={<RootSlugResolver />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;