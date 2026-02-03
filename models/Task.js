// models/Task.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const TaskSchema = new Schema(
  {
    // basic task info
    title: { type: String, required: true, trim: true },
    description: { type: String },

    // who created the task (manager / admin / lead)
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // 👇 user to whom task is assigned (logged-in user)
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // optional project reference
    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },

    // task status
    status: {
      type: String,
      enum: ["todo", "in-progress", "completed", "blocked"],
      default: "todo",
    },

    // task priority
    priority: {
      type: String,
      enum: ["low", "medium", "high", "urgent"],
      default: "medium",
    },

    // dates
    startDate: { type: Date },
    dueDate: { type: Date },
    completedAt: { type: Date },

    // attachments (file URLs)
    attachments: [String],

    // optional comments
    comments: [
      {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        message: String,
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  },
);

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);
