import React, { useState } from 'react';
import { Paperclip } from 'lucide-react';
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import { useNavigate } from "react-router-dom";

const CreateIssuePage = () => {

  const navigate = useNavigate();

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

    console.log("Issue Created:", formData);

    navigate("/issues");
  };

  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <div className="p-8">

          <button
            onClick={() => navigate("/issues")}
            className="text-blue-600 hover:text-blue-700 font-semibold mb-4"
          >
            ← Cancel
          </button>

          <div className="max-w-2xl bg-white border border-gray-200 rounded-lg p-8">

            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Report New Issue
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Issue Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Description
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="6"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Priority */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Priority
                </label>

                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-6 border-t border-gray-200">

                <button
                  type="button"
                  onClick={() => navigate("/issues")}
                  className="flex-1 px-6 py-2 border border-gray-300 rounded-lg"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex-1 px-6 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Create Issue
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>

  );
};

export default CreateIssuePage;