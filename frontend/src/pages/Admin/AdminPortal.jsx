import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  LogOut,
  MessageSquare,
  Newspaper,
  LayoutDashboard,
  ExternalLink,
} from 'lucide-react';
import logo from '../../assets/logo/logo.png';
import { getAdminAuthStatus, logoutAdmin } from '../../utils/adminApi';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import AdminContacts from './AdminContacts';
import AdminBlogs from './AdminBlogs';

const VALID_TABS = ['dashboard', 'contacts', 'blogs'];

export default function AdminPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => getAdminAuthStatus());
  const [loggingOut, setLoggingOut] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeSection, setActiveSection] = useState(() =>
    VALID_TABS.includes(tabParam) ? tabParam : 'dashboard'
  );
  const [blogDefaultCreate, setBlogDefaultCreate] = useState(false);

  useEffect(() => {
    if (VALID_TABS.includes(tabParam)) {
      setActiveSection(tabParam);
    }
  }, [tabParam]);

  const handleSectionChange = (sec, options = {}) => {
    setActiveSection(sec);
    setSearchParams(sec === 'dashboard' ? {} : { tab: sec });
    setBlogDefaultCreate(Boolean(options.create));
  };

  useEffect(() => {
    const handleAuthChange = (e) => {
      setIsAuthenticated(e.detail?.isAuthenticated ?? false);
    };
    window.addEventListener('devprath:auth-change', handleAuthChange);
    return () => window.removeEventListener('devprath:auth-change', handleAuthChange);
  }, []);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await logoutAdmin();
    } catch (err) {
      console.warn('Logout notice:', err);
    } finally {
      setIsAuthenticated(false);
      setLoggingOut(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <AdminLogin
        onLoginSuccess={() => {
          setIsAuthenticated(true);
          handleSectionChange('dashboard');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col font-sans">
      {/* Topbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E0D8] shadow-xs">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-3">
          {/* Logo & Brand title */}
          <Link
            to="/"
            title="Devprath Homepage"
            className="flex items-center gap-3 sm:gap-3.5 min-w-0 hover:opacity-90 transition-opacity"
          >
            <img
              src={logo}
              alt="Devprath"
              className="h-18 sm:h-20 lg:h-22 w-auto object-contain shrink-0 -my-2 sm:-my-3"
            />
            <div className="h-6 sm:h-7 w-px bg-[#E5E0D8] shrink-0" />
            <span className="text-xs sm:text-sm font-serif font-bold text-[#1F1E1C] leading-tight truncate">
              Admin Portal
            </span>
          </Link>

          <div className="flex items-center gap-2">
            {/* Desktop Navigation Tabs */}
            <div className="hidden md:flex items-center bg-[#FAF7F2] border border-[#E5E0D8] p-1 rounded-xl text-xs font-medium">
              <button
                type="button"
                onClick={() => handleSectionChange('dashboard')}
                className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                  activeSection === 'dashboard'
                    ? 'bg-[#1F1E1C] text-white shadow-xs'
                    : 'text-[#6D675E] hover:text-[#1F1E1C]'
                }`}
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Dashboard</span>
              </button>
              <button
                type="button"
                onClick={() => handleSectionChange('contacts')}
                className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                  activeSection === 'contacts'
                    ? 'bg-[#1F1E1C] text-white shadow-xs'
                    : 'text-[#6D675E] hover:text-[#1F1E1C]'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Inquiries</span>
              </button>
              <button
                type="button"
                onClick={() => handleSectionChange('blogs')}
                className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                  activeSection === 'blogs'
                    ? 'bg-[#1F1E1C] text-white shadow-xs'
                    : 'text-[#6D675E] hover:text-[#1F1E1C]'
                }`}
              >
                <Newspaper className="w-3.5 h-3.5" />
                <span>Articles &amp; Blogs</span>
              </button>
            </div>

            {/* View Live Blog Link */}
            <a
              href="/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-[#E5E0D8] bg-white hover:bg-[#FAF7F2] text-[#6D675E] hover:text-[#1F1E1C] text-xs font-medium transition-colors shadow-xs flex items-center gap-1 shrink-0"
              title="View Public Blog (Opens in new tab)"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#B9935A]" />
              <span className="hidden sm:inline">View Blog</span>
            </a>

            {/* Logout Button */}
            <button
              type="button"
              onClick={handleLogout}
              disabled={loggingOut}
              className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg border border-[#E5E0D8] bg-white hover:bg-rose-50 text-[#1F1E1C] hover:text-rose-700 text-xs font-semibold transition-colors cursor-pointer shadow-xs disabled:opacity-50 shrink-0"
              title="Sign Out"
            >
              <LogOut className="w-3.5 h-3.5 text-rose-600" />
              <span className="hidden sm:inline">{loggingOut ? 'Signing out...' : 'Sign Out'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Tabs */}
        <div className="md:hidden bg-[#FAF7F2] border-t border-[#E5E0D8] px-3 py-2">
          <div className="grid grid-cols-3 gap-1 bg-white border border-[#E5E0D8] p-1 rounded-xl text-xs font-medium">
            <button
              type="button"
              onClick={() => handleSectionChange('dashboard')}
              className={`py-2 px-1 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer text-center ${
                activeSection === 'dashboard'
                  ? 'bg-[#1F1E1C] text-white shadow-xs font-semibold'
                  : 'text-[#6D675E]'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Dashboard</span>
            </button>
            <button
              type="button"
              onClick={() => handleSectionChange('contacts')}
              className={`py-2 px-1 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer text-center ${
                activeSection === 'contacts'
                  ? 'bg-[#1F1E1C] text-white shadow-xs font-semibold'
                  : 'text-[#6D675E]'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Inquiries</span>
            </button>
            <button
              type="button"
              onClick={() => handleSectionChange('blogs')}
              className={`py-2 px-1 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer text-center ${
                activeSection === 'blogs'
                  ? 'bg-[#1F1E1C] text-white shadow-xs font-semibold'
                  : 'text-[#6D675E]'
              }`}
            >
              <Newspaper className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Blogs</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto p-4 sm:p-6 lg:p-8">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-lg sm:text-xl font-serif font-semibold text-[#1F1E1C] tracking-tight">
            {activeSection === 'dashboard'
              ? 'Admin Dashboard'
              : activeSection === 'contacts'
              ? 'Customer Inquiries'
              : 'Articles & Blogs'}
          </h1>
          <p className="text-xs text-[#6D675E] mt-0.5">
            {activeSection === 'dashboard'
              ? 'Overview of client inquiries and published articles.'
              : activeSection === 'contacts'
              ? 'Review and manage inbound contact submissions.'
              : 'Create, edit, and publish editorial articles.'}
          </p>
        </div>

        {activeSection === 'dashboard' && (
          <AdminDashboard
            onNavigate={(sec, opts) => handleSectionChange(sec, opts)}
          />
        )}
        {activeSection === 'contacts' && <AdminContacts />}
        {activeSection === 'blogs' && (
          <AdminBlogs defaultCreate={blogDefaultCreate} />
        )}
      </main>

      {/* Admin Footer */}
      <footer className="border-t border-[#E5E0D8] bg-white py-3.5 px-4 sm:px-6 text-center text-xs text-[#948C81]">
        <div className="max-w-[1400px] mx-auto">
          <span>&copy; {new Date().getFullYear()} Devprath Constructions LLP. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
}

