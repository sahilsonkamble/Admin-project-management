import React from "react";
import { FaTasks, FaCheckCircle, FaClipboardList, FaProjectDiagram } from "react-icons/fa";

export default function UserProfileAnalytics({ stats }) {
  // Default stats if not provided
  const defaultStats = {
    projectsCompleted: 1,
    tasksCompleted: 5,
    tasksAssigned: 10,
    tasksPending: 3,
  };

  const data = stats || defaultStats;

  const cards = [
    {
      title: "Projects Completed",
      value: data.projectsCompleted,
      icon: <FaProjectDiagram className="text-2xl text-white" />,
      bgColor: "bg-blue-500",
    },
    {
      title: "Tasks Completed",
      value: data.tasksCompleted,
      icon: <FaCheckCircle className="text-2xl text-white" />,
      bgColor: "bg-green-500",
    },
    {
      title: "Tasks Assigned",
      value: data.tasksAssigned,
      icon: <FaTasks className="text-2xl text-white" />,
      bgColor: "bg-yellow-500",
    },
    {
      title: "Tasks Pending",
      value: data.tasksPending,
      icon: <FaClipboardList className="text-2xl text-white" />,
      bgColor: "bg-red-500",
    },
  ];

  return (
    <div className="p-10 flex flex-col gap-4 h-full">
      <h2 className="text-lg font-semibold text-zinc-800 mb-2">User Analytics</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 overflow-y-auto">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 p-4 rounded-2xl shadow-sm bg-white hover:shadow-md transition"
          >
            <div
              className={`p-3 rounded-xl ${card.bgColor} flex items-center justify-center`}
            >
              {card.icon}
            </div>

            <div className="flex flex-col">
              <span className="text-sm text-zinc-500">{card.title}</span>
              <span className="text-xl font-bold text-zinc-800">{card.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
