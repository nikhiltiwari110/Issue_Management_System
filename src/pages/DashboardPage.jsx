import React from 'react';
import { AlertCircle, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import StatCard from "../components/dashboard/StatCard";
import IssuesTable from "../components/dashboard/IssuesTable";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";

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
  const sampleIssues = [
  {
    id: "ISS-101",
    title: "Login page crash",
    priority: "high",
    status: "open",
    assigned: "Alice",
    comments: 4,
    created: "2h ago"
  },
  {
    id: "ISS-102",
    title: "Payment API timeout",
    priority: "critical",
    status: "in-progress",
    assigned: "Bob",
    comments: 2,
    created: "5h ago"
  },
  {
    id: "ISS-103",
    title: "Profile image not uploading",
    priority: "medium",
    status: "resolved",
    assigned: "Charlie",
    comments: 1,
    created: "1d ago"
  }
];
  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <div className="p-8 space-y-8">

          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome back!</p>
          </div>

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

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-900">Recent Issues</h2>

            <IssuesTable
  issues={sampleIssues}
  priorityColors={priorityColors}
  statusColors={statusColors}
/>
            {/* <IssuesTable
              issues={issues.slice(0, 5)}
              onRowClick={onIssueClick}
              priorityColors={priorityColors}
              statusColors={statusColors}
            /> */}

          </div>

        </div>

      </div>

    </div>

  );
};

export default DashboardPage;