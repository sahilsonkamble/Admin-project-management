// models/UserSummary.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSummarySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true, // one summary per user
      index: true,
    },

    /* =====================
     TASK METRICS
     ===================== */
    tasks: {
      assigned: { type: Number, default: 0 },
      completed: { type: Number, default: 0 },
      inProgress: { type: Number, default: 0 },
      overdue: { type: Number, default: 0 },
      blocked: { type: Number, default: 0 },
    },

    /* =====================
     PROJECT METRICS
     ===================== */
    projects: {
      assigned: { type: Number, default: 0 },
      completed: { type: Number, default: 0 },
      active: { type: Number, default: 0 },
    },

    /* =====================
     LEAVE METRICS
     ===================== */
    leaves: {
      totalAllowed: { type: Number, default: 0 }, // yearly
      taken: { type: Number, default: 0 },
      remaining: { type: Number, default: 0 },
      sick: { type: Number, default: 0 },
      casual: { type: Number, default: 0 },
      unpaid: { type: Number, default: 0 },
    },

    /* =====================
     WORKING HOURS
     ===================== */
    workingHours: {
      today: { type: Number, default: 0 }, // in hours
      thisWeek: { type: Number, default: 0 },
      thisMonth: { type: Number, default: 0 },
      total: { type: Number, default: 0 },
    },

    /* =====================
     ACTIVITY SNAPSHOT
     ===================== */
    lastActivityAt: { type: Date },
    lastTaskCompletedAt: { type: Date },
    lastLoginAt: { type: Date },

    /* =====================
     FLAGS / STATUS
     ===================== */
    status: {
      type: String,
      enum: ["active", "inactive", "on_leave"],
      default: "active",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.UserSummary ||
  mongoose.model("UserSummary", UserSummarySchema);
