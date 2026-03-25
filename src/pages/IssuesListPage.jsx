import React, { useState } from 'react';
import { Plus, Filter } from 'lucide-react';
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import IssuesTable from "../components/dashboard/IssuesTable";
import { useNavigate } from "react-router-dom";

const IssuesListPage = ({ issues = [], onIssueClick }) => {

  const navigate = useNavigate();
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

  const filteredIssues =
    selectedFilter === 'all'
      ? issues
      : issues.filter(
          issue =>
            issue.status === selectedFilter.toLowerCase().replace(' ', '-')
        );

  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <div className="p-8 space-y-6">

          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Issues</h1>
              <p className="text-gray-600 mt-1">
                Manage all issues ({filteredIssues.length})
              </p>
            </div>

            <button 
            onClick={() => navigate("/create-issue")}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
              <Plus className="w-5 h-5" />
              New Issue
            </button>

          </div>

          <div className="flex gap-3 flex-wrap">
            {filters.map((filter, idx) => (
              <button
                key={idx}
                onClick={() =>
                  setSelectedFilter(filter.toLowerCase().replace(' ', '-'))
                }
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  (filter === 'All' && selectedFilter === 'all') ||
                  selectedFilter === filter.toLowerCase().replace(' ', '-')
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}

            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700">
              <Filter className="w-5 h-5" />
              More Filters
            </button>
          </div>

          <IssuesTable
            issues={filteredIssues}
            onRowClick={onIssueClick}
            priorityColors={priorityColors}
            statusColors={statusColors}
          />

        </div>

      </div>

    </div>

  );
};

export default IssuesListPage;