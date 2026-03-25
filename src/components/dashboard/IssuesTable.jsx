import React from 'react';
import { MessageCircle, MoreVertical } from 'lucide-react';

/**
 * IssuesTable Component
 * Displays issues in a table format
 * Props:
 *   - issues (array): List of issues
 *   - onRowClick (function): Callback when clicking a row
 *   - priorityColors (object): Color mapping
 *   - statusColors (object): Color mapping
 */
const IssuesTable = ({ 
  issues, 
  onRowClick, 
  priorityColors, 
  statusColors 
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">ID</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Title</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Priority</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Assigned</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Comments</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Created</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {issues && issues.length > 0 ? (
              issues.map((issue, idx) => {
                const priorityColor = priorityColors[issue.priority] || priorityColors.low;
                const statusColor = statusColors[issue.status] || statusColors.open;

                return (
                  <tr 
                    key={idx} 
                    className="border-b border-gray-200 hover:bg-gray-50 transition cursor-pointer"
                    onClick={() => onRowClick && onRowClick(issue)}
                  >
                    {/* ID */}
                    <td className="px-6 py-4">
                      <span className="font-mono text-sm font-bold text-blue-600">
                        {issue.id}
                      </span>
                    </td>

                    {/* Title */}
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {issue.title}
                    </td>

                    {/* Priority */}
                    <td className="px-6 py-4">
                      <span 
                        className="px-2 py-1 rounded text-xs font-bold text-white"
                        style={{ backgroundColor: priorityColor.bg }}
                      >
                        {issue.priority}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span 
                        className="px-2 py-1 rounded text-xs font-bold text-white"
                        style={{ backgroundColor: statusColor.bg, color: statusColor.text }}
                      >
                        {issue.status}
                      </span>
                    </td>

                    {/* Assigned */}
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {issue.assigned}
                    </td>

                    {/* Comments */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MessageCircle className="w-4 h-4" />
                        {issue.comments || 0}
                      </div>
                    </td>

                    {/* Created */}
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {issue.created}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="p-2 hover:bg-gray-200 rounded transition"
                      >
                        <MoreVertical className="w-4 h-4 text-gray-600" />
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="8" className="px-6 py-8 text-center text-gray-600">
                  No issues found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssuesTable;