import React, { useState, useContext } from 'react';
import { Bell, Search, ChevronDown, LogOut } from 'lucide-react';
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

/**
 * Header Component
 * Contains: Logo, Search bar, Notifications, User menu
 * Used in: All pages
 */
const Header = ({ userRole = 'manager', userName = 'Drew Carroll' }) => {
  const { user, logout } = useContext(AuthContext);
const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left Section - Logo/Title */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            ⚡
          </div>
          <h1 className="text-xl font-bold text-gray-900 hidden sm:block">IssueTrack</h1>
        </div>

        {/* Center - Search Bar */}
        <div className="flex-1 max-w-md mx-auto hidden md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search issues..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        </div>

        {/* Right Section - Notifications & User Menu */}
        <div className="flex items-center gap-6">
          {/* Notifications Bell */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          {/* User Menu */}
          <div className="relative">
            <button 
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-3 pl-6 border-l border-gray-200 hover:bg-gray-50 rounded-lg px-3 py-2 transition"
            >
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
               {user?.email?.charAt(0).toUpperCase() || "U"}
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-gray-900">
  {user?.email || "Guest"}
</p>
<p className="text-xs text-gray-600">
  {user?.role || "User"}
</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {/* User Dropdown Menu */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="px-4 py-3 border-b border-gray-200">
                 <p className="text-sm font-semibold text-gray-900">
  {user?.email || "Guest"}
</p>
<p className="text-xs text-gray-600">
  {user?.role || "User"}
</p>
                </div>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition">
                  Profile
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition">
                  Settings
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition">
                  Help
                </button>
                <div className="border-t border-gray-200 px-4 py-2">
                  <button
  onClick={() => {
    logout();
    navigate("/login");
  }}
  className="w-full text-left flex items-center gap-2 text-sm text-red-600 hover:text-red-700 font-medium"
>
  <LogOut className="w-4 h-4" />
  Logout
</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;