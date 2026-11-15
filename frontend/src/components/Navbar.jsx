import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Compass,
  Home,
  User,
  LogOut,
  Menu,
  X,
  Building2,
  Shield,
  LayoutDashboard,
  Search,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, isAuthenticated, role, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    setUserDropdownOpen(false);
    navigate('/');
  };

  const getDashboardPath = () => {
    if (role === 'admin') return '/admin/dashboard';
    if (role === 'owner') return '/owner/dashboard';
    return '/dashboard';
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 to-brand-500 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-brand-900 via-brand-700 to-brand-600 bg-clip-text text-transparent">
                StaySphere
              </span>
              <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-600 -mt-1">
                Student & PG Discovery
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 text-sm font-semibold text-slate-600">
            <Link
              to="/properties"
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                location.pathname === '/properties'
                  ? 'text-brand-600 bg-brand-50'
                  : 'hover:text-brand-600 hover:bg-slate-50'
              }`}
            >
              <Search className="w-4 h-4" />
              Explore Stays
            </Link>

            <Link
              to="/properties?hasTour=true"
              className="px-3 py-1.5 rounded-lg hover:text-brand-600 hover:bg-slate-50 transition-colors flex items-center gap-1.5 text-slate-600"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              360° Tours
            </Link>

            <Link
              to="/#why-staysphere"
              className="px-3 py-1.5 rounded-lg hover:text-brand-600 hover:bg-slate-50 transition-colors text-slate-600"
            >
              Why StaySphere
            </Link>

            {/* Direct Dashboard Link if logged in */}
            {isAuthenticated && (
              <Link
                to={getDashboardPath()}
                className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                  location.pathname.includes('dashboard')
                    ? 'text-brand-600 bg-brand-50 font-bold'
                    : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                {role === 'admin' ? 'Admin Portal' : role === 'owner' ? 'Owner Portal' : 'My Dashboard'}
              </Link>
            )}
          </div>

          {/* Right Section: Auth */}
          <div className="hidden md:flex items-center gap-3">

            {isAuthenticated ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-600 text-white font-bold text-xs flex items-center justify-center">
                    {user?.name?.[0] || 'U'}
                  </div>
                  <div className="text-left text-xs pr-1">
                    <span className="font-bold text-slate-800 block truncate max-w-[100px]">
                      {user?.name?.split(' ')[0]}
                    </span>
                    <span className="text-[10px] text-brand-600 uppercase font-bold tracking-wider">
                      {role}
                    </span>
                  </div>
                </button>

                {/* Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50 text-xs">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="font-bold text-slate-900">{user?.name}</p>
                      <p className="text-slate-400 text-[11px] truncate">{user?.email}</p>
                    </div>
                    <Link
                      to={getDashboardPath()}
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-brand-600 font-medium"
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      Dashboard
                    </Link>
                    {role === 'owner' && (
                      <Link
                        to="/owner/dashboard#add"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-brand-600 font-medium"
                      >
                        <Building2 className="w-4 h-4" />
                        List New Property
                      </Link>
                    )}
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="w-full text-left flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 font-medium border-t border-slate-100 mt-1"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-brand-600 transition-colors"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-sm transition-all"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-3">
          <Link
            to="/properties"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700"
          >
            Explore Stays
          </Link>
          <Link
            to="/properties?hasTour=true"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700"
          >
            360° Virtual Tours
          </Link>
          {isAuthenticated && (
            <Link
              to={getDashboardPath()}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-brand-600"
            >
              Open Dashboard ({role})
            </Link>
          )}

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            {isAuthenticated ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 text-center text-xs font-bold text-red-600 bg-red-50 rounded-xl"
              >
                Sign Out
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 text-center text-xs font-bold text-slate-700 border border-slate-300 rounded-xl"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 text-center text-xs font-bold text-white bg-brand-600 rounded-xl"
                >
                  Create Free Account
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
