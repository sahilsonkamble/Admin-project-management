// models/Task.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const TaskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    project: { type: Schema.Types.ObjectId, ref: "Project" }, // project_id
    team: { type: Schema.Types.ObjectId, ref: "Team" }, // team_id (optional)
    assignee: { type: Schema.Types.ObjectId, ref: "User" }, // single user assignee
    assignees: [{ type: Schema.Types.ObjectId, ref: "User" }], // or multiple
    status: {
      type: String,
      enum: ["todo", "in_progress", "review", "done", "blocked"],
      default: "todo",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    env: { type: String }, // e.g. "production", "staging"
    startDate: { type: Date }, // sDate
    endDate: { type: Date }, // eDate
    // metadata
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    commentsCount: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
);

// helper index to query tasks by project + status
TaskSchema.index({ project: 1, status: 1 });

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);
