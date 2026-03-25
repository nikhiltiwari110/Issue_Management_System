import React from 'react';
import { BarChart3 } from 'lucide-react';
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";

/**
 * AnalyticsPage Component
 * Analytics dashboard showing metrics and charts
 */
const AnalyticsPage = () => {
  const chartCards = [
    { title: 'Issues by Priority', subtitle: 'Breakdown of current issues' },
    { title: 'Resolution Time Trend', subtitle: 'Average resolution time over time' },
    { title: 'Issues by Team', subtitle: 'Issues assigned per team member' },
    { title: 'Status Distribution', subtitle: 'Current status of all issues' },
    { title: 'Issue Trends', subtitle: 'Issues created vs resolved per week' },
    { title: 'Team Performance', subtitle: 'Average resolution time by team member' }
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Header />
    <div className="p-8 space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600">Track issue metrics and team performance</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Issues', value: '144', subtext: 'All time' },
          { label: 'This Month', value: '32', subtext: '+20% vs last month' },
          { label: 'Avg Resolution', value: '2.4h', subtext: 'Improved by 0.3h' },
          { label: 'Resolution Rate', value: '86%', subtext: 'Above target' }
        ].map((metric, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-sm text-gray-600 font-medium">{metric.label}</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{metric.value}</p>
            <p className="text-xs text-gray-600 mt-2">{metric.subtext}</p>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {chartCards.map((chart, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-2">{chart.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{chart.subtitle}</p>
            <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Chart visualization placeholder</p>
                <p className="text-xs text-gray-400 mt-1">Replace with actual chart data</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Report Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Generate Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Weekly Report', 'Monthly Report', 'Team Performance'].map((report, idx) => (
            <button 
              key={idx}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              {report}
            </button>
          ))}
        </div>
      </div>
    </div>
     </div>

    </div>
  );
};

export default AnalyticsPage;