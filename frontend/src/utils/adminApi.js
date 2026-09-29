import {
  getStoredBlogs,
  setStoredBlogs,
  upsertStoredBlog,
  deleteStoredBlog,
} from '../constants/blogData';

/**
 * Centralized Admin API Client
 * Configured with global backend URL and session preservation.
 */

// Global Backend URL — change this single value whenever needed
export const BACKEND_URL =
  (typeof window !== 'undefined' && localStorage.getItem('devprath_backend_url')) ||
  'https://devprath-backend-latest.onrender.com';

const ADMIN_AUTH_KEY = 'devprath_admin_authenticated';

export const getAdminAuthStatus = () => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(ADMIN_AUTH_KEY) === 'true';
};

export const setAdminAuthStatus = (val) => {
  if (typeof window === 'undefined') return;
  if (val) {
    localStorage.setItem(ADMIN_AUTH_KEY, 'true');
  } else {
    localStorage.removeItem(ADMIN_AUTH_KEY);
  }
  window.dispatchEvent(
    new CustomEvent('devprath:auth-change', { detail: { isAuthenticated: Boolean(val) } })
  );
};

export async function adminFetch(path, options = {}) {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${BACKEND_URL.replace(/\/+$/, '')}${cleanPath}`;

  try {
    const res = await fetch(url, {
      ...options,
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        ...(options.headers || {}),
      },
    });

    // Automatically invalidate local auth session if protected API returns 401/403
    if ((res.status === 401 || res.status === 403) && !cleanPath.includes('/api/auth/login')) {
      if (getAdminAuthStatus()) {
        setAdminAuthStatus(false);
      }
    }

    const contentType = res.headers.get('content-type') || '';
    const data = contentType.includes('application/json')
      ? await res.json()
      : await res.text().then((t) => (t ? { message: t } : null));

    return {
      ok: res.ok,
      status: res.status,
      data,
      error: res.ok ? null : (data?.message || data?.error || `Error ${res.status}`),
    };
  } catch (err) {
    return { ok: false, status: 0, data: null, error: err.message || 'Network error' };
  }
}

export const loginAdmin = async (payload) => {
  const res = await adminFetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (res.ok) {
    setAdminAuthStatus(true);
  }
  return res;
};

export const logoutAdmin = async () => {
  try {
    return await adminFetch('/api/auth/logout', { method: 'POST' });
  } finally {
    clearBlogsCache();
    clearContactsCache();
    setAdminAuthStatus(false);
  }
};

export const checkAdminSession = async () => ({ isAuthenticated: getAdminAuthStatus() });

// In-Memory Contact Caching (replacing legacy sessionStorage)
const contactCache = new Map();

export const clearBlogsCache = () => setStoredBlogs([]);
export const clearContactsCache = () => contactCache.clear();

export const updateCachedContactViewed = (id, viewed = true) => {
  try {
    contactCache.forEach((data) => {
      const list = Array.isArray(data) ? data : data?.content;
      if (Array.isArray(list)) {
        list.forEach((c) => { if (c.referenceId === id) c.viewed = viewed; });
      }
    });
  } catch {}
};

// Contact APIs
export const fetchAllContacts = async ({ page = 0, size = 10, sortBy = 'isViewed', ascending = true, force = false } = {}) => {
  const k = `devprath_contacts_p${page}_s${size}_${sortBy}_${ascending}`;
  if (!force) {
    const cached = contactCache.get(k);
    if (cached) return { ok: true, status: 200, data: cached, error: null };
  }
  const res = await adminFetch(`/api/contact/get-all?page=${page}&size=${size}&sortBy=${sortBy}&ascending=${ascending}`);
  if (res.ok && res.data) contactCache.set(k, res.data);
  return res;
};

export const fetchContactById = (id) => adminFetch(`/api/contact/get-by-id/${encodeURIComponent(id)}`);
export const updateContactViewed = (id) => adminFetch(`/api/contact/view-update/${encodeURIComponent(id)}`, { method: 'PATCH' });

// Blog APIs - Unified with localStorage devprath_blogs
export const fetchAllBlogs = async (force = false) => {
  const cached = getStoredBlogs();
  if (!force && cached.length) {
    adminFetch('/api/blogs/fetch-all-blogs').then((r) => r.ok && r.data && setStoredBlogs(r.data)).catch(() => {});
    return { ok: true, status: 200, data: cached, error: null };
  }
  const res = await adminFetch('/api/blogs/fetch-all-blogs');
  if (res.ok && res.data) setStoredBlogs(res.data);
  return res;
};

export const fetchBlogById = (id) => adminFetch(`/api/blogs/fetch-blog/${encodeURIComponent(id)}`);

export const createBlog = async (body) => {
  const res = await adminFetch('/api/blogs/create-blog', { method: 'POST', body });
  if (res.ok && res.data) upsertStoredBlog(res.data);
  return res;
};

export const updateBlog = async (id, body) => {
  const res = await adminFetch(`/api/blogs/update-blog/${encodeURIComponent(id)}`, { method: 'PATCH', body });
  if (res.ok && res.data) upsertStoredBlog(res.data);
  return res;
};

export const deleteBlog = async (id) => {
  const res = await adminFetch(`/api/blogs/remove-blog/${encodeURIComponent(id)}`, { method: 'DELETE' });
  if (res.ok) deleteStoredBlog(id);
  return res;
};
