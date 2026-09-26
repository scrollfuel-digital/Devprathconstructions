const BLOG_API_URL = 
// "http://localhost:8080/api/blogs/fetch-all-blogs";
"https://devprath-backend-latest.onrender.com/api/blogs/fetch-all-blogs";
export let dynamicBlogs = [];

export function cleanHtmlContent(content) {
  if (!content) return "";
  return content.replaceAll('\\\\"', '"').replaceAll('\\"', '"');
}

function parseBlog(item) {
  const cleanContent = cleanHtmlContent(item.content || "");
  const plainText = cleanContent.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

  return {
    ...item,
    id: item.id || item.slug,
    image: item.imageUrl || item.image || "",
    category: item.category || item.keywords?.[0] || "",
    excerpt: item.excerpt || plainText,
    content: cleanContent,
    date: item.createdAt
      ? new Date(item.createdAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : "",
    author: item.author || "By Devprath Constructions, Nagpur",
  };
}

export async function fetchAllBlogs() {
  try {
    const res = await fetch(BLOG_API_URL);
    const data = await res.json();
    const list = Array.isArray(data) ? data : data?.content || [];
    dynamicBlogs = list.map(parseBlog);
  } catch (err) {
    console.error("Failed to fetch blogs:", err);
  }
  return dynamicBlogs;
}

export function getBlogBySlug(slug) {
  const cleanSlug = slug?.toLowerCase().replace(/^\/+|\/+$/g, "");
  return dynamicBlogs.find((p) => p.slug === cleanSlug) || null;
}

export function getRelatedBlogs(currentSlug, limit = 4) {
  return dynamicBlogs.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
