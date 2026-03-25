import React, { useState } from 'react';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Menu, X, Home, FileText, BarChart3, Users, Settings, LogOut } from 'lucide-react';
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: Home },
    { path: '/issues', label: 'Issues', icon: FileText },
    { path: '/analytics', label: 'Analytics', icon: BarChart3 },
    { path: '/team', label: 'Team', icon: Users },
    { path: '/settings', label: 'Settings', icon: Settings }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div className={`
        ${sidebarOpen ? 'w-64' : 'w-20'}
        bg-gray-50 border-r border-gray-200 transition-all duration-300
        sticky top-0 h-screen overflow-y-auto
      `}>

        {/* Workspace */}
        {sidebarOpen && (
          <div className="p-6 border-b border-gray-200">
            <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase">
              Workspace
            </label>

            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm">
              <option>TechCorp Inc.</option>
              <option>Design Studio</option>
            </select>
          </div>
        )}

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map(item => {

            const Icon = item.icon;

            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition
                ${isActive
                  ? 'bg-blue-100 text-blue-600 font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* User */}
        {sidebarOpen && (
          <div className="absolute bottom-6 left-6 right-6 bg-white rounded-lg border border-gray-200 p-4">

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
               {user?.email?.charAt(0).toUpperCase() || "U"}
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">
  {user?.email || "Guest"}
</p>
<p className="text-xs text-gray-600">
  {user?.role || "User"}
</p>
              </div>
            </div>

            <button
             onClick={() => {
  logout();
  navigate("/login");
}}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded text-sm font-medium transition"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>

          </div>
        )}

      </div>
    </>
  );
};

export default Sidebar;