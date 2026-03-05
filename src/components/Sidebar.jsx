import React from 'react';
import { Menu, X, Home, FileText, BarChart3, Users, Settings, LogOut } from 'lucide-react';

/**
 * Sidebar Component
 * Contains: Navigation menu, Organization selector, User profile
 * Props: sidebarOpen (bool), setSidebarOpen (function), currentPage (string), setCurrentPage (function)
 */
const Sidebar = ({ sidebarOpen, setSidebarOpen, currentPage, setCurrentPage }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'issues', label: 'Issues', icon: FileText },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings }
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

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        ${sidebarOpen ? 'w-64' : 'w-20'} 
        bg-gray-50 border-r border-gray-200 transition-all duration-300 
        sticky top-0 h-screen overflow-y-auto z-40
        fixed md:relative md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Organization Selector */}
        {sidebarOpen && (
          <div className="p-6 border-b border-gray-200">
            <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase">
              Workspace
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium bg-white hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
              <option>TechCorp Inc.</option>
              <option>Design Studio</option>
              <option>Cloud Systems</option>
            </select>
          </div>
        )}

        {/* Navigation Menu */}
        <nav className="p-4 space-y-2">
          {menuItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  currentPage === item.id
                    ? 'bg-blue-100 text-blue-600 font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                title={item.label}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* User Profile - Bottom */}
        {sidebarOpen && (
          <div className="absolute bottom-6 left-6 right-6 bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                DC
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">Drew Carroll</p>
                <p className="text-xs text-gray-600">Manager</p>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded text-sm font-medium transition">
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