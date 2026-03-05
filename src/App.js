import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardPage from './components/DashboardPage';
import IssuesListPage from './components/IssuesListPage';
import IssueDetailPage from './components/IssueDetailPage';
import CreateIssuePage from './components/CreateIssuePage';
import AnalyticsPage from './components/AnalyticsPage';
import SettingsPage from './components/SettingsPage';

/**
 * Main App Component
 * Integrates all components and manages routing/state
 */
const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  // Sample data
  const [issues] = useState([
    {
      id: 'ISS-001',
      title: 'Database Connection Timeout',
      description: 'Production database is becoming unresponsive, causing timeouts in API calls. Affecting ~30% of users.',
      priority: 'critical',
      status: 'open',
      assigned: 'John Developer',
      created: '2 hours ago',
      updated: '1 hour ago',
      comments: 5,
      reporter: 'Alice Manager',
      attachments: 1
    },
    {
      id: 'ISS-002',
      title: 'UI Button Styling Inconsistent',
      description: 'Submit buttons appear differently on Chrome vs Safari. Need cross-browser fix.',
      priority: 'medium',
      status: 'in-progress',
      assigned: 'Sarah Designer',
      created: '5 hours ago',
      updated: '2 hours ago',
      comments: 3,
      reporter: 'Bob QA',
      attachments: 0
    },
    {
      id: 'ISS-003',
      title: 'API Response Latency Spike',
      description: 'Average response time increased from 200ms to 800ms. Investigating database queries.',
      priority: 'high',
      status: 'in-progress',
      assigned: 'Mike Backend',
      created: '1 day ago',
      updated: '2 hours ago',
      comments: 8,
      reporter: 'Alice Manager',
      attachments: 2
    },
    {
      id: 'ISS-004',
      title: 'Mobile App Crash on Login',
      description: 'App crashes when logging in on iOS 17.2+. Android works fine.',
      priority: 'critical',
      status: 'open',
      assigned: 'Alex Mobile',
      created: '3 hours ago',
      updated: '30 minutes ago',
      comments: 2,
      reporter: 'Carol Support',
      attachments: 3
    },
    {
      id: 'ISS-005',
      title: 'Email Notification Delay',
      description: 'User notifications are being delayed by 5-10 minutes. Queue processing issue.',
      priority: 'low',
      status: 'open',
      assigned: 'Sam Backend',
      created: '6 hours ago',
      updated: '1 hour ago',
      comments: 1,
      reporter: 'Alice Manager',
      attachments: 0
    }
  ]);

  // Handle page navigation
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedIssue(null);
    setShowCreateForm(false);
  };

  // Handle issue selection
  const handleIssueClick = (issue) => {
    setSelectedIssue(issue);
    setShowCreateForm(false);
    setCurrentPage('issue-detail');
  };

  // Handle create issue
  const handleCreateClick = () => {
    setShowCreateForm(true);
    setSelectedIssue(null);
  };

  // Handle form submission
  const handleCreateSubmit = (formData) => {
    console.log('New issue created:', formData);
    setShowCreateForm(false);
    setCurrentPage('issues');
  };

  // Handle back to issues
  const handleBackToIssues = () => {
    setCurrentPage('issues');
    setSelectedIssue(null);
    setShowCreateForm(false);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto">
          {/* Dashboard Page */}
          {currentPage === 'dashboard' && !selectedIssue && !showCreateForm && (
            <DashboardPage 
              issues={issues}
              onIssueClick={handleIssueClick}
            />
          )}

          {/* Issues List Page */}
          {currentPage === 'issues' && !selectedIssue && !showCreateForm && (
            <IssuesListPage 
              issues={issues}
              onIssueClick={handleIssueClick}
              onCreateClick={handleCreateClick}
            />
          )}

          {/* Issue Detail Page */}
          {currentPage === 'issue-detail' && selectedIssue && (
            <IssueDetailPage 
              issue={selectedIssue}
              onBack={handleBackToIssues}
            />
          )}

          {/* Create Issue Form */}
          {showCreateForm && (
            <CreateIssuePage 
              onBack={handleBackToIssues}
              onSubmit={handleCreateSubmit}
            />
          )}

          {/* Analytics Page */}
          {currentPage === 'analytics' && (
            <AnalyticsPage />
          )}

          {/* Settings Page */}
          {currentPage === 'settings' && (
            <SettingsPage />
          )}

          {/* Team Page (Placeholder) */}
          {currentPage === 'team' && (
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900">Team</h1>
              <p className="text-gray-600 mt-2">Team management coming soon</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;