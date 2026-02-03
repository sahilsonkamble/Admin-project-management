import React from "react";

const tasks = [
  { id: 1, title: "Task 1", status: "pending" },
  { id: 2, title: "Task 2", status: "completed" },
  { id: 3, title: "Task 3", status: "pending" },
  { id: 4, title: "Task 4", status: "completed" },
  
]

export default function TaskList() {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-2 h-full">
      
      {/* Header */}
      <h2 className="text-lg font-semibold text-zinc-800 mb-2">Tasks List</h2>

      {/* Scrollable Task Rows */}
      <div className="flex-1 min-h-0 flex flex-col gap-2 overflow-y-auto">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-center justify-between px-4 py-3 
                       rounded-xl hover:bg-zinc-100 transition cursor-pointer ${
                task.status === "completed"
                  ? "bg-green-200 text-green-700"
                  : "bg-yellow-200 text-yellow-700"
              } `}
          >
            {/* Task Title */}
            <span className="text-zinc-800 font-medium">{task.title}</span>

            {/* Status */}
            <span
              className={`text-xs px-3 py-1 rounded-full capitalize ${
                task.status === "completed"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
