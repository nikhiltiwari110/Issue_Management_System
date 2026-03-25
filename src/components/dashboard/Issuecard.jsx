import React from 'react';
import { AlertCircle, Clock, CheckCircle, MessageCircle, MoreVertical } from 'lucide-react';

/**
 * IssueCard Component
 * Displays a single issue with details
 * Props:
 *   - issue (object): Issue data { id, title, priority, status, assigned, created, comments }
 *   - onViewClick (function): Callback when clicking view
 *   - priorityColors (object): Color mapping for priorities
 *   - statusColors (object): Color mapping for statuses
 */
const IssueCard = ({ 
  issue, 
  onViewClick, 
  priorityColors, 
  statusColors 
}) => {
  const getStatusIcon = (status) => {
    switch(status) {
      case 'open': return <AlertCircle className="w-4 h-4" />;
      case 'in-progress': return <Clock className="w-4 h-4" />;
      case 'resolved': return <CheckCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  const priorityColor = priorityColors[issue.priority] || priorityColors.low;
  const statusColor = statusColors[issue.status] || statusColors.open;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-blue-300 transition cursor-pointer group">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {/* Header: ID, Priority, Created */}
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <button 
              onClick={() => onViewClick && onViewClick(issue)}
              className="font-mono text-sm font-bold text-blue-600 hover:underline"
            >
              {issue.id}
            </button>
            <span 
              className="px-2 py-1 rounded text-xs font-bold text-white"
              style={{ backgroundColor: priorityColor.bg }}
            >
              {issue.priority.toUpperCase()}
            </span>
            <span className="text-xs text-gray-500 ml-auto">{issue.created}</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onViewClick && onViewClick(issue)}
            className="text-sm font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition"
          >
            {issue.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-gray-600 mb-3 line-clamp-1">
            {issue.description}
          </p>

          {/* Footer: Assigned & Comments */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs">
              <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {issue.assigned.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="text-gray-700">{issue.assigned}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <MessageCircle className="w-4 h-4" />
              {issue.comments || 0}
            </div>
          </div>
        </div>

        {/* Right: Status & Menu */}
        <div className="flex flex-col items-end gap-2 ml-4">
          <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: statusColor.text }}>
            {getStatusIcon(issue.status)}
            <span className="text-xs uppercase">{issue.status}</span>
          </div>
          <button className="p-2 hover:bg-gray-200 rounded transition opacity-0 group-hover:opacity-100">
            <MoreVertical className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;