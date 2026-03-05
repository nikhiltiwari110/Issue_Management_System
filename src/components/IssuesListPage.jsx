import React, { useState } from 'react';
import { Plus, Filter } from 'lucide-react';
import IssuesTable from './IssuesTable';

/**
 * IssuesListPage Component
 * Full page for viewing and managing all issues
 * Props:
 *   - issues (array): List of all issues
 *   - onIssueClick (function): Callback when clicking an issue
 *   - onCreateClick (function): Callback when creating new issue
 */
const IssuesListPage = ({ issues = [], onIssueClick, onCreateClick }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

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

  const filters = ['All', 'Open', 'In Progress', 'Resolved'];

  const filteredIssues = selectedFilter === 'all' 
    ? issues 
    : issues.filter(issue => issue.status === selectedFilter.toLowerCase().replace(' ', '-'));

  return (
    <div className="p-8 space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Issues</h1>
          <p className="text-gray-600 mt-1">Manage all issues and incidents ({filteredIssues.length} found)</p>
        </div>
        <button 
          onClick={onCreateClick}
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          <Plus className="w-5 h-5" />
          New Issue
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3 flex-wrap">
        {filters.map((filter, idx) => (
          <button 
            key={idx}
            onClick={() => setSelectedFilter(filter.toLowerCase().replace(' ', '-'))}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              (filter === 'All' && selectedFilter === 'all') ||
              selectedFilter === filter.toLowerCase().replace(' ', '-')
                ? 'bg-blue-600 text-white' 
                : 'bg-white border border-gray-300 text-gray-700 hover:border-blue-300'
            }`}
          >
            {filter}
          </button>
        ))}
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
          <Filter className="w-5 h-5" />
          More Filters
        </button>
      </div>

      {/* Issues Table */}
      <IssuesTable
        issues={filteredIssues}
        onRowClick={onIssueClick}
        priorityColors={priorityColors}
        statusColors={statusColors}
      />

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2">
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium">
          Previous
        </button>
        <button className="px-3 py-2 bg-blue-600 text-white rounded font-semibold">1</button>
        <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50 transition text-sm">2</button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium">
          Next
        </button>
      </div>
    </div>
  );
};

export default IssuesListPage;