"use client";

import React, { useState } from "react";

export default function Applications() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Draft");
  const [description, setDescription] = useState("");
  const [toWhom, setToWhom] = useState("");

  const [applications, setApplications] = useState([
    { title: "App 1", status: "In Progress", toWhom: "Manager", description: "Sample description" },
    { title: "Leave form 1 to 10", status: "Submitted", toWhom: "HR", description: "Sample description" },
  ]);

  const handleSubmit = () => {
    const newApp = { title, status, toWhom, description };
    setApplications([newApp, ...applications]);
    setIsOpen(false);
    setTitle("");
    setStatus("Draft");
    setDescription("");
    setToWhom("");
  };

  const statusColors = {
    Draft: "bg-zinc-100 text-zinc-700",
    "In Progress": "bg-yellow-100 text-yellow-700",
    Submitted: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className="flex flex-col gap-6 h-full">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-400">Your Applications</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
        >
          + New Application
        </button>
      </div>

      {/* Applications List */}
      <div className="bg-white rounded-2xl shadow flex-1 min-h-0 overflow-y-auto p-4 flex flex-col gap-3">
        {applications.map((app, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-zinc-50 rounded-xl hover:bg-green-50 transition"
          >
            <div className="flex flex-col gap-1">
              <p className="font-medium text-zinc-900">{app.title}</p>
              <p className="text-sm text-zinc-500">To: {app.toWhom}</p>
              <p className="text-xs text-zinc-400 truncate">{app.description}</p>
            </div>
            <span className={`text-sm px-3 py-1 rounded-full ${statusColors[app.status]}`}>
              {app.status}
            </span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)} />

          {/* Dialog */}
          <div className="relative bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4">New Application</h2>

            <form className="flex flex-col gap-4 text-black">
              <input
                type="text"
                placeholder="Application title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <textarea
                placeholder="Application description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="border rounded-xl px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="To whom"
                value={toWhom}
                onChange={(e) => setToWhom(e.target.value)}
                className="border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="Draft">Draft</option>
                <option value="In Progress">In Progress</option>
                <option value="Submitted">Submitted</option>
                <option value="Rejected">Rejected</option>
              </select>
            </form>

            {/* Actions */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl border"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700"
              >
                Create
              </button>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
