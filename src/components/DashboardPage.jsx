import React from 'react';
import { AlertCircle, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import StatCard from './Statcard';
import IssuesTable from './IssuesTable';

/**
 * DashboardPage Component
 * Main dashboard showing overview and recent issues
 * Props:
 *   - issues (array): List of issues
 *   - onIssueClick (function): Callback when clicking an issue
 */
const DashboardPage = ({ issues = [], onIssueClick }) => {
  const priorityColors = {
    critical: { bg: '#EF4444' },
    high: { bg: '#F97316' },
    medium: { bg: '#EAB308' },
    low: { bg: '#22C55E' }
  };

  const statusColors = {
    open: { bg: '#DBEAFE', text: '#1E40AF' },
    'in-progress': { bg: '#FEF3C7', text: '#92400E' },
    resolved: { bg: '#DCFCE7', text: '#166534' }
  };

  const stats = [
    { label: 'Open Issues', value: '12', change: '+3', trend: 'up', icon: AlertCircle, color: 'red' },
    { label: 'In Progress', value: '8', change: '-1', trend: 'down', icon: Clock, color: 'blue' },
    { label: 'Resolved', value: '124', change: '+12', trend: 'up', icon: CheckCircle, color: 'green' },
    { label: 'Avg Resolution', value: '2.4h', change: '↓0.3h', trend: 'down', icon: TrendingUp, color: 'purple' }
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back, Drew! Here's your issue overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <StatCard
            key={idx}
            label={stat.label}
            value={stat.value}
            change={stat.change}
            trend={stat.trend}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>

      {/* Recent Issues Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Recent Issues</h2>
            <p className="text-sm text-gray-600">Latest 5 issues</p>
          </div>
        </div>

        {/* Issues Table */}
        <IssuesTable
          issues={issues.slice(0, 5)}
          onRowClick={onIssueClick}
          priorityColors={priorityColors}
          statusColors={statusColors}
        />
      </div>
    </div>
  );
};

export default DashboardPage;