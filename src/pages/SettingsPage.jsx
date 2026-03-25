import React, { useState } from 'react';
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";

/**
 * SettingsPage Component
 * Settings and configuration page
 */
const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('organization');

  const tabs = ['Organization', 'Team', 'Permissions', 'Notifications'];

  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Header />
    <div className="p-8 space-y-8 max-w-4xl">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage organization and user settings</p>
      </div>

      {/* Settings Container */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        {/* Tabs */}
        <div className="border-b border-gray-200 flex">
          {tabs.map((tab, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`px-6 py-4 font-semibold border-b-2 transition ${
                activeTab === tab.toLowerCase()
                  ? 'text-blue-600 border-blue-600' 
                  : 'text-gray-600 border-transparent hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 space-y-6">
          {/* Organization Settings */}
          {activeTab === 'organization' && (
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Organization Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Organization Name
                  </label>
                  <input 
                    type="text" 
                    defaultValue="TechCorp Inc."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    defaultValue="contact@techcorp.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Website
                  </label>
                  <input 
                    type="text" 
                    defaultValue="https://techcorp.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="pt-4">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Multi-Tenant Settings */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Workspace & Tenants</h3>
            <div className="p-4 bg-gray-50 rounded-lg space-y-3">
              <p className="text-sm text-gray-700">
                <strong>Current Workspace:</strong> TechCorp Inc.
              </p>
              <p className="text-sm text-gray-600">
                You have access to 1 organization.
              </p>
              <p className="text-sm text-gray-600">
                Multi-tenant support is fully enabled. You can switch between organizations using the workspace selector in the sidebar.
              </p>
              <button className="mt-4 px-4 py-2 text-blue-600 hover:text-blue-700 font-semibold text-sm">
                Switch Organization →
              </button>
            </div>
          </div>

          {/* Team Invitations */}
          {activeTab === 'team' && (
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Team Members</h3>
              <div className="space-y-3">
                {['John Developer', 'Sarah Designer', 'Mike Backend', 'Alex Mobile'].map((name, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{name}</p>
                      <p className="text-xs text-gray-600">Engineer</p>
                    </div>
                    <button className="px-3 py-1 text-red-600 hover:text-red-700 text-sm font-medium">
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Invite New Member</h4>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter email address"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                    Invite
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Permissions Settings */}
          {activeTab === 'permissions' && (
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Role Permissions</h3>
              <div className="space-y-4">
                {['Admin', 'Manager', 'Engineer', 'Reporter'].map((role, idx) => (
                  <div key={idx} className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{role}</h4>
                    <p className="text-sm text-gray-600">
                      {role === 'Admin' && 'Full system access, user management, and configuration'}
                      {role === 'Manager' && 'Create, assign, and manage issues, view analytics'}
                      {role === 'Engineer' && 'Update issues, add comments, resolve issues'}
                      {role === 'Reporter' && 'Create and view own issues, add comments'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notifications Settings */}
          {activeTab === 'notifications' && (
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Notification Preferences</h3>
              <div className="space-y-3">
                {[
                  { label: 'Email on new issue assignment', checked: true },
                  { label: 'Email on issue comments', checked: true },
                  { label: 'Email on status changes', checked: true },
                  { label: 'Email on team mentions', checked: false },
                  { label: 'Email digest (weekly)', checked: true }
                ].map((pref, idx) => (
                  <label key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                    <input 
                      type="checkbox" 
                      defaultChecked={pref.checked}
                      className="w-4 h-4 rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-700">{pref.label}</span>
                  </label>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>

    </div>
  );
};

export default SettingsPage;