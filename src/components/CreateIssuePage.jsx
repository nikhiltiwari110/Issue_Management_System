import React, { useState } from 'react';
import { Paperclip } from 'lucide-react';

/**
 * CreateIssuePage Component
 * Form for creating new issues
 * Props:
 *   - onBack (function): Callback to go back
 *   - onSubmit (function): Callback when form is submitted
 */
const CreateIssuePage = ({ onBack, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    assignee: 'unassigned'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    setFormData({ title: '', description: '', priority: 'medium', assignee: 'unassigned' });
  };

  return (
    <div className="p-8">
      <button 
        onClick={onBack}
        className="text-blue-600 hover:text-blue-700 font-semibold mb-4"
      >
        ← Cancel
      </button>

      <div className="max-w-2xl bg-white border border-gray-200 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Report New Issue</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Issue Title <span className="text-red-500">*</span>
            </label>
            <input 
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Brief title of the issue"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Detailed description of the issue..."
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="6"
            />
          </div>

          {/* Priority & Assignee */}
          <div className="grid grid-cols-2 gap-6">
            {/* Priority */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Priority <span className="text-red-500">*</span>
              </label>
              <select 
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>
            </div>

            {/* Assignee */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Assign to
              </label>
              <select 
                name="assignee"
                value={formData.assignee}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="unassigned">Unassigned</option>
                <option value="john-developer">John Developer</option>
                <option value="sarah-designer">Sarah Designer</option>
                <option value="mike-backend">Mike Backend</option>
                <option value="alex-mobile">Alex Mobile</option>
              </select>
            </div>
          </div>

          {/* Attachments */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Attachments
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition cursor-pointer bg-gray-50">
              <Paperclip className="w-6 h-6 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Drop files here or click to upload</p>
              <p className="text-xs text-gray-500 mt-1">Max 10MB per file</p>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-6 border-t border-gray-200">
            <button 
              type="button"
              onClick={onBack}
              className="flex-1 px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="flex-1 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Create Issue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateIssuePage;