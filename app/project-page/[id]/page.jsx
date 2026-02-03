"use client";
import React, { useState } from "react";

/* ---------------- TEAM ---------------- */
const teamMembers = [
  { id: 1, name: "User One", role: "Admin" },
  { id: 2, name: "User Two", role: "Developer" },
  { id: 3, name: "User Three", role: "Tester" },
];

/* ---------------- TASKS ---------------- */
const initialTasks = [
  {
    id: 1,
    title: "Design login page",
    start: "09:00",
    end: "10:00",
    assignedById: 1,
    assignedToId: 2,
    status: "Todo",
    priority: "High",
  },
  {
    id: 2,
    title: "API integration",
    start: "10:00",
    end: "11:00",
    assignedById: 1,
    assignedToId: 3,
    status: "Completed",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Schema design",
    start: "11:00",
    end: "12:00",
    assignedById: 2,
    assignedToId: 3,
    status: "Pending",
    priority: "Low",
  },
  {
    id: 4,
    title: "Create dashboard UI",
    start: "12:00",
    end: "13:00",
    assignedById: 1,
    assignedToId: 2,
    status: "Todo",
    priority: "High",
  },
  {
    id: 5,
    title: "Fix auth bugs",
    start: "13:00",
    end: "14:00",
    assignedById: 2,
    assignedToId: 2,
    status: "Pending",
    priority: "High",
  },
  {
    id: 6,
    title: "Write unit tests",
    start: "14:00",
    end: "15:00",
    assignedById: 1,
    assignedToId: 3,
    status: "Todo",
    priority: "Medium",
  },
  {
    id: 7,
    title: "Setup CI pipeline",
    start: "15:00",
    end: "16:00",
    assignedById: 1,
    assignedToId: 2,
    status: "Completed",
    priority: "Medium",
  },
  {
    id: 8,
    title: "Improve form validation",
    start: "09:30",
    end: "10:30",
    assignedById: 2,
    assignedToId: 3,
    status: "Pending",
    priority: "Low",
  },
  {
    id: 9,
    title: "Optimize DB queries",
    start: "10:30",
    end: "11:30",
    assignedById: 1,
    assignedToId: 2,
    status: "Todo",
    priority: "High",
  },
  {
    id: 10,
    title: "Add dark mode",
    start: "11:30",
    end: "12:30",
    assignedById: 1,
    assignedToId: 3,
    status: "Todo",
    priority: "Medium",
  },
  {
    id: 11,
    title: "User profile page",
    start: "12:30",
    end: "13:30",
    assignedById: 2,
    assignedToId: 2,
    status: "Pending",
    priority: "Medium",
  },
  {
    id: 12,
    title: "Notification service",
    start: "13:30",
    end: "14:30",
    assignedById: 1,
    assignedToId: 3,
    status: "Todo",
    priority: "High",
  },
  {
    id: 13,
    title: "Audit logs",
    start: "14:30",
    end: "15:30",
    assignedById: 1,
    assignedToId: 2,
    status: "Completed",
    priority: "Low",
  },
  {
    id: 14,
    title: "Refactor components",
    start: "15:30",
    end: "16:30",
    assignedById: 2,
    assignedToId: 3,
    status: "Pending",
    priority: "Medium",
  },
  {
    id: 15,
    title: "Accessibility fixes",
    start: "09:00",
    end: "10:00",
    assignedById: 1,
    assignedToId: 2,
    status: "Todo",
    priority: "High",
  },
  {
    id: 16,
    title: "Pagination logic",
    start: "10:00",
    end: "11:00",
    assignedById: 2,
    assignedToId: 3,
    status: "Completed",
    priority: "Low",
  },
  {
    id: 17,
    title: "Search feature",
    start: "11:00",
    end: "12:00",
    assignedById: 1,
    assignedToId: 2,
    status: "Pending",
    priority: "Medium",
  },
  {
    id: 18,
    title: "Export reports",
    start: "12:00",
    end: "13:00",
    assignedById: 1,
    assignedToId: 3,
    status: "Todo",
    priority: "Medium",
  },
  {
    id: 19,
    title: "Email templates",
    start: "13:00",
    end: "14:00",
    assignedById: 2,
    assignedToId: 2,
    status: "Todo",
    priority: "Low",
  },
  {
    id: 20,
    title: "Role permissions",
    start: "14:00",
    end: "15:00",
    assignedById: 1,
    assignedToId: 3,
    status: "Pending",
    priority: "High",
  },
  {
    id: 21,
    title: "Session handling",
    start: "15:00",
    end: "16:00",
    assignedById: 1,
    assignedToId: 2,
    status: "Completed",
    priority: "Medium",
  },
  {
    id: 22,
    title: "API rate limiting",
    start: "09:30",
    end: "10:30",
    assignedById: 2,
    assignedToId: 3,
    status: "Todo",
    priority: "High",
  },
  {
    id: 23,
    title: "Improve error handling",
    start: "10:30",
    end: "11:30",
    assignedById: 1,
    assignedToId: 2,
    status: "Pending",
    priority: "Medium",
  },
  {
    id: 24,
    title: "File upload support",
    start: "11:30",
    end: "12:30",
    assignedById: 1,
    assignedToId: 3,
    status: "Todo",
    priority: "High",
  },
  {
    id: 25,
    title: "Caching layer",
    start: "12:30",
    end: "13:30",
    assignedById: 2,
    assignedToId: 2,
    status: "Completed",
    priority: "Medium",
  },
  {
    id: 26,
    title: "Load testing",
    start: "13:30",
    end: "14:30",
    assignedById: 1,
    assignedToId: 3,
    status: "Pending",
    priority: "Low",
  },
  {
    id: 27,
    title: "UI polish",
    start: "14:30",
    end: "15:30",
    assignedById: 1,
    assignedToId: 2,
    status: "Todo",
    priority: "Medium",
  },
  {
    id: 28,
    title: "Docs update",
    start: "15:30",
    end: "16:30",
    assignedById: 2,
    assignedToId: 3,
    status: "Completed",
    priority: "Low",
  },
  {
    id: 29,
    title: "Security review",
    start: "09:00",
    end: "10:00",
    assignedById: 1,
    assignedToId: 2,
    status: "Pending",
    priority: "High",
  },
  {
    id: 30,
    title: "Release prep",
    start: "10:00",
    end: "11:00",
    assignedById: 1,
    assignedToId: 3,
    status: "Todo",
    priority: "High",
  },
];

/* ---------------- HELPERS ---------------- */
const getUserName = (id) =>
  teamMembers.find((u) => u.id === id)?.name || "Unknown";

/* ---------------- COMPONENT ---------------- */
export default function ProjectPage() {
  const [tasks] = useState(initialTasks);

  const statusStyles = {
    Todo: "bg-zinc-100 text-zinc-600",
    Pending: "bg-yellow-100 text-yellow-700",
    Completed: "bg-green-100 text-green-700",
  };

  const priorityStyles = {
    Low: "bg-blue-100 text-blue-700",
    Medium: "bg-orange-100 text-orange-700",
    High: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-zinc-800  p-6 h-full overflow-hidden">
      <div className="flex gap-6 h-full">

        {/* ---------------- TASK BOARD ---------------- */}
        <section className="flex-1 bg-white rounded-3xl shadow-sm flex flex-col overflow-hidden">
          <div className="px-6 py-4">
            <h1 className="text-xl font-semibold">Project Name</h1>
            <p className="text-sm text-zinc-500">Task assignment overview</p>
          </div>

          <div className="border m-3 rounded-2xl overflow-y-scroll flex-1">
            {/* Header */}
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr]
                            px-6 py-3 text-xs text-zinc-500 uppercase bg-zinc-50">
              <span>Task</span>
              <span>Status</span>
              <span>Priority</span>
              <span>Start</span>
              <span>End</span>
              <span>Assigned TO</span>
              <span>Assigned by</span>
            </div>

            {/* Rows */}
            <div className="overflow-y-auto">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr]
                             px-6 py-4 items-center hover:bg-zinc-50 transition"
                >
                  {/* Task */}
                  <span className="font-medium">{task.title}</span>

                  {/* Status */}
                  <span
                    className={`text-xs px-2 py-1 rounded-full w-fit
                      ${statusStyles[task.status]}`}
                  >
                    {task.status}
                  </span>

                  {/* Priority */}
                  <span
                    className={`text-xs px-2 py-1 rounded-full w-fit
                      ${priorityStyles[task.priority]}`}
                  >
                    {task.priority}
                  </span>

                  {/* Times */}
                  <span className="text-sm text-zinc-600">{task.start}</span>
                  <span className="text-sm text-zinc-600">{task.end}</span>

                  {/* Assignment Info */}

                  <span className="text-sm text-zinc-600">  {getUserName(task.assignedById)}</span>

                  <span className="text-sm text-zinc-600"> {getUserName(task.assignedToId)}</span>

      


                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- TEAM SIDEBAR ---------------- */}
        <aside className="w-80 bg-white rounded-3xl shadow-sm p-4">
          <h2 className="text-sm font-semibold text-zinc-700 mb-4 uppercase">
            Team Members
          </h2>

          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-zinc-100"
            >
              <div className="h-8 w-8 rounded-full bg-zinc-400 flex items-center justify-center text-xs text-white font-semibold">
                {member.name.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-sm">{member.name}</p>
                <p className="text-xs text-zinc-500">{member.role}</p>
              </div>
            </div>
          ))}
        </aside>

      </div>
    </div>
  );
}
