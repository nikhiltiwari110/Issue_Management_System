import React, { useState } from 'react';
import { Send, Paperclip, Archive, Edit2 } from 'lucide-react';

/**
 * IssueDetailPage Component
 * Detailed view of a single issue with comments and timeline
 * Props:
 *   - issue (object): Issue to display
 *   - onBack (function): Callback to go back
 */
const IssueDetailPage = ({ issue, onBack }) => {
  const [comment, setComment] = useState('');

  if (!issue) {
    return (
      <div className="p-8">
        <p className="text-gray-600">No issue selected</p>
      </div>
    );
  }

  const priorityColors = {
    critical: { bg: '#EF4444', label: '🔴 Critical' },
    high: { bg: '#F97316', label: '🟠 High' },
    medium: { bg: '#EAB308', label: '🟡 Medium' },
    low: { bg: '#22C55E', label: '🟢 Low' }
  };

  const statusColors = {
    open: { bg: '#DBEAFE', text: '#1E40AF', label: '🔵 Open' },
    'in-progress': { bg: '#FEF3C7', text: '#92400E', label: '🟡 In Progress' },
    resolved: { bg: '#DCFCE7', text: '#166534', label: '✅ Resolved' }
  };

  const priorityColor = priorityColors[issue.priority] || priorityColors.low;
  const statusColor = statusColors[issue.status] || statusColors.open;

  return (
    <div className="p-8 space-y-6">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="text-blue-600 hover:text-blue-700 font-semibold mb-4"
      >
        ← Back to Issues
      </button>

      <div className="max-w-4xl bg-white border border-gray-200 rounded-lg p-8 space-y-6">
        {/* Header */}
        <div>
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{issue.title}</h1>
              <p className="text-gray-600">{issue.id} • Created by {issue.reporter}</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
                <Edit2 className="w-4 h-4" />
                Edit
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <Archive className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Status & Priority Badges */}
          <div className="flex gap-4 flex-wrap">
            <span 
              className="px-3 py-1 rounded text-sm font-bold text-white"
              style={{ backgroundColor: priorityColor.bg }}
            >
              {priorityColor.label}
            </span>
            <span 
              className="px-3 py-1 rounded text-sm font-bold"
              style={{ backgroundColor: statusColor.bg, color: statusColor.text }}
            >
              {statusColor.label}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed">{issue.description}</p>

          {issue.attachments && issue.attachments > 0 && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Paperclip className="w-4 h-4" />
                {issue.attachments} Attachment{issue.attachments > 1 ? 's' : ''}
              </p>
            </div>
          )}
        </div>

        {/* Comments Section */}
        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Comments</h2>
          
          {/* Sample Comments */}
          <div className="space-y-4 mb-6">
            {[
              { author: 'John Developer', time: '2 hours ago', text: 'I\'ve identified the root cause. It\'s related to the database connection pool.' },
              { author: 'Sarah Designer', time: '1 hour ago', text: 'Great! Let me know if you need any help with the UI implementation.' }
            ].map((c, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold text-white text-sm">
                  {c.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">{c.author}</p>
                  <p className="text-xs text-gray-600">{c.time}</p>
                  <p className="text-gray-700 mt-2">{c.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Add Comment */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white">
                DC
              </div>
              <div className="flex-1">
                <textarea 
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
                <div className="flex justify-end mt-3">
                  <button 
                    disabled={!comment.trim()}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details Sidebar */}
        <div className="border-t border-gray-200 pt-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Assigned to</p>
              <p className="font-semibold text-gray-900">{issue.assigned}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Status</p>
              <p className="font-semibold text-gray-900 capitalize">{issue.status}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Created</p>
              <p className="text-sm text-gray-700">{issue.created}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Last Updated</p>
              <p className="text-sm text-gray-700">{issue.updated}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetailPage;