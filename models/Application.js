// models/Application.js
import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },

    status: {
      type: String,
      enum: ["waiting", "approved", "cancelled"],
      default: "waiting",
    },
  },
  { timestamps: true },
);

export default mongoose.models.Application ||
  mongoose.model("Application", ApplicationSchema);
